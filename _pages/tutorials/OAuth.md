---
layout: splash
title: "How to Login using OAuth"
excerpt: "Step-by-step guide on loging in via third party logins"
permalink: /tutorials/oauth-login
classes: wide tutorial-page
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---
<div class="spacer mt-4"></div>

Looking for an alternative way to log into Epic Games without using your password? OAuth login lets you use your existing accounts from Google, PlayStation, Xbox, and more to securely access Epic Games on your Steam Deck through Junk Store.

Follow these steps if you'd like to log into your Epic Games account using third-party authentication via one of the following options:

<table>
  <tr>
    <td>Google</td>
    <td>PlayStation</td>
    <td>Lego</td>
    <td>Nintendo</td>
  </tr>
  <tr>
    <td>Xbox</td>
    <td>Facebook</td>
    <td>Steam</td>
    <td>Apple</td>
  </tr>
</table>


### Steps for Logging in to Epic Games

This guide uses Google for logging in, but the steps are the same for other third-party methods.

1. **Switch to Desktop Mode**  
   If you don't have an external mouse and keyboard connected, you may want to download **Core Keyboard** from the Discover Store.

2. **Open Steam in Big Picture Mode**
   Press the Steam button and switch to **Big Picture Mode** (the controller-friendly interface).

3. **Navigate to Epic Tab in Junk Store**  
   Go to **Junk Store** > **Games** > **Epic Tab** and select **Login**.  
   ![Login Epic](/assets/images/OAuth/Login%20Epic.jpeg){: loading="lazy"}

4. **Choose Your Login Method**  
   Once the Epic Games Login screen appears, select your login method. A browser will open for you to log in with your chosen method.  
   ![Choose Epic Login Method](/assets/images/OAuth/Epic%20Login%20Screen.png){: loading="lazy"}

5. **Login via Google**  
   In this example, we’ll use Google. Select **Continue** when prompted.  
   ![Login via Google](/assets/images/OAuth/Epic%20login%20via%20google.png){: loading="lazy"}

6. **Sign In with Google**  
   Enter your Google credentials on the sign-in screen.  
   ![Google Sign In](/assets/images/OAuth/google%20sign%20in%20screen.png){: loading="lazy"}

7. **Final Step of Login**  
   After logging in, you'll see a prompt to click **Continue**.  
   ![Epic Almost Done](/assets/images/OAuth/epic%20almost%20done.png){: loading="lazy"}

8. **Close the Browser Window**  
   After completing the login, close the browser window and return to the Epic Games Launcher.  
   ![Success Logged In](/assets/images/OAuth/success%20logged%20in.png){: loading="lazy"}

9. **Enter 2FA Code (If Prompted)**  
   If you’re asked, enter your two-factor authentication (2FA) code. After entering the code, you’ll be returned to **Big Picture Mode**.  
   ![2FA Prompt](/assets/images/OAuth/2fa%20in%20epic.png){: loading="lazy"}

10. **Exit Big Picture Mode**  
    Press the Steam button, navigate to **Power**, and select **Exit Big Picture Mode** to return to **Game Mode**.

11. **Go Back to Junk Store**  
    Once in **Game Mode**, press the three dots, go back to **Junk Store** > **Games**, and you should now be logged into your Epic account.

12. **Check Your Library**  
    Your Epic Games library should now populate. If it doesn’t, navigate down and press **Y** to select **Show All**.  
    ![Epic Library](/assets/images/OAuth/Epic%20Library%20v2.jpeg){: loading="lazy"}

    - Ensure **Show Installed** is not selected.
    - Clear any text from the search box to see all games.

    **Note:** Games requiring the EA app or Origin will not appear in your library due to lack of support from Epic/Legendary.

13. **Install a Game to Test**  
    Choose a game from your library to install. We recommend starting with a game that is known to work well on the Steam Deck.

    - Visit our <a href="/tested-games">Games Tested</a> page for a list of games that are known to work.
    - Avoid choosing a large or complex game for the first test.

    **Tip:** Some games may require additional tweaks to run properly on the Steam Deck. **Doom 64** is a great test game if you have it.  
    ![Doom 64 Install](/assets/images/OAuth/Doom%2064.jpeg){: loading="lazy"}

14. **You're Ready to Play!**  
    Once you've tested a smaller game and it works, you're good to go!

---

## Need More Help?

If you run into trouble, check out:
<ul>
  <li><a href="/deckyhelp">Plugin Help</a></li>
  <li><a href="/faq/decky/">Plugin FAQ</a></li>
  <li><a href="/troubleshooting/decky/">Decky Plugin Troubleshooting</a></li>
  <li><a href="/troubleshooting/v2/">2.0 Standalone Troubleshooting</a></li>
</ul>


<p>
  Still stuck? Ask for help: 
  <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
    <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
    <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
  </a>
  — The community's friendly, and we're happy to help get you sorted.
</p>


---



<style>
.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-left: 8px;
  color: white;
}

.discord-btn {
  background: #5865f2;
  color: white !important;
}

.reddit-btn {
  background: #ff4500;
  color: white !important;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white;
  opacity: 0.9;
}
</style>
