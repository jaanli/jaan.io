---
layout: post-light-feature
title: Quick fix&#58; scraping the NY Times most emailed list
description: "How I stopped frantically checking the NYTimes, the Atlantic, and the New Yorker."
category: articles
tags: [kimono, scraping, most emailed, top articles, rss]
image:
  feature: scraping.jpg
  thumb: scrapingthumb.jpg
---

I haven't found better reading than [Longform.org](http://longform.org/) or the [New York Times' Most Emailed lists](www.nytimes.com/most-popular-emailed?period=30), and most recommendation engines don't work well.

Even if it's a placebo, the vetting of thousands of actual people makes articles in 'most emailed' lists seem better. However, this means I need to visit each publication's homepage and manually skim the 'what's popular' lists.

# Enter [Kimono](https://www.kimonolabs.com/)

Combine my tedious, obsessive manual solution with Kimono's automated scraping and RSS generation, and voila - all posts show up in [Feedly](http://feedly.com/).

<iframe src="https://www.kimonolabs.com/kimonoblock/?apiid=bp6srkeo&apikey=IZ2p67Ape9GAv5gTTiWTeT4zsMODnjGV&title=NYTimes Most Emailed last 24 hours&titleColor=ffffff&titleBgColor=2DA4A8&bgColor=ffffff&textColor=6b7770&linkColor=659fc0&propertyColor=dddddd" style="width:100%;height:400px;border:1px solid #efefef"></iframe><iframe src="https://www.kimonolabs.com/kimonoblock/?apiid=crlzja6a&apikey=IZ2p67Ape9GAv5gTTiWTeT4zsMODnjGV&title=The Atlantic Most Popular&titleColor=ffffff&titleBgColor=FD6041&bgColor=ffffff&textColor=6b7770&linkColor=659fc0&propertyColor=dddddd" style="width:100%;height:400px;border:1px solid #efefef"></iframe><iframe src="https://www.kimonolabs.com/kimonoblock/?apiid=ejasz4uu&apikey=IZ2p67Ape9GAv5gTTiWTeT4zsMODnjGV&title=New Yorker Most Popular&titleColor=ffffff&titleBgColor=CF2257&bgColor=ffffff&textColor=6b7770&linkColor=659fc0&propertyColor=dddddd" style="width:100%;height:400px;border:1px solid #efefef"></iframe>


Each of these has an [accompanying](https://www.kimonolabs.com/api/rss/bp6srkeo?apikey=IZ2p67Ape9GAv5gTTiWTeT4zsMODnjGV) [RSS](https://www.kimonolabs.com/api/rss/crlzja6a?apikey=IZ2p67Ape9GAv5gTTiWTeT4zsMODnjGV) [feed](https://www.kimonolabs.com/api/rss/ejasz4uu?apikey=IZ2p67Ape9GAv5gTTiWTeT4zsMODnjGV). Creating these is as easy as clicking on the Kimono Chrome extension, selecting the elements to scrape, and hitting done.

These feeds are also available as a [mobile or web app](https://www.kimonolabs.com/kimonoapp/most-popular) (drag the web icon to your iOS/Android home screen).

If you have any thoughts on how to improve this or automate something like [Longform.org](http://longform.org/), I'd love to chat – email me at [jaan@jaan.io](mailto:jaan@jaan.io).
