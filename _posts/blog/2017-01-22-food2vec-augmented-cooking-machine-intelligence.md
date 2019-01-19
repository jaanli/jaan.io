---
layout: post-light-feature
title: food2vec - Augmented cooking with machine intelligence
description: "Building a recommendation system for food & exploring the world's cuisines."
category: articles
tags: [cuisine, food, word2vec, embedding, machine learning, artificial intelligence, statistics, machine intelligence, AI]
image:
  feature: mise-en-place.jpg
  thumb: food2vec-icon.png
published: true
---

**TL;DR: Check out the [tools demo](https://altosaar.github.io/food2vec/) to explore food analogies and recommendations, or scroll down for an interactive map of a hundred thousand recipes from around the world.**

I haven't eaten in five days. I dream of food. I study food. Deep in ketosis, my body has adapted to consume itself: I am food. There is no better time to dig into modeling grub. 

Machine intelligence has changed your life, from how you listen to music through Discover Weekly playlists, consume news through Facebook, or talk to your hand computer's friendly digital assistant. But why hasn't it changed how we eat? Can we modify the ingredients of language processing algorithms to get insights about food? If you tell me what you want to eat, can I recommend complementary foods, much like Spotify recommends complementary songs? 

Word embeddings are a useful technique for analyzing discrete data. Say we use $$ 170,000 $$ words from the Oxford English dictionary. We can represent each word (such as "food") as a vector as follows: a list of $$ 169,999 $$ zeros, with a single $$ 1 $$ at the location of the word in the vocabulary. In our case, "food" may be at location $$ 29,163 $$ near other words beginning with the letter f. Then the vector for "food" would look like: 

$$ [0, 0, 0, ..., 0, 0, 1, 0, 0, ..., 0]. $$

However, this is inadequate for comparing words. To compare documents and get useful insights from our data, we need to aggregate over $$ 170,000 $$ dimensions for each word, which takes far too long. Can we do better?

Embeddings let us reduce the dimensionality of the problem, and give us a powerful representation of language. We can build a model of language where we assign a hundred random numbers to each word. To train the model, we use these hundred numbers of each word to predict their context. The "context" of a word consists of its surrounding words. This is the main idea: the context means that words that occur in similar contexts should have similar meanings. We tweak the numbers assigned to a word to make them better at predicting words in the context. Initially, the random numbers assigned to a word will be bad at predicting words in the context. But gradually, through this process of tweaking the model's predictions of surrounding words, we get a hundred numbers that are far from random. The hundred numbers representing each word will capture part of its meaning: similar words will cluster together because they occur in each other's contexts, and words with different meanings are pushed far apart (out-of-context). By representing each word as an embedding in $$ 100 $$ dimensions, we have reduced the dimensionality more than a thousandfold from $$ 170,000 $$ and gained a better representation of language.

For modeling food, we have a collection of recipes. We can define the context of an ingredient in a recipe to be the rest of the foods in the recipe. This demonstrates the flexibility of embeddings: by making a small change in the definition of the context, we can now apply it to a totally different kind of data.

### Food similarity map

After training the embedding algorithm on a collection of $$ 95, 896 $$ recipes, we get $$ 100 $$-dimensional embeddings for each food. Humans can't visualize high dimensions, so we use an approximation technique to visualize similarity between the foods in two dimensions. 

Here is a similarity map of the $$ 2,087 $$ ingredients used in the recipes. Hover over a point to see which food it represents:


<iframe width="100%" height="800" frameborder="0" scrolling="no" src="/files/food2vec_food_embeddings_tsne.html"></iframe>

The map of foods is reasonable. Ingredients from Asia cluster together, as do ingredients used in European and North American cooking.

### Recipe embedding map

We can generate an embedding for a recipe by taking the average of its ingredients' embeddings. Here is a map of $$ 95, 896 $$ recipes from around the world. Hover over a point to see the recipe, and click on the cuisine legend on the right to show or hide certain regions:

*IMPORTANT: you are about to download 15MB of data.* Click [here](/files/food2vec_recipe_embeddings_tsne.html) to access the map, zoom in, and discover new flavors. Is this the fastest way to browse 100k recipes by similarity?

Interesting patterns emerge. Asian recipes cluster together, as do Southern European recipes. Northern European and American foods are all over the place, maybe because of transmission of recipes due to migration, or over-representation in the data.

### Food similarity tool

Access the tool at [this link](https://altosaar.github.io/food2vec/#food-similarity-tool). We can calculate food similarity by looking at which food is closest in the high dimensional space in the embeddings.

These mostly make sense - foods are closest to other foods they appear with in recipes:
 * Cheese is closest to macaroni
 * Sesame oil is closest to egg noodle
 * Milk is closest to nutmeg
 * Olive oil is closest to parmesan cheese

### Food analogy tool

Access the tool [here](https://altosaar.github.io/food2vec/#food-analogy-tool). Food analogies, like word analogies, are calculated with vector arithmetic. For the analogy "Food A is to food B, as food C is to food D", the goal is to predict a reasonable food D. We can do this by subtracting food B from food A, then adding food C. For example, calculating $$ (bacon - egg) + orangejuice $$ in embedding space will yield an embedding. The closest embedding to this is $$ coffee $$ in our model of food. The classic example from word embeddings is $$ (king - man) + woman = queen $$. Is this intuitive? King is to man as woman is to queen makes sense in natural language, but food analogies are less clear. With practice, we may be able to train our taste detectors and devise hypotheses to test in the realm of food. I also included cuisine embeddings by representing them as the average of their recipes' embeddings.

Some of these are more plausible than others: 
* Egg is to bacon as orange juice is to coffee.
* Bread is to butter as roast beef is to sage.
* Smoked salmon is to dill as lamb is to asparagus.
* South Asian is to rice as Southern European is to thyme.
* Rice is to sesame seed as macaroni is to pimento.
* Roasted beef is to green bell pepper as pork sausage is to fenugreek.

### Recipe recommendation tool

Access the tool [here](https://altosaar.github.io/food2vec/#recipe-recommendation-tool). We can use our model of food as a recommendation system for cooks. By taking the average embedding for a set of foods, we can look up foods with the closest embeddings. 

For example, I am a lifelong aficionado of peanut butter jam sandwiches. I entered my usual favorite: white bread, butter, peanut butter, honey. The top recommendation was: strawberry. I've never tried that, and it's pretty good! I happily broke my fast with it. For the recipe of lamb, cumin, tomato, the top recommendation is raisin - also reasonable and interesting. Other recommendations are a bit wackier, so best of luck.

If you end up adding an ingredient to your food based on these tools, I'd love to hear how it tasted: ping me on [Twitter](https://twitter.com/thejaan) or [email](mailto:altosaar@princeton.edu)!

### What's next?

* Figuring out the right user interface to explore these models. The code for the plots and recommendation tools is on [github](https://github.com/altosaar/food2vec). It would be great to make these mobile-friendly and test other ways of presenting recommendations from the model to users.
* word2vec is not the best model for this. Multi-class regression should work well, and I added a working [demo of this](https://github.com/altosaar/food2vec/blob/master/src/food2vec.py) to the repo. This is a rare case where the vocabulary size (number of ingredients) is very small, so we can fit both models and compare them. This could reveal idiosyncrasies in the non-contrastive estimation loss used in word2vec and provides an interesting testbed.
* Scaling up the data:  Do you have a larger dataset of recipes, or do you know how to scrape one? I'd love to check it out. This would also fix bias in the data as the majority of the recipes are currently North American.
* Testing out recipe analogies combined with food analogies: this may be more intuitive for us humans. For example, "pancakes are to maple syrup, as an omelette is to cheese" could be easier to think about than analogies with individual ingredients.

### Resources

* This NYT piece, [The Great AI Awakening](https://www.nytimes.com/2016/12/14/magazine/the-great-ai-awakening.html), does a much better job at describing embeddings than I can
* Wesley has a neat paper on a similar approach: [diet2vec](https://arxiv.org/abs/1612.00388)
* Sanjeev Arora's [research](http://www.offconvex.org/2016/02/14/word-embeddings-2/) has good explanations for the analogy properties of embeddings
* The [t-SNE algorithm](https://www.oreilly.com/learning/an-illustrated-introduction-to-the-t-sne-algorithm) for visualizing high-dimensional embeddings
* The original [Nature Scientific Report](http://www.nature.com/articles/srep00196) with the data
* Dave taught a fantastic [class](http://www.cs.columbia.edu/~blei/seminar/2016_discrete_data/index.html) that helped me understand embeddings 
* Maja's paper on [exponential family embeddings](https://arxiv.org/abs/1608.00778) generalizes word2vec to other distributions that would be neat to try on this data (word2vec can be interpreted as a Bernoulli embedding model with biased gradients)
* There are a few other versions of food2vec floating around, like [Rob Hinds'](https://automateddeveloper.blogspot.com/2016/10/unsupervised-learning-in-scala-using.html)


*Thanks to [Dave](http://www.cs.columbia.edu/~blei/) for the idea, [Peter Bearman](http://sociology.columbia.edu/node/66) for presenting his work to our group, [MealMakeOverMoms](https://www.flickr.com/photos/mealmakeovermoms/) for the mise photo, [Anthony](http://anthony.ai/) for open-sourcing the embedding browser on which ours is based,  and [Plotly](https://plot.ly/) for open-sourcing their fantastic plotting library.*

Feel free to ping me on [Twitter](https://twitter.com/thejaan) or [email](mailto:altosaar@princeton.edu) with feedback or ideas!

Discussion on [Hacker News](https://news.ycombinator.com/item?id=13472721) and [Reddit](https://www.reddit.com/r/MachineLearning/comments/5px9uz/p_food_visualization_and_recommendation_engine_in/). Also see [slides](https://github.com/altosaar/food2vec/blob/master/doc/food2vec-nytimes-talk.pdf) from a talk at the New York Times on this project. 
