---
title: How I Set Up a Godot 4.2 Project for Pixel Art
indexname: How I Set Up a Godot 4.2 Project for Pixel Art
tags:
    - gamedev
    - godot
published: 2024-06-16
# hero: /images/food/one-two-eight-tea.png
# heroalt: two lemons and a jar of raw clover honey
layout: article
---

Navigate to `Project > Project Settings` and then choose `Window` under `Display`.
Set `Viewport Width` to `480` and `Viewport Height` to 270. This is the resolution the game renders at.
If you're not sure which resolution you should choose, read [What Resolution To Use for Pixel Art](/2d-art/pixel-art/what-resolution-to-use-for-pixel-art).

![](/images/gamedev/set-up-pixel-art-project.png)

This will render a small 480x270 window which you need to stretch out after every run of the game, so set `Window Width Override` to `1280` and `Window Height Override` to 720 (or whatever's appropriate for your display).

![](/images/gamedev/window-settings.png)

Scroll down to the `Stretch` subheading. Set mode to `Viewport` - you're
stretching the entire viewport out. Set `Scale Mode` to Integer - this will prevent
sub-pixel stretching, e.g. you won't stretch your pixels 2.5 times and end up with
some interpolated garbage.

![](/images/gamedev/godot-stretch-settings.png)

Choose `Textures` under `Rendering` (left nav of project settings). Set `Default Texture Filter` to `Nearest` (ensures pixel art remains crisp).

![](/images/gamedev/godot-linear-settings.png)

That should be it!