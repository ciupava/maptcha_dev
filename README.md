# :tea: Maptcha-dev

👷 !!! MapTCHA is still a work-in-progress. 🧰

🗒️ Meetings minutes and notes available in the [HackMD doc](https://hackmd.io/@annazan/SJgbLKK6C).

💻 Follow issues and start collaborating at [project page](https://github.com/users/ciupava/projects/2).

</br>
🤸 If you think you might have the skills to help developing Maptcha, and you are happy to join the team, we are always looking for enthusiastic collaborators! 🗺️ 🚀


---

We have presented the proof of concept for MapTCHA at **[FOSDEM 2025](https://fosdem.org/2025/schedule/event/fosdem-2025-5879-maptcha-the-open-source-captcha-that-improves-openstreetmap/)**.</br>Here you can find the [video recording](https://mirror.cyberbits.eu/fosdem/2025/aw1120/fosdem-2025-5879-maptcha-the-open-source-captcha-that-improves-openstreetmap.av1.webm) and the [slides](https://github.com/ciupava/maptcha_dev/blob/main/slides/Fosdem25_slides.pdf) for that presentation.

We have further presented at State of The Map Europe 2025 **[SOTM 25](https://pretalx.com/sotmeu2025/talk/review/L9JS3X83LWDSLGQ8XUDJVUHTTDV3FKY8)**.</br>
Here the [slides](https://github.com/ciupava/talks/blob/main/SoTMEU25_Maptcha.pdf).


---
**Intro**

Bots and spam are challenges for online platforms. Traditional CAPTCHAs help block bots, but often involve improving proprietary maps and software, while exposing user information to third-party CAPTCHA providers.

_OpenStreetMap (OSM)_ has many objects remaining to be mapped, but the quality of AI-generated objects is not high enough for direct inclusion.

We introduce **MapTCHA**, a CAPTCHA that leverages the uncertainty of interpreting imagery with computer vision, and provides human verification for AI predictions: you are asked to identify images containing correctly interpreted objects, e.g. building outlines.

Here the link to the demo we have used to test the prototype before FOSDEM https://maptcha.crown-shy.com/

You'll be presented with either a "classic CAPTCHA" grid version or a "swipe" version. Go through it and give a feedback!


</br></br>
_Grid example_

<img width="346" alt="Grid" src="https://github.com/user-attachments/assets/c289fe77-bc75-4da9-ad84-dc742c9048c6" />

_Swipe example_

<img width="346" alt="swipe" src="https://github.com/user-attachments/assets/0fb5bd7a-a325-4086-b0c5-586e0485e226" />



</br></br>
---


**Notes on the `data` folder**  (October 2024)

This folder contains all the data ready for the mockup, separated by folder the 4 truth categories (TP, TN, FP, FN).

This initial data was created using ~10 cities pretrained models, i.e., the results of the inference (prediction) process on these fine-tuned models. It was run on data that @ciupava has locally, not obtained from the [fAIr website](https://fair-dev.hotosm.org/), as we need to have the labels to be able to compare with the predictions and create the 4 truth categories, and fAIr doesn't provide that.

The images are separated by folder, one per category.  
File names format: `[category]_m[model ID]_[polygon ID (within that model)].png`

In each image we have the original RGB tile used for prediction, in general at zoom level 20, with overlaid one building feature outlined in red (these are predictions in case of TP and FP, labels in case of FN).

Possible improvements to this set of images:
- we can act on the zoom level, which would affect the dimension and amount of buildings present in a single image;
- @ciupava decided to use the original tiles as the image format, because of the nature of the available data, i.e., sparse tiles around a city, surrounded by void. Ideally we would like to have an image centered on the feature centroid, and either a buffer or set size of the image around it;
- both the above points are connected to the idea that we would have a few of images (9?) within the same captcha, and there's the risk that the features are too small to be visible, as they are now.

The data is good in some places, less good in other, because of the way it was generated (see the TN for example) and because sometimes the labels are not so good (leading to false FP haha). We might need to pass through the list.  
We have way more TP than the other categories. In particular, TN are not usable as they are now, but how would we show/use the TN anyways? See more on this in the introduction of `images_processing.ipynb`.


The functions used to create the 4 truth categories were written by @kshitijrajsharma and are available at [this GH repo](https://github.com/kshitijrajsharma/evaluator/) and [online app](https://segevaluator.streamlit.app/).

Now to @stuartlynn to start coding the mockup.


♻️ License
---

...
