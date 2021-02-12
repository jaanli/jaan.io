---
layout: post-light-feature
title: My friend radicalized. This made me rethink how I build AI
category: articles
description: One of my best friends joined ISIS. 
tags: [machine learning, AI, incentives, business, securities fraud, addiction, discrimination, research]
image:
  thumb: dont-become-data-for-ai-icon.svg
  feature: dont-become-data-for-AI/performance-heart.gif
published: true
---

It was a slow descent, after a childhood of abusive parents and trauma. 

In the years before John’s flight to Syria and eventual death in a drone strike, his Facebook posts devolved into angry YouTube videos and hatred toward “infidels” in Canada and the USA. 

<figure>
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/1t0YesVmizM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
</figure>

The last time I talked to John, I knew the secret service had been investigating him for months and that he had already left for Syria. Our last chat is surreal to read in hindsight; I come off as extremely nonchalant at his mention of Syria. I remember trying hard to stay cool and play it off, fearful of John’s wrath should he come back—after all, he knew where my family lived and my little sister was still at home. 

John and I connected because we were jazzed about biology. He wanted to major in it at McGill while I did biochem and we tried our hand at a pharma company. We’d play pickup hockey, jam in my basement, make YouTube videos, and cook up startup schemes. But a year and a half out of high school found him converted to Islam and us locked in debate for hours, now about whether the Qur'an was the only true science left in the world. By this time John had changed his name to Yahya, grown a beard, stopped playing music—now a sin, the devil’s work designed to distract us from our purpose—and had developed an Arabic accent as you can hear in the video. 


<figure>
    <img src="/images/dont-become-data-for-AI/chat.svg">
    <figcaption>My last chat with one of my best friends John (Yahya).</figcaption>
</figure>


I sometimes wonder what we could learn from an audit of John’s Facebook newsfeed over the course of his radicalization, considering that I did research internships at Google Brain and DeepMind and completed a significant part of my PhD on recommender systems. While the Facebook posts we saw from John were increasingly extreme, what were the machine learning algorithms behind the newsfeed predicting he would search for and click on? 

The machine learning systems that power social media can have significant negative effects, especially when Facebook [auto-generates](https://apnews.com/article/3479209d927946f7a284a71d66e431c7) extremist content or when ISIS [continues to recruit](https://www.wired.co.uk/article/islamic-state-terrorism-facebook) on social media with the help of automatic recommendation systems. Radicalization is not going away. In the past few weeks we’ve seen how powerful algorithms can contribute to people inciting insurrections in America. As I watched a mob batter down the windows of the Capitol, inspired by online echo chambers in tweets and newsfeeds, I thought of my work in machine learning, thought of that drone strike, and wondered ‘did I unwittingly help create this?’

We’re used to machine learning running our world through the interfaces in virtual assistants, newsfeeds, or navigation systems that change our behavior every day. But here I aim to provide a measured perspective on the risks we take when choosing to support companies and tools that are powered by machine learning. After exploring the risks that make the boons of machine learning less rosy, we discuss how we might mitigate risk and hold power to account in an environment where business incentives limit our ability to have this discussion. 


----------


## What is machine learning? 

One of the tools for deploying artificial intelligence is machine learning. A machine learning algorithm is a set of instructions that helps a machine learn from patterns in data. Those patterns can then be used to help people make decisions.

A newsfeed, for example, can be created using a machine learning method called a recommender system. The pattern for the machine to learn in a recommender system could be which ads are most likely to be clicked on that are least likely to cause the user to navigate away from the newsfeed, losing potential revenue. To keep the user engaged with the system and maximize the chance that they click on an ad, the machine learning algorithm should provide enough interesting content similar to what the user has clicked on and read before. 

An example of a machine-learnt pattern: I navigated to news.google.com and was presented with an article on [how to use the Apple logo on the back of my iPhone as a button](https://www.creativebloq.com/news/apple-logo-iphone-tap). This pattern may have been learned because I’ve been searching for how to perform simple tasks in iOS, having recently switched from a Google phone to an iPhone. The machine learning algorithm learned to associate the text in the article I was recommended with my recent searches, and the algorithm predicted that I was likely to click the link. Similar systems power [Twitter’s newsfeed](https://blog.twitter.com/engineering/en_us/topics/insights/2017/using-deep-learning-at-scale-in-twitters-timelines.html), [Google search](https://blog.google/products/search/search-language-understanding-bert/), [YouTube recommendations](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45530.pdf), and the [Facebook newsfeed](https://ai.facebook.com/blog/online-and-offline-tests-to-improve-news-feed-ranking/).

Besides helping us find information, machine learning algorithms run the voice recognition of Siri, Alexa, and the Google Assistant; they power photo and document apps alongside countless other tools we interact with every day. (Twitter's machine learning algorithms helped me [choose a headline](/images/dont-become-data-for-AI/twitter-optimize.png) for this article.) AI and machine learning may also help us [understand biology](https://www.nature.com/articles/d41586-020-03348-4), reduce road accidents thanks to [autonomous vehicles](https://www.tesla.com/autopilotAI), diagnose disease [more accurately](https://www.nature.com/articles/s41746-020-00376-2), understand and remedy [health disparity](https://www.nature.com/articles/s41591-020-01192-7), or beat pandemics with [better vaccines](https://digital.hbs.edu/artificial-intelligence-machine-learning/ai-puts-moderna-within-striking-distance-of-beating-covid-19/).  


----------
## Risks of machine learning used in social media

But behind the benefits of machine learning are incentives and power structures, such as those in the business models of the six FAANGM companies (Facebook, Amazon, Apple, Netflix, Google, and Microsoft) that make up a [quarter of the S&P index](https://www.yardeni.com/pub/yardenifangoverview.pdf) and were responsible for the majority of its gains in 2020. Folks at these big companies, with a median salary of [$339,574 per year](https://aipaygrad.es), have the incentive to use machine learning to earn more money through products, memberships, or ads, and are not incentivized to talk about the risks intrinsic to such business models.


<figure>
    <img src="/images/dont-become-data-for-AI/faangm-performance.svg">
    <figcaption>Performance of the FAANGM companies relative to the S&P index (<a href="https://www.yardeni.com/pub/faangms.pdf">source</a>). These six companies are reliant on machine learning algorithms across their platforms.</figcaption>
</figure>

Might these power structures amplify existing patterns of inequality with the help of machine learning or target vulnerable populations susceptible to misinformation or addiction? There’s a chance the patterns of inequity supported by ad-based revenue models—which help build machine learning systems—reinforce and mirror the patterns of inequity in broader society. As an expert in this area, I’m concerned when I see friends and colleagues unwilling to go public about these problems, perhaps out of fear of repercussion from their employers. We’re left with few alternatives other than to speak out when faced with powerful silencing mechanisms.

Anecdata like my ex-friend John’s online radicalization can inform our discussion about the potential risks of machine learning deployed in social media across our devices.  The question may be one of not *whether*, but of *how much* algorithms can amplify existing patterns in humans and society. 

One piece of evidence that machine learning can amplify existing patterns of violence is that Facebook has an established team for counterterrorism policy that itself, ironically, [relies on machine learning](https://tnsr.org/2019/02/crossroads-counter-terrorism-and-the-internet/https://tnsr.org/2019/02/crossroads-counter-terrorism-and-the-internet/) and is privy to the same business incentives. (The more content you block and the more people you ban, the more your revenue decreases.) The company has already admitted to having an effect on the [atrocious killings in Myanmar](https://www.nytimes.com/2018/11/06/technology/myanmar-facebook.html). Similarly, Twitter, YouTube, and Facebook all played a significant role in propagating [QAnon](https://www.bellingcat.com/news/americas/2021/01/07/the-making-of-qanon-a-crowdsourced-conspiracy/) and organizing the [Capitol insurrection](https://www.npr.org/sections/insurrection-at-the-capitol/2021/01/12/956003580/facebook-removes-stop-the-steal-content-twitter-suspends-qanon-accounts) in the United States in January 2021.  Geopolitical risk might also be rising through this technology, as a whistleblower at Facebook has admitted to [global political manipulation capabilities](https://www.buzzfeednews.com/article/craigsilverman/facebook-ignore-political-manipulation-whistleblower-memo) created, in part, through the use of machine learning.

<figure>
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/_7FWr2Nvf9I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
<figcaption>How conspiracy theorists such as QAnon aficionados can game Instagram algorithms, hijack hashtags to evade detection, and effectively reverse engineer recommendation algorithms to rank highly in vulnerable targets’ newsfeeds.</figcaption>
</figure>

Besides saving would-be extremists from algorithms and America from filter bubble insurrectionists, can we save the children? No, not from a [cabal](https://www.bellingcat.com/news/americas/2021/01/07/the-making-of-qanon-a-crowdsourced-conspiracy/), but from the terrifying content both [created *and* recommended](https://medium.com/@jamesbridle/something-is-wrong-on-the-internet-c39c471271d2) by algorithms, content that is hard to detect and [harder to keep removing](https://www.wired.co.uk/article/youtube-for-kids-videos-problems-algorithm-recommend) given the financial incentives to continuing the onslaught.  To rub salt in the wound, there is research linking early-childhood events to [dopamine and addictive behavior](https://peerj.com/articles/8858/) that machine learning may exploit. Newsfeeds are explicitly designed to target [dopamine circuitry](https://www.nirandfar.com/how-to-manufacture-desire/) and might therefore disparately affect marginalized populations. Furthering this argument from a socioeconomic perspective, consider that poor kids own fewer devices than rich kids but experience [*more* screen time](https://www.vox.com/recode/2019/10/29/20937870/kids-screentime-rich-poor-common-sense-media). Leaving aside the question of how much machine learning may help target certain populations over others, consider that companies like YouTube and Facebook make strictly more money the more poor kids with ample screen time watch content; the earlier they start, the better. 

> there is research linking early-childhood events to [dopamine and addictive behavior](https://peerj.com/articles/8858/) that machine learning may exploit

Given these documented risks of machine learning when it is used to power social media algorithms, it is worth coming up with ways to mitigate risk in the deployment of machine learning technology throughout our homes, communities, and countries.  


## <a name="societal-tactics" href="#societal-tactics">Societal tactics to mitigate the risks of machine learning</a>

We’ve explored the ways machine learning may target vulnerable people, countries, and patterns for profit, remaining aware that there’d be more money in avoiding this line of inquiry in the first place. Societal patterns like terrorism, conspiracy theories driven by misinformation, and grotesque kids content run the risk of being amplified through the machine learning in social media. People like John might be more likely to be radicalized because of their life experience, therefore subject to the unintended consequences of companies that develop machine learning. We need to ensure such a discussion happens at a societal level with the involvement of those most affected along with experts in ethics, policy, law, and machine learning researchers not subject to corporate incentives.

I’m curious which legal avenues open up for managing machine learning-powered businesses, premised on the documented pernicious effects of algorithmic social media. For example, at an individual level the genetics that can make someone vulnerable to newsfeed addiction are legally protected attributes and cannot be discriminated against, and we are all vulnerable to addiction. Across the board, corporate contribution to violence tends to be illegal. So which legal routes can help preserve the benefits of machine learning while protecting the vulnerable from the harmful effects present in this technology? 

Capitalism provides one way we might legally act to reduce risk. Public companies in America are driven by profit and as Matt Levine (a Bloomberg columnist) puts it, [everything is securities fraud](https://www.bloomberg.com/opinion/articles/2019-06-26/everything-everywhere-is-securities-fraud) in this context. In other words, companies in America have a fiduciary responsibility to shareholders: owning a security, or a share of a company, means the company cannot do things that decrease its value without telling its shareholders. Failure to disclose things that decrease value constitutes securities fraud. Alphabet, Google’s parent company, was [successfully sued](https://www.nytimes.com/2020/09/25/technology/google-sexual-harassment-lawsuit-settlement.html) using this legal theory, as was [Pinterest](https://www.theverge.com/2020/12/1/21755406/pinterest-shareholders-lawsuit-sue-toxic-work-culture-discrimination), because creating a toxic work environment rife with sexual harassment means shareholders would make less money. This may seem like a repugnant, objectifying legal argument, as it seems to enrich the wealthy shareholders without remunerating the actual victims of discriminatory wage gaps and harassment. 

Securities fraud thinking may lead to even more abhorrent legal arguments, oblivious to the human costs of technological disaster: if machine learning newsfeeds and recommendation systems contribute to deaths as in the case of [Myanmar](https://www.nytimes.com/2018/11/06/technology/myanmar-facebook.html), that means fewer eyeballs around to look at ads, decreasing advertisement revenue. Shareholders might be able to sue over this to prevent the same thing from happening in the future, and I hope any legal wins significantly compensate the families and communities that suffered the atrocity itself. This is one of the downsides of free-market capitalism as a dominant arbiter of moral value in society, where human life is treated with clinical remove and passive legal language. Nevertheless, securities law may be one of the few points of leverage sufficiently powerful to reflect the values we want in technology such as machine learning. Some human values may be repugnant, but tools like securities law represent an opportunity to enforce more benefit to humans versus corporations.

Besides securities fraud arguments, discrimination lawsuits might be another legal avenue. Suppose scientists find conclusive evidence that depending on their race, gender, or income, some people are more likely to become addicted to machine learning technology. Would this be sufficient evidence in court for shareholders to claim that discrimination occurred, reducing shareholder value? Does causing newsfeed addiction or contributing to radicalization via algorithms count as securities fraud? After all, newsfeed addiction means better engagement numbers and more daily active users, but better business metrics may not better the people subject to them. 

More immediately, [policy](https://www.wired.com/story/opinion-platforms-must-pay-for-their-role-in-the-insurrection/) and law will likely be used to hold technology companies accountable for the Capitol insurrection in 2021, and I hope any lawsuits examine the role of [machine learning in the Capitol attack in court](https://www.yahoo.com/now/facebook-twitter-culpable-dipayan-ghosh-225443250.html). In other settings, there are already lawsuits against [algorithmic racial profiling](https://www.hollywoodreporter.com/thr-esq/youtube-alleged-racially-profile-artificial-intelligence-algorithms-1298926) and [gender discrimination](https://www.technologyreview.com/2019/04/05/1175/facebook-algorithm-discriminates-ai-bias/), alongside studies of [predictive policing](https://logicmag.io/commons/enter-the-dragnet/).

Another way the risks of machine learning are decreasing is due to [falling advertising revenue](https://www.forbes.com/sites/mikevorhaus/2020/07/06/the-new-advertising-zeitgeistgoogles-us-ad-revenue-to-decline/?sh=7c042fdc236e). Industry labs building AI are [losing money](https://www.cnbc.com/2020/12/17/deepmind-lost-649-million-and-alphabet-waived-a-1point5-billion-debt-.html), which means they are [first to go](https://www.wsj.com/articles/uber-cuts-3-000-more-jobs-shuts-45-offices-in-coronavirus-crunch-11589814608?mod=djemalertNEWS) when revenues fall sufficiently. Concurrently, the machine learning tools that underpin the business of Google, Facebook, and other big companies are becoming more accessible and open source. As revenues from exploitative sources such as advertising continue to fall and algorithmic bias becomes mainstream public knowledge, we might hope that competition emerges such as in efforts like [Signal](http://signal.org) and [Canopy](https://canopy.cr/). Falling revenue, privacy awareness, and open source can all better align the incentives for companies to empower rather than exploit users through data. Academic labs can also play a role by leading [transparent, open source efforts](https://nbiair.com/) to help understand how stakeholders in machine learning systems can inform research that benefits society as a whole. But while we wait and hope for the relevant people in power to create change, there is much we can do as individuals to understand and learn how to manage the risks from machine learning algorithms in many aspects of our lives. 


## <a name="individual-tactics" href="#individual-tactics">Individual tactics for mitigating the risks of machine learning</a>

Like we explored in societal-level tactics, what can we do to interrogate how machine learning affects our day-to-day lives? The goal of these tactics is to inform ourselves and act on behalf of those less fortunate who may be at risk of discrimination or targeting. By advocating on behalf of ourselves and others and collecting N=1 data, we might continue to find that machine learning at large companies leads to bad incentives. Overcoming these incentives can require individual action to remedy, and these are some of the tactics I have found helpful. [Send me any more](mailto:j@jaan.io) and I’ll add them to this running list!

**Start a dialog with people who are impacted: engage with the context of your work.** 
If you build machine learning tools, actually use them. A lot. Think about who your tools might impact, and see if you can talk to those people, whether you work for a hospital, law enforcement agency, or a tech company. Describe the work you do in plain English, with what data and with which business interests driving the technology. See what kinds reactions you get. For example, the strong negative feedback I got from describing my research in machine learning and mental health shaped the research and helped correct course. This type of informal ethnographic fieldwork with our friends, families, and communities is underrated and presents a low-risk, high-impact way to inform what we study, with whom, and for whom.

**Observe how experts behave with the tools they build.** 
It is curious that machine learning professors first introduced me to Signal years ago, and I’ve been on it since—mainly to talk to them and other researchers who refuse to communicate over channels like SMS or WhatsApp that can be surveilled. One machine learning professor uses a neutered Twitter to only display arxiv.org links and avoid addiction. These are just some of the experts helping build the tools we use every day. If they refuse to use the products they contribute technology to in their own lives, why should we behave any different without understanding this large gap between values and behavior?  

**Speak up about the risks of the tools you build or consciously stay silent.**
Take personal responsibility for starting the conversations you want to have about the potential risks of the tools you work on. Whether by attending [workshops at conferences](https://nbiair.com/) or being more vocal on Slack, there are small ways we can positively contribute to the tech and machine learning research culture around risk.  Notice when you might be silencing yourself out of fear of retaliation or the difficulty of finding alternative employment, and make a conscious decision about whether you are OK with the risk-benefit trade-off in any decision to remain quiet. 

**Notice how people are allowed to study different things in industry versus academia.**
Industry tends to be a one-way street, and it is hard for to think of many examples of people leaving the cushy confines of FAANGM companies. Be wary of the golden cage effect where people making [lots of money](https://aipaygrad.es/) may prefer not to think about or discuss the risks of machine learning, or may avoid doing research on it for fear of [getting fired](https://www.technologyreview.com/2020/12/16/1014634/google-ai-ethics-lead-timnit-gebru-tells-story/). 

For example, the field of algorithmic fairness [*started*](https://theintercept.com/2019/12/20/mit-ethical-ai-artificial-intelligence/) because Microsoft told a researcher to avoid the research she wanted to do on discriminatory advertising (see quote below). In a similar instance of a large company suppressing research due to optics, the co-lead of Google’s AI and ethics team was [fired over a research paper](https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/) highlighting flaws in a model that [powers Google search](https://blog.google/products/search/search-language-understanding-bert/), one of Google’s main sources of revenue. Events like this are costly to the individuals involved, which is why it’s worth [supporting them](https://googlewalkout.medium.com/standing-with-dr-timnit-gebru-isupporttimnit-believeblackwomen-6dadc300d382) in the rare cases they are able to speak out, whistleblow, or otherwise inform the public when business interests override public interest and academic freedom.  


> "[Cynthia Dwork] had long been personally concerned with the issue of discriminatory advertising, but Microsoft managers encouraged her to pursue [another] line of work because the firm was developing a new system of online advertising, and it would be economically advantageous to provide a service 'free of regulatory problems.'" ---Source: [The Intercept](https://theintercept.com/2019/12/20/mit-ethical-ai-artificial-intelligence/).

**Join a union to remedy power structures.**
I’m at Columbia and joined the United Automobile and Agricultural Workers Union [local chapter](https://columbiapostdocunion.org/), having learned about it only because I was in a bind with my immigration status, out of options, and hoped a web search would turn up a lifeline. It’s been scary to announce union membership after seeing retaliation efforts such as people losing access to email addresses. But being a small fish in a big pond is less lonely with a team that’s on your side, not on the side of a gargantuan employer whose incentives are to suppress allegations of wrongdoing. Joining a union, especially one like the [Alphabet Union](https://alphabetworkersunion.org/) if you’re at Google, broadens your options from whisteblowing to creating systemic change with lasting benefits to future colleagues who may not have representation or feel empowered to speak out. 

**Use open source for operations security.**
Use [Signal](http://signal.org) and convince your friends and family to as well. At one point I made it an annoying game to see how many people I could convert. Everyone that switches to Signal means one less datapoint for Google, Facebook and the NSA. Look for open source apps where possible: I use [Bitwarden](http://bitwarden.com) for passwords, [Joplin](http://joplinapp.org) for notes, [Dragonfly](https://github.com/dictation-toolbox/dragonfly) for speech recognition grammars, [Visual Studio](https://code.visualstudio.com/) for code, [Remarkable](http://remarkable.com) as a tablet, [SoloKeys](http://solokeys.com) for security keys, and so forth. I haven’t done this yet, but hope to switch from Gmail to [Fastmail](http://fastmail.com). If you program, consider contributing to open source and developing tools that make it easier to own your own data and transition between social media accounts. Where possible, own your own infrastructure such as domain names, email addresses, and distribution channels such as email lists.

**Block targeting & scrub privacy settings.**
Go through this [guide](https://www.wired.co.uk/article/how-to-block-ad-tracking-facebook-instagram-twitter-google). If eight billion people were to opt out of ads personalized through exploitation of private data, business models that incentivize misinformation would have a harder time thriving. Use uBlock or other browser extensions to [block all newsfeed](http://jaan.io/info-overload) or HTML elements with machine learning-created content on LinkedIn, YouTube, and so on. Unfollow everyone on Facebook to clear your newsfeed. Expunge your data from Google by enabling auto-delete for location, web, and voice recording [history](https://myactivity.google.com/activitycontrols). The less data I sacrifice to private interests the less cognitive load I notice, perhaps from fewer worries about anticipating scenarios involving my data, the machine learning systems that might be applied, and the systems’ secondary and tertiary effects in the world. 

**Pay off or stay off!**
If a company is exploiting user data, think twice about giving them your money. I haven’t used Spotify in years, worried that at the margins I’d be contributing to a data-driven lack of originality in music. Instead, I use [Bandcamp](http://bandcamp.com), [Plex](http://plex.tv), [hypem.com](http://hypem.com), and [Soundcloud](http://soundcloud.com), meaning more of my money goes directly to artists than it ever would via Spotify. For other media, get off Netflix and try [Drafthouse](http://drafthouse.com), [MUBI](https://mubi.com/), or [Criterion](http://criterionchannel.com). Switch from a Google Fi phone plan to a less machine learning-oriented service that’s less likely to analyze your conversations. Finally, if you can, consider fasting from or permanently quitting YouTube and other social media or search engines in favor of efforts like [DuckDuckGo](https://duckduckgo.com/), [LBRY](https://lbry.com/), or [PeerTube](https://joinpeertube.org/). 

**See how hard it is to own your medical data.** 
Become your own data broker: in America, we are legally allowed to request a copy of our [medical information](https://www.law.cornell.edu/cfr/text/20/401.55). Try it out and see how far you get. Providers may be reluctant to comply: such a request can involve paperwork, the usual run-around in a hospital phone system, hold times, and often a return trip across the city to the doctor’s office to pick up digital versatile discs or compact discs, then finding a library with computers that have disc drives to copy the data. Seeing the roadblocks preventing a patient from accessing their own data is fascinating, besides being medically valuable should something happen in the future requiring a baseline. (And it’s just cool to see your heart beating!) Such an exercise can illustrate how one-sided the collection of extremely private data really is. Working at a research hospital, I can train machine learning models on millions of patients’ medical records. But as a patient myself, getting access to my own data in a human-readable, archivable format is nowhere near as convenient. 

<figure>
    <img src="/images/dont-become-data-for-AI/performance-heart.gif">
    <figcaption>My performance (he)art. A side benefit of exploring how difficult it is to own your private medical data is learning a lot about how your body works, down to the beat.</figcaption>
</figure>

**See how hard it is to own your financial data.**
Go through the [Personal Data Removal & Credit Freeze Guide](https://inteltechniques.com/data/workbook.pdf) and the [Big Ass Data Broker Opt Out List](http://Big Ass Data Broker Opt Out List.). See what it’s like to freeze your credit, delete old accounts, and remove your name, address, and phone number for advertisers’ mailing lists. Similar to medical data ownership, gaining control of your financial life often takes hours of waiting on hold, navigating outdated websites, and highlights how much the world is stacked against an individual hoping to reduce the harms of data and machine learning through solitary action. 

**Learn about bad practices at companies.** 
I switched to an iPhone recently, worried about Google and Alphabet’s track record on privacy. Google is less transparent about user data collection and has more incentive to avoid research into the risks of machine learning. A larger portion of Google’s revenue is from ads versus selling devices such as the Pixel, so I naively hope that buying into Apple means buying into an ecosystem with less incentive to monetize data. While Apple’s [track record](https://fortune.com/2020/12/14/apple-iphone-india-factory-workers-protest-attack/) is [not great](https://americanaffairsjournal.org/2020/11/foxconns-rise-and-labors-fall-in-global-china/) either, neither are [Girl Scout Cookies’](https://www.washingtonpost.com/business/child-labor-in-palm-oil-industry-tied-to-girl-scout-cookies/2021/01/02/7e836b20-4d60-11eb-97b6-4eb9f72ff46b_story.html) or many of our clothes’ origins. Try to be aware of the flow of money and acknowledge that deciding between the lesser of two evils is hard. Compared to Google, Apple may be ahead when it comes to helping users avoid becoming data, for example by forcing the hand of  Facebook to the point that the company is [buying ads](https://twitter.com/signalapp/status/1348079223701794819) for Messenger when people search for Signal. 

**Vote with your feet.**
If a company’s practices make you uncomfortable and you have the privilege to consider the ethics of an industry or employer, then do your homework. Granted, I am an immigrant in a position of privilege, lucky to pursue my American dream as I see fit; I don’t have dependents and was fortunate to survive a pandemic job hunt without looking at salary. But it is a duty of the privileged to try to hold employers accountable and decline employment opportunities where feasible. Google and other tech companies continue to work with the [department of defense](https://breakingdefense.com/2020/07/pentagon-ai-gets-overwhelming-support-from-tech-firms-even-google/) and I prefer not to support that, so I do not apply for jobs there. 

In a research context, I try to vote with my feet and commit to [open sourcing](https://venturebeat.com/2019/04/11/ai-predicts-hospital-readmission-rates-from-clinical-notes/) the machine learning work I do, especially in medicine. Law and policy in machine learning and health care is in its infancy, and open source research is one of the few mechanisms I trust to ensure the incentives are aligned with patients’ interests. 

**Read the fine print.**
Tying together the difficulty of owning your own medical and financial data and being careful about where you work, it is worth getting in the habit of reading contracts, privacy policies, and user agreements where possible. Whether catching spelling mistakes in my therapist’s HIPAA policy or finding intense non-disclosure agreements in employer contracts, fine print provides another touchpoint onto our relationship with data and AI now and in the future. For instance, the life coaching company my employer pays for records all coaching calls, presumably to re-listen, and likely for an eventual machine learning component. My coach kindly requested my data not be used and I’m glad I made the uncomfortable request. Such exercises illustrate that the world of fine print is also stacked against the consumer: well-paid lawyers write documents, sometimes to obfuscate what we are signing off on. But with practice it becomes easier to stand up for better data practices. 

**Learn about edge cases at the extremes.**
Try to see what ‘full consent’ looks like to see how it might change your behavior and whether you are OK with that: engage in little exercises testing various privacy and surveillance regimes and see how you feel. For example, for a week or two share your 24/7 location with trusted friends and family (the Google Maps app supports this). Notice how any small white lie we may tell ourselves or people closest to us might nag at cognitive load. During this exercise I realized with shame that I hadn’t responded to a friend’s text to hang out when in their neighborhood and found myself hoping they hadn’t recently used Google Maps to find a coffee shop and seen me. Exercises in a similar vein might look like going hard at reverse-engineering the YouTube recommendation algorithm, which could be watching a few canonical [QAnon videos](https://www.bellingcat.com/news/americas/2021/01/07/the-making-of-qanon-a-crowdsourced-conspiracy/) or trying other colorful search terms to collect the experience of what it feels like to see your newsfeed recommendations change the deeper down the rabbit hole you go.

**Pay the cost.**
Use your privilege to take on more responsibility as many aspects of our life are zero-sum. Someone’s win is another’s loss. Notice when this happens and decide when you are willing to pay the cost for doing what’s right. This can mean foregoing employment, asking someone to be hired in your place, or looking bad in office politics, and we can often find the capacity to pay the cost when someone else may have a harder time doing that. I am curious about the ways we can take on more responsibility on behalf of others who are less well-off, others who might not want to rock the boat as much as someone in a position of privilege. 


<figure>
    <img src="/images/dont-become-data-for-AI/palantir-homepage.jpg">
    <figcaption>The Palantir homepage, where data about us of all types can end up whether it be from credit reports, financial institutions, social media, or criminal justice systems. By advocating for ourselves throughout institutional touchpoints, we can learn how our private data can enter such a system and be exploited. Source: <a href="https://logicmag.io/commons/enter-the-dragnet/">Logic Magazine</a>.</figcaption>
</figure>

**Consider why you may not want to think, talk about, or do research on the risks of machine learning.**
We examined some of the power and incentive structures that support the development of machine learning. So how truthful can we be in trying to understand how our profits from the S&P or salary affect our willingness to discuss these subjects? I am scared of publishing this post for fear of negative repercussions but am willing to do it because I am also scared of silencing myself. Subconsciously, part of me may want a job and the [high-salaried stability](https://aipaygrad.es) that comes from working in tech, and my retirement is tied to the profits of large companies that depend on machine learning. But I’m able to manipulate my own behavior, so publishing this post is an N=1 experiment; seeing any repercussions is one way to learn from my environment whether my fears are well-founded. 

**Consider the counterfactual to highlight privileged decisions.**
When faced with a difficult situation related to data, consider protected attributes such as race, age, income, or gender. Would a decision be more difficult if you were… of a different race? Different gender? Questions like this are easier when you can ask people you know and trust who are different from you, watch movies like [Coded Bias](https://www.codedbias.com/), or read books like [Invisible Women](https://www.penguin.co.uk/books/111/1113605/invisible-women/9781784706289.html). 

As an example: I am a white man. Counter to fact, suppose everything in my life were unchanged save for my race and gender, and I was a Black woman. This type of counterfactual thought experiment is [easy to critique and difficult to interpret](https://phenomenalworld.org/analysis/direct-effects), but can sometimes be useful in areas such as policymaking and economics, both of which rely on counterfactual estimates. Were I a Black woman in this counterfactual scenario, chances are [high](https://onlinelibrary.wiley.com/doi/10.1111/jomf.12699) I’d have an incarcerated biological family member, in which case a decision to undergo a genetic test may be fraught. [Federal law](https://www.congress.gov/bill/109th-congress/senate-bill/1606) requires any adult arrested for a federal crime to provide a DNA sample. And identifying relatives from DNA is easy. Participating in genetic testing, whether for a commercial company like 23andMe or a National Institutes of Health study like [All Of Us](https://allofus.nih.gov/) can make it more likely that biological family members present and future are genetically profiled and discriminated against. Personally, I ended up deciding to participate in that study, but worry that I am implicitly supporting biased data collection and racial profiling. I hope the medical benefits outweigh the risks for groups subject to system racism.

**Think about whether a behavior is scalable.** 
Another way of tying together individual-level tactics is to think about the scalability of our decisions and actions. If *everyone* blocked targeted ads, froze their credit, owned their medical and financial data, unionized, read the fine print, voted with their feet, switched to Signal, and acted on counterfactuals, then certain companies would find it harder to do business. Another concrete example: as incomes rise, wealthier people sometimes gentrify or move out of integrated cities and neighborhoods to wealthier and often less-integrated areas. At an individual level this makes sense. Yet if everyone took the same route, we might not like the long-term homogenizing effects. Similar to thinking of the counterfactual, considering whether we like the outcome of imagining our behavior scaled up to everyone in society may help guide action. 

**Maximize agency.** 
Another theme throughout these tactics is agency: how can we best support ourselves and others in having more choice in life and fewer options for remaining at the mercy of algorithms? We are lucky to consider these questions and the principle of maximizing agency in others is a decent guidepost through tough choices, conversations, and careers around mitigating the harmful effects of algorithms and machine learning in our lives.


## Conclusion

We’ve reflected on the secondary and tertiary impacts of our collective condoning of ubiquitous machine learning technology, whether we build machine learning systems for a living, make money off of them in our retirement portfolios, or are simply happy to watch hours of YouTube interspersed with ads as I am wont to. I hope we continue figuring out what can go wrong—how it is going wrong—and the steps we can take to make better use of the powerful tools at our disposal every day. Whether to minimize the risk of radicalization, misinformation, or addiction, we need to remain vigilant of the business incentives that inhibit our ability to make informed decisions about how best to manage machine learning risk.  

Feel free to forward this to anyone it might help. If you disagree, I’d be curious to hear from you. Finally, if you know anyone or are yourself doing research on (1) psychophysiology and recommender systems, (2) the law and policy surrounding tech and discrimination, or (3) causal inference for estimating the effects of newsfeed algorithms on the propensity for addiction, I would love to collaborate to study these questions transparently and in depth. 

I have surely missed a reference as there is much existing, excellent work in these areas. Please email me if this is the case, or if there are other ways I can improve the accuracy of this piece: [j@jaan.io](mailto:j@jaan.io). 

<center>
<!-- from https://gist.github.com/sharu725/744bf9357c62a34d416ba71650a64968 -->
<form action="https://tinyletter.com/altosaar" method="post" name="mc-embedded-subscribe-form" class="wj-contact-form validate" target="popupwindow" onsubmit="window.open('https://tinyletter.com/altosaar', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
    <div class="mc-field-group">
        <input type="email" placeholder="Email" name="EMAIL" class="required email" id="mce-EMAIL" autocomplete="on">
        <input type="submit" value="Subscribe" name="subscribe" class="heart">
    </div>
</form></center>

<style>
    .wj-contact-form input {
        vertical-align: middle;
        margin-top: 0.25em;
        margin-bottom: 0.5em;
        padding: 0.75em;
        font-family: monospace, sans-serif;
        border:1px solid #444;
        outline-color: #2e83e6;
        border-radius: 3px;
        transition: box-shadow .2s ease;
    }
    
    .wj-contact-form input[type="submit"] {
        background-color: #2e83e6;
        border: 1px solid #2e83e6;;
        color: #eee;
    }
</style> 

*Subscribe to my mailing list for the next parts of this series. I will explore in-depth the incentive, corporate PR, and power structures preventing the risks of machine learning from being openly discussed, in addition to the epigenetics research that softened the staunch belief in free will instilled in me by parents fleeing the Soviet Union and how it changed my views on how I should build machine learning.*


**Addenda**

People and resources that have influenced my views on these topics:


- [Deb Raji](https://twitter.com/rajiinio), [Allison Chaney](http://ajbc.io/research.html), [Zeynep Tufekci](https://twitter.com/zeynep), and [Timnit Gebru](https://twitter.com/timnitGebru)’s work
- [Invisible Women](https://www.penguin.co.uk/books/111/1113605/invisible-women/9781784706289.html) by Caroline Criado-Perez
- Charles Isbell’s [keynote at NeurIPS](https://nips.cc/virtual/2020/public/invited_16166.html)
- The [Coded Bias](https://www.codedbias.com/) movie
- [Data for Black Lives](https://d4bl.org/)
- [The Field Study Handbook](https://www.thefieldstudyhandbook.com/) by Jan Chipchase
- [Rajesh Ranganath](https://cims.nyu.edu/~rajeshr/)’s perspectives on trade-offs in society
- [Data feminism](https://data-feminism.mitpress.mit.edu/), an online textbook
- Meredith Broussard’s [Artificial Unintelligence](https://blogs.lse.ac.uk/lsereviewofbooks/2019/03/07/book-review-artificial-unintelligence-how-computers-misunderstand-the-world-by-meredith-broussard/)
- Barbara Engelhardt’s [machine learning for social justice](https://sites.google.com/view/ml4sj/) course
- Adam Alter: [Irresistible](http://adamalterauthor.com/irresistible)
- Virginia Eubanks' [Automating Inequality](https://harvardlawreview.org/2019/04/digitizing-the-carceral-state/)
- Cathy O'Neil: [Weapons of Math Destruction](https://weaponsofmathdestructionbook.com/)
- Sinan Aral: [The Hype Machine](https://www.penguinrandomhouse.com/books/570128/the-hype-machine-by-sinan-aral/)
- Ruha Benjamin’s work examining [race and technology](https://www.ruhabenjamin.com/race-after-technology)

**Acknowledgments**

*Thanks to Rohan Bansal, Uri Bram, Dylan Cable, Justin Cary, Luc Cary, Angela Chen, Zack Dulberg, Noémie Elhadad, Felipe Engelberger, Sahar Jalal, Hanif Jetha, Cathy Ji, Mert Ketenci, Eric Munsing, Elisa Muyl, Jordan Olmstead, Alessandra Poblador, Ben Poole, Colin Raffel, Rajesh Ranganath, Sam Ritter, Kyle Saikaley, Briana Salas, Aaron Schein, Ava Sirrah, Rachel Swanson, Maryse Thomas, Francis Tseng, Victoria Xia, and Maxim Zaslavsky for feedback on several drafts.*

Cite this work:

<a href="https://doi.org/10.5281/zenodo.4464519"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.4464519.svg" alt="DOI" style="max-width: 38%"></a>
