---
layout: post-light-feature
title: Virtual Thesis Defense - Giving and Recording a Stressful Zoom Presentation
description: "Everything that can go wrong, will go wrong, and at the last minute."
category: articles
tags: [thesis, zoom, defense]
image:
  feature: thesis/feature.jpg
  thumb: thesis/icon.svg
published: true
---

I defended my PhD on Zoom ([YouTube](https://youtu.be/msbUn_JfOfY)). It was stressful, but I hope these notes save you time for presenting and enable you to record higher-quality academic presentations. Please let me know if you have any suggestions I missed! 

## General Presentation

Many tips from meatspace apply. I recommend Matt Might's tri-tips:

* [http://matt.might.net/articles/phd-defense-tips/](http://matt.might.net/articles/phd-defense-tips/)
* [http://matt.might.net/articles/academic-presentation-tips/](http://matt.might.net/articles/academic-presentation-tips/)
* [http://matt.might.net/articles/advice-for-academic-job-hunt/#talk](http://matt.might.net/articles/advice-for-academic-job-hunt/#talk)

For example, using Keynote and a [bluetooth clicker](https://www.amazon.com/gp/product/B000FPGP4U) makes a difference. In addition, I suggest standing to give the presentation and wearing shoes, and anything else that would help make it feel more like a standard academic presentation instead of mid-pandemic [grilling hour](https://www.youtube.com/watch?v=wU9Daiu5XoM).

<figure>
    <img src="/images/thesis/setup.jpg">
    <figcaption>The ad-hoc setup I used for my thesis defense.</figcaption>
</figure>

## Camera, Lighting, Audio, Makeup

I am not an expert and guessed at all of this the day of the defense. It seems like an easier solution is to use a smartphone for video with the Filmic Pro app, as suggested in [Conan O'Brien's filming-from-home setup](https://blog.frame.io/2020/04/14/workflow-from-home-episodes-5-and-6-conan-and-remote-interview-setups/).

_Camera_: I borrowed a friend's Fujifilm X-T1. On my Macbook, it would only be usable if the Camlink was plugged into the right-hand-side USB 3.0 port.  

_Camera placement_: I put the camera just above the external display the Keynote slide show was playing on. In hindsight, a laptop would have been sufficient, along with an external display to force Keynote to put the presenter view on the laptop. In the video, my eyes visibly look to the left or right on the large external display, and a laptop would have acted more like a teleprompter to keep my eyes close to the camera. 

_Where to stand_: by looking at the video feed, I marked the floor with tape at the line where I would go out of the frame if I got too close to the laptop. 

_Makeup_: I am not an expert, but I was lucky to be powdered to hide some of the stress-induced hyperhidrosis in my oily T-zone.

_Lighting_: I used a seasonal affective disorder light therapy lamp (ironically called the [Happy Light](https://verilux.com/collections/happylight-therapy-lamps-boxes)) as a makeshift high-CRI ring light.

_Audio_: I really wanted to wrangle a microphone cable on video, and thought it would be funny to use a hand-held microphone during the presentation (not to mention higher-quality audio). This personal just-for-me Easter egg was just silly enough to make my day. I used a Shure SM58 plugged into an external audio device, and recorded it with Quicktime. 

## Recording and Editing

_Setup for recording_: In Zoom, [Conan O'Brien's setup](https://blog.frame.io/2020/04/14/workflow-from-home-episodes-5-and-6-conan-and-remote-interview-setups/) covers this. Record to separate audio channels and record in high definition. As backup audio recordings I used my laptop microphone and smartphone. I used [Elgato Game Capture](https://help.elgato.com/hc/en-us/articles/360028236691-Elgato-Game-Capture-HD-2-5-for-macOS-Software-Release-Notes-) to record the video, but in hindsight would have used Adobe Premiere to make editing easier. Keynote has a record feature for recording the slide show for higher resolution.

_Recording_: The day-of recording checklist was specific and non-deterministic: turn on smartphone audio recording, turn on Quicktime audio recording, turn on Game Capture HD recording for the video feed, then turn on Zoom recording, then screen share on Zoom (screen sharing to an external display renders the menu bar becomes inaccessible), and only then turn on Keynote recording. If these steps were done out of order, something—typically Zoom—would break. After making this checklist, I had 5 minutes left before my defense with which to rehearse. Please don't put yourself in this position like I did.

_Editing_: it takes a while to edit both the audio and video. I used Ableton to de-ess, compress, and add reverbe to the audio, and stitch together the Zoom recording with the recording from my microphone. In Adobe Premiere, I synchronized the audio to the video, applied minor color correction, and exported it in high definition. Tools such as `ffmpeg`, `homebrew`, and `imagemagick` were very useful in converting between audio and video formats, or fixing timing issues, or making cute GIFs. In hindsight, it is worth paying someone to do this as it is a lot of work, and YouTube is rife with _'I paid someone $5 to edit my video!!!!'_ reviews of [Fiverr](https://www.fiverr.com/) as an economical option.

## Slides

Most likely, people will use their personal laptops to view your defense, so the thumbnail of the main speaker will be tiny and the slide show itself will be huge. Small details on slides will be noticeable. Use Keynote to make the presentation (see mine [here]()). Use Illustrator or Inkscape to make graphics and icons—I find free icons from a search engine, then edit the vectorized graphics and export to PDF; my Illustrator file is [here](https://github.com/altosaar/thesis/blob/master/design/talk-icons.ai). For math in Keynote, I recommend LaTeXiT that comes with [MacTex](https://tug.org/mactex/)/[MikTeX](https://miktex.org/), and putting white squares over new lines of math or terms in equations with the 'dissolve in' animation. Adding dissolving rectangles helped me go slower and more pedagogically with already-familiar material. 

## Practice 

I recommend giving the talk several times beforehand, to a live audience (physically-distanced if at all possible). I feel _very_ lucky that I was able to give parts of my presentation in stressful high-stakes environments ahead of time, as preparation. As an example of how jarring it is to give a virtual presentation: on Zoom, it was impossible to know who was laughing because everyone was muted and had their video off. This meant when I got to a joke in my presentation, I felt extremely uncomfortable because I could not see reactions, so did my best to deliver it deadpan. However, because I had given parts of the presentation in front of a live audience, I was more confident that some parts might still be funny, and this helped me keep going rather than freeze up. 

If you are practicing on Zoom, you might ask a few audience members to leave their video feed on during your presentation. I did not think of this ahead of time, and had to consciously remind myself that I was talking to humans rather than a camera. During the question and answer period, it felt a lot nicer to be talking to human video feeds than to a Fujifilm X-T1 staring me down.

After giving the talk several times, a full run-through entails going from dressing up, getting the lighting correct, all the recordings finagled, answering questions from the audience after a full presentation, and practicing editing in Premiere or via Fiverr. This seems like a lot of prep, but the cognitive load it entails is massive on top of a stressful defense. The run-through is worth it, to learn to trust or mistrust failure modes appropriately and figure out what to do in worst-case scenarios.

## Day of the Defense

Assume Murphy's Law: everything that can go wrong, will go wrong. This held true in my case. Keep several checklists on hand with what you need to do, keyboard shortcuts you might need (such as muting yourself or the audience), water and snacks, etc.

For example, Zoom became non-deterministic: one example of a bug I discovered 30 minutes before the presentation was that if screen sharing was on, the Mac menu bar became inaccessible, and I had to learn and write down all the keyboard shortcuts I needed for all the apps during the presentation. (One would need to mouse to the top of the primary display, only to have the menu bar appear in the second display.) 

Another Zoom bug: broken screen-sharing after making Keynote full-screen, namely if an external display is plugged in and is being used for Keynote presenter mode, Zoom will stream the presenter mode instead of the actual presentation. 

## Silver Linings 

I recommend bcc'ing many people to invite them to your defense, because this is now possible and low-stakes. I was scared to do this, but went through my short message service history, WhatsApp, Signal, Facebook, email, and (gratitude) journals to remember who to invite, and was surprised at the response.

Even people I had not interacted with in years were supportive, happy to have some good news during quarantine, and ready to join a surreal Zoom call on short notice. It made me feel more supported during an otherwise stressful time. 

Another positive reappraisal I found helpful was that all this work and nitpicking about camera, audio, presentation quality was less for me, more for all the people who got me to this point (for example, my grandmother in Estonia who would not able to see the presentation live, but I knew she would love to see the video). 

Similarly, writing these notes helps being done with grad school feel more concrete psychologically. After all, I was in an empty room, talking to a camera, and seemingly got my PhD—maybe the simulation has improved after all.

Please send me a link to your talk or defense! I would love to see it. In addition, feel free to [email me](mailto:altosaar@princeton.edu) with any tips or corrections to these notes.

*Thanks to Will Whitney for camera-lending and everyone else in my [thesis acknowledgments](/papers/altosaar-2020-thesis.pdf) and otherwise who got me to this point.*
