---
title: How to Organize Your Godot Project Files
indexname: How to Organize Your Godot Project Files
tags:
    - gamedev
    - godot
published: 2024-06-16
last_modified: 2024-06-22
# hero: /images/food/one-two-eight-tea.png
# heroalt: two lemons and a jar of raw clover honey
layout: article
---

## Coming From Unity

In Unity, I let the root project directory be a wild west of stuff because, when
importing things from the store, I could never be certain how files would be
structured. I adopted having one organized folder called `__Project` which I
kept pretty organized. All the art had a folder; prefabs had a folder;
ScriptableObjects had a folder; animation had a folder, etc. etc.

## The Root Folders

In data analysis programming, I got into the habit of having a folder for raw
input data that I wouldn't touch, a folder for scripts to operate on the data,
and a folder for results. I've adopted a similar approach in Godot after
reviewing some articles on data organization. [^1] [^2] [^4]

- an `assets` folder will contain the 'raw'[^3] data - that includes:
  - audio files, organized into an `audio` folder
  - aseprite files, organized into an `aseprite` folder
  - sprite files, organized into a `sprites` folder
  - music files, organized into a `music` folder

[^3]: In reality, this data _will_ be changed - you'll update your art, your music,
  all sorts of things as your project evolves, but I consider it apart from the game
  insofar that you're not editing it _within_ the game engine.

- a `scenes` folder will contains all the scenes we've made
  - scenes are loosely categorized, e.g.:
    - `characters` contains characters
    - `levels` contains levels
    - `effects` contains effects (e.g. a reusable explosion)
  - code lives _with_ the scene, except for the code that doesn't have scenes which goes into...

- a `src` folder which contains auto-load scripts or scripts that are not part of scenes, e.g. resource scripts

- a `resources` folder which contains all the resources for the project

_theoretically_, if I was working with a team, then the people producing audio would only be concerned
with whats in the audio subfolder; similar to music, similar to aseprite. _inside_ each type folder, the hierarchy of
the scenes folder is mirrored. if you've got a scene in `/scenes/characters/bob/` then all its assets will be organized by type
in their respective `/characters/bob/` folders.

**all files are named with snake case**.

## An Example

I've got assets for a character named Squash. I've got some sound effects, some
running and walking and idling animations, and I'm making a scene for him. He'll be used
in a game consisting of one world scene. My project structure will look like:

```bash
/assets/audio/characters/squash/fart.wav
/assets/audio/characters/squash/hello.wav
/assets/music/characters/squash/squash_theme.wav
/assets/sprites/characters/squash/squash_walk.png
/assets/sprites/characters/squash/squash_run.png
/assets/sprites/characters/squash/squash_idle.png
/assets/aseprite/characters/squash/squash.aseprite
/scenes/characters/squash/squash.tscn
/scenes/characters/squash/squash.gd
```

it's maybe redundant to have the sprites and the aseprite files in there - there are aseprite importers
that you can use to set up the animations from the raw aseprite data like [importality](https://github.com/nklbdev/godot-4-importality).

## WARNING WARNING

**DO NOT** move files around outside of Godot! It WILL BREAK STUFF. Even
sometimes moving them within Godot breaks stuff - try to run your project after
you move things and see what errors pop up. Get your structure in place early so
you don't risk breaking things.

[^1]: [How To Structure Your Godot Project (so You Don't Get Confused)](https://new.pythonforengineers.com/blog/how-to-structure-your-godot-project-so-you-dont-get-confused/), accessed 2024-06-16
[^2]: [Project organization Official Godot Documentation for 4.2](https://docs.godotengine.org/en/stable/tutorials/best_practices/project_organization.html), accessed 2024-06-16
[^4]: [How to structure your project (So you don't get confused) - Godot tutorial](https://www.youtube.com/watch?v=IVMTxudQi48), accessed 2024-06-22
