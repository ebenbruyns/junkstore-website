---
layout: post
title: How is Junk-Store Different from Other Solutions?
date: 2024-06-06 11:45 +1200

---

Hey Everyone,

We often get asked how Junk-Store compares to other solutions such as Heroic, Lutris, and Non-Steam-Launchers. To help answer these questions, we have put together the following comparisons. This is not an exhaustive comparison; instead, we focus on the main differences that might interest users.


Our comparisons are based on thorough research by our development team, who reviewed the code, downloaded, and ran each solution to see how they operate and feel compared to Junk-Store. We are not trying to persuade anyone to use Junk-Store over other solutions; instead, we want users to make an informed decision based on what works best for them. Each solution has its own advantages and disadvantages, and it’s up to each individual to decide what meets their needs.


If you believe we have made any errors or omissions, please contact us so we can correct them. We strive to be as unbiased and accurate as possible in our comparisons.


## Junk-Store Compared to Heroic ![Heroic](assets/images/heroic launchers logo.png){: w="200" h="100" }{: .left}
**Application Type**: Heroic is a desktop application, whereas Junk-Store is a plugin for Steam.

**Epic Games Integration**: Both use Legendary instead of the native Epic Games Launcher.

**GOG Integration**: Both use gog-dl to install and manage GOG games.

**Proton and Wine Management**: Heroic manages its own Proton and Wine prefixes for games, while Junk-Store leverages Steam's built-in functionality to manage Proton prefixes.

**Installation Interface**: Games are installed via the Heroic interface, while Junk-Store uses a Steam-native interface for managing games.

**Game Launching**: Heroic uses its infrastructure around Proton and Wine to run games, whereas Junk-Store allows Steam to handle most of the process.

## Junk-Store Compared to Lutris ![Lutris](assets/images/Lutris_Game_Platform_(Logo).svg){: w="200" h="100" }{: .right}
**Application Type**: Lutris is a desktop application, while Junk-Store is a plugin for Steam.

**Epic Games Integration**: Lutris uses the native Epic Games Launcher, while both Junk-Store and Heroic use Legendary.

**Game Management Interface**: Lutris requires game management and installation from desktop mode, whereas Junk-Store operates in game mode with a controller interface, requiring fewer clicks to install a game.

**Proton and Wine Management**: Lutris uses Bottles to manage Proton and Wine prefixes for games, while Junk-Store relies on Steam's built-in functionality.

**Extensibility**: Both Lutris and Junk-Store are highly extensible, allowing users to add features as desired, provided they have the necessary skills and time.

**Customization and Documentation**: Lutris has extensive customization options developed over 15 years, while Junk-Store offers similar potential but lacks documentation and full implementation.

**Technical Expertise Required**: Lutris requires more technical expertise compared to Heroic and Junk-Store.

## Junk-Store Compared to Non-Steam-Launchers (NSL) ![Lutris](assets/images/non steam launchers logo.png){: w="200" h="100" }{: .left}
**Launcher Integration**: NSL uses the native launchers for all game stores, whereas Junk-Store uses Legendary for Epic and lgog downloader and gog-dl for GOG, similar to Heroic.

**Prefix Management**: NSL installs each launcher in a proton prefix, either unique per launcher or shared across launchers, and relies on these launchers to manage games. Junk-Store creates a unique prefix for each game.

**Shortcut Creation**: NSL scans through each prefix post-installation to find installed games and creates Steam shortcuts. Junk-Store creates a shortcut immediately upon game installation, as it tracks installed games and uses metadata from the storefront to configure the game and install dependencies, similar to Heroic.

**Per Game Settings**: NSL does not allow per game settings due to all games being in the same prefix. Junk-Store isolates each game, allowing for individual Proton settings without risk of interference or corruption between games.

**Game Management**: Junk-Store directly manages games, whereas NSL outsources this task to the native launchers.


We hope that helps with highlighting the differences between Junk-Store and the other solutions out there for users. If you have any questions please join us in our [Discord](https://discord.gg/6mRUhR6Teh) server or on reddit at [r/JunkStore](https://www.reddit.com/r/JunkStore/).

Cheers,
The Junk-Store Team
