---
title: "How to Change the Language for Epic Games"
excerpt: "Step-by-step guide on setting the language for Epic games"
layout: single
permalink: 

---

This guide shows you how to change the **global language setting** for your Epic Games library when using Junk-Store.

> ⚠️ This will **only work** for games that download different language packs **automatically** during installation.

---

## Step 1 – Create the  File

Go to the following folder on your Steam Deck: **~/homebrew/data/Junk-Store/**<br> 
![Homebrew File Location](/assets/images/Overrides/Homebrew%20for%20Epic%20Overrides.jpg)

---

## Step 2 – Create a New Text File

1. Right-click inside the `Junk-Store` folder.<br>
2. Choose **Create New > Text File**.<br>
![Create Text File](/assets/images/Overrides/Create%20Text%20File.jpg)<br>
3. Name the file exactly: **epic_overrides.sh**<br>
![Name New File](/assets/images/Overrides/Name%20New%20Text%20File.jpg)

![Overrides Created](/assets/images/Overrides/Epic%20Overrides%20Created.jpg)

---

## Step 3 – Add a Language Code

Open **epic_overrides.sh** with a text editor, I used Kate, and add the following line of text with the *standard language code* for the language you are wanting to change it to. 

For example this is changing it to *Spanish* - es_ES (Espania): **export LANG=es_ES.UTF-8 export LC_ALL=es_ES.UTF-8**<br>
![Spanish Language](/assets/images/Overrides/Lang%20Code%20to%20Spanish.jpg)<br>

![Boderlands Spansih](/assets/images/Overrides/ESP%20Borderlands.jpg)<br>

This would set it to *English* - en_EN: **export LANG=es_ES.UTF-8 export LC_ALL=es_ES.UTF-8**<br>
![English Lang](/assets/images/Overrides/Lang%20Code.jpg)<br>

![English Borderlands](/assets/images/Overrides/ENG%20Borderlands.jpg)<br>

## Need a Different Language?

If you're not sure what language code to use, check this reference list:

👉 [Dyspatch Language Code Standards](https://docs.dyspatch.io/localization/supported_languages)

---

## That's It!

Remember this will only work for games that download language packages automatically.

---

## Where to Find More Info or Help

<!-- - 📘 [FAQ](/help/faq)  
- 🛠️ [Troubleshooting](/decky/help/troubleshooting)  
- 📚 [How-To Guides](/decky/help/tutorials) -->

Or visit the community:

- 💬 [Join our Discord](https://discord.com/servers/junk-store-1169048999618170880)  
- 📢 [r/JunkStore on Reddit](https://www.reddit.com/r/JunkStore/)
