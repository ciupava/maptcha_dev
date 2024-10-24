# :tea: Maptcha-dev

Initial notes available in the [HackMD doc](https://hackmd.io/@annazan/SJgbLKK6C)

---

Notes on the `data` folder: it contains all the data ready for the mockup, separated by the 4 categories (TP, TN, FP, FN).

This initial data was created using ~10 cities pretrained models, i.e. the results of the inference (prediction) process on these fined-tuned models. It was run on data that @ciupava has locally, not obtained from the [fAIr website](https://fair-dev.hotosm.org/), as we need to have the labels to be able to compare with the predictions and create the 4 truth categories, and fAIr doesn't provide that.

The data is good in some places, less good in other, because of the way it was generated (see the TN) and because sometimes the labels where not so good (leading to false FP haha).

Another thing we can think of is the zoom level and dimension/amount of buildings in a single image, considering that we shall have a few of them (9?) within the same captcha. More on how and why I ended up choosing this format by voice, or in `images_processing.ipynb`, or try to infer from the HackMD if you can :)

The functions used to create the 4 truth categories were written by @kshitijrajsharma and are available at [this GH repo](https://github.com/kshitijrajsharma/evaluator/) and [online app](https://segevaluator.streamlit.app/).

Now to @stuartlynn to start coding the mockup.


♻️ License
---

...
