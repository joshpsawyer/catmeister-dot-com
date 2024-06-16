---
title: How to Organize Your Godot Project Files
indexname: How to Organize Your Godot Project Files
tags:
    - gamedev
    - godot
published: 2024-06-16
# hero: /images/food/one-two-eight-tea.png
# heroalt: two lemons and a jar of raw clover honey
layout: article
---

## Coming From Unity

In Unity, I let the root project directory be a wild west of stuff because
importing things from the store, I could never be certain out files would be
structured. I adopted having one organized folder called `__Project` which I
kept _extremely_ organized. All the art had a folder; prefabs had a folder;
ScriptableObjects had a folder; animation had a folder. It kind of worked, but
organizing by type meant also meant a lot of file juggling to make sure things
were in the right place... and it was an arbitrary rule I had copied from
somebody else's work.

## Two Root Folders

In data analysis programming, I got into the habit of having a folder for raw
input data that I wouldn't touch, a folder for scripts to operate on the data,
and a folder for results. I've adopted a similar approach in Godot after
reviewing some articles on data organization. [^1] [^2]

- a root level folder called `assets` will contain the 'raw' data - that includes:
  - audio files, organized into an `audio` folder
  - aseprite files, organized into an `aseprite` folder
  - sprite files, organized into a `sprites` folder
  - music files, organized into a `music` folder

each asset _type_ folder is then organized by scene ('prefab' if this were unity).

- a root level folder called `scenes` will contain the constructed data
  - _every_ scene gets its own subfolder in which it is saved.
  - the scripts for a scene live alongside the scene.
  - if the subnodes of a scene get complicated, they get their own folders too.
  - if the scenes have categories - characters, objects, etc. - they might get categorized by their type

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
/assets/audio/character/squash/fart.wav
/assets/audio/character/squash/hello.wav
/assets/music/character/squash/squash_theme.wav
/assets/sprites/character/squash/squash_walk.png
/assets/sprites/character/squash/squash_run.png
/assets/sprites/character/squash/squash_idle.png
/assets/aseprite/character/squash/squash.aseprite
/scenes/character/squash/squash.tscn
/scenes/character/squash/squash.gd
```

it's maybe redundant to have the sprites and the aseprite files in there - there are aseprite importers
that you can use to set up the animations from the raw aseprite data like [importality](https://github.com/nklbdev/godot-4-importality).

## WARNING WARNING

**DO NOT** move files around outside of Godot! It WILL BREAK STUFF.

[^1]: [How To Structure Your Godot Project (so You Don't Get Confused)](https://new.pythonforengineers.com/blog/how-to-structure-your-godot-project-so-you-dont-get-confused/), accessed 2024-06-16
[^2]: [Project organization Official Godot Documentation for 4.2](https://docs.godotengine.org/en/stable/tutorials/best_practices/project_organization.html), accessed 2024-06-16
