---
title: What Resolution To Use for Pixel Art
indexname: What Resolution To Use for Pixel Art
tags:
    - 2d-art
    - pixel-art
    - gamedev
published: 2024-06-15
# hero: /images/food/one-two-eight-tea.png
# heroalt: two lemons and a jar of raw clover honey
layout: article
---

I'm by no means an expert, but here are the considerations I made when choosing what
resolution to work with.

## What did other games do?

- _Hyper Light Drifter_ renders to a `480 x 270` which is scaled up to the resolution of your display. [^1]
- _Eastward_ appears to be `480 x 270`. [^2] (I know, I know, Reddit)

[^1]: https://nightmargin.tumblr.com/post/102886823891/on-resolution
[^2]: https://www.reddit.com/r/PixelArt/comments/p5k9g1/what_is_the_pixel_resolution_of_eastward/

## Are you emulating an old system?

- SNES has a resolution of `256 x 224`. [^3]

[^3]: https://blog.unity.com/games/2d-pixel-perfect-how-to-set-up-your-unity-project-for-retro-16-bit-games

## Scaling up to HD

This one's simple - if you maintain a 16:9 aspect ratio and your resolution width
and height cleanly divide into `1920 x 1080`, you can scale to HD trivially. Consider `480 x 270`. We've got:

- `1920 / 480 = 4`
- `1080 / 270 = 4`

so you can scale your media x4 to fill the screen. If your ratio isn't 16:9, you can
still fill the screen with either vertical or horizontal black bars to make up the difference.

If your resolution _does not_ allow for integer scaling to HD, you might consider the following:

1. Scale up using the largest integer you can that does not create an image beyond 1920 x 1080, then pad with black bars.
2. Scale _just the art_ up cleanly with an integer, but keep the view constrained. I don't currently know how to do this.

But what about 4K TVs and monitors? fuck 'em

## Are you going to print it?

This one's trickier, but it helps to think about what you want to achieve.
You want to reverse into your image size, if you can, or you'll need to crop or
edit the finished image. Generally, you want to scale your image up before you
sent it to the printer, because the algorithm used by the printer will not always
result in crisp edges.

1. How big will your printed material be? Is it a post card, a letter, a poster?
2. Will you print full bleed (artwork to the edges, no margin) or will you have a margin?
3. What printer resolution (dots per inch) are you printing at? 300 DPI is common.

If you're printing an SNES sized image at 300 DPI and, your entire image will be less than an inch!

## What I use

The real reason I wrote this article - so I don't have to think about it every
time that I take a break from doing low res or pixel art. Just use `480 x 270`!
How can I pretend that I know better than the devs behind Eastward or Hyper Light Drifter?
