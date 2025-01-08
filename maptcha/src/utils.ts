import shuffle from "lodash.shuffle"
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)
import {v4 as uuidv4} from 'uuid';


export type Image={
  id:String,
  url:String
}

enum ImageClass{
  TP ="TP",
  FP ="FP",
  TN ="TN",
  FN ="FN"
}


export function getUserId(){
  let id = localStorage.getItem("user_id")
  if (id){
    return id
  }

  id = uuidv4()
  localStorage.setItem("user_id", id)
  return id  
}


export async function randomImageGrid(userId: String){
    let {data,error} = await supabase.rpc("get_random_images_for_user",{input_user_id:'19b3bb95-d72c-4741-8d7c-82dabf4148a6'});
    console.log({data,error})
    return data
}

export async function createSubmission(userId:String, imageId:String,userResponse:bool){
    console.log("submmiting submission", userId, imageId, userResponse);
    let {data,error} = await supabase.rpc("create_submission",{input_user_id:userId, input_image_id:imageId, input_user_response: userResponse});
}
