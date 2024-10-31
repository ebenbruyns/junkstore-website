---
layout: post
title: How to Change Global Language Settings for Epic
date: 2024-10-29 13:41 +1300
---
## How can I change the language for games to something other than English?

Follow these steps to change the global language setting for your Epic Games library through Junk Store. Please note that this will only work for games that download different language packs automatically as part of the install.

#### Step 1
You will need to create an epic_overrides.sh file in the following folder path:

~/homebrew/data/Junk-Store/**epic_overrides.sh**<br>
![FilePath](assets/images/Overrides/Homebrew for Epic Overrides.jpg){: w="300" h="200" }

#### Step 2
In the *Junk-Store* subfolder, right click and select *Create New > Text File*. <br>
![CreateFile](assets/images/Overrides/Create Text File.jpg){: w="300" h="200" }

Name it **epic_overrides.sh** and click *OK*.<br>
![NameFile](assets/images/Overrides/Name New Text File.jpg){: w="300" h="200" }

#### Step 3
Open **epic_overrides.sh** with a text editor, I used *Kate*, and add the following line of text with the *standard language code* for the language you are wanting to change it to. 

For example this is changing it to **Spanish** - es_ES (Espania).<br>
**export LANG=es_ES.UTF-8 export LC_ALL=es_ES.UTF-8**<br>
![LangSpanish](assets/images/Overrides/Lang Code to Spanish.jpg){: w="300" h="200" }

![BorderlandsESP](assets/images/Overrides/ESP Borderlands.jpg){: w="300" h="200" }

This would set it to **English** - en_EN.<br>

**export LANG=es_ES.UTF-8 export LC_ALL=es_ES.UTF-8**<br>
![LangEnlish](assets/images/Overrides/Lang Code.jpg){: w="300" h="200" }

![BorderlandsENG](assets/images/Overrides/ENG Borderlands.jpg){: w="300" h="200" }

If you are unsure of the language code to use you can find them at the following link:

[Dyspatch Language Code Standards](https://docs.dyspatch.io/localization/supported_languages/#:~:text=The%20code%20for%20English%20(United,%2D1%20Alpha%2D2%20standard.))


That's it! Remember this will only work for games that download language packages automatically.


## Where to find more information or help:
 If you have any other issues check out our [Wiki FAQ](https://wiki.junkstore.xyz/wiki/Help:FAQ), [Troubleshooting](https://wiki.junkstore.xyz/wiki/Help:Troubleshooting) and [How To](https://wiki.junkstore.xyz/wiki/Help:How_to_guides) pages. If you can't find what you are looking for there then jump in [discord](https://discord.com/servers/junk-store-1169048999618170880) or on to reddit at [r/JunkStore](https://www.reddit.com/r/JunkStore/) and have a look there.