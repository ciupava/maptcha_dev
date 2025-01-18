# :tea: Maptcha-dev

Initial notes available in the [HackMD doc](https://hackmd.io/@annazan/SJgbLKK6C)

---
**Notes on the `data` folder** 

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
