#!/usr/bin/env python3
"""
Check which games from August 31st post have icon images
"""

import os
import json

def check_game_icon(storefront, filename):
    """Check if a game has an icon_image in its JSON file"""
    json_path = f'/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/games/{storefront}/{filename}.json'
    try:
        with open(json_path, 'r') as f:
            data = json.load(f)
            icon_url = data.get('icon_image', '')
            title = data.get('title', filename)
            return {
                'title': title,
                'has_icon': bool(icon_url),
                'icon_url': icon_url,
                'file_exists': True
            }
    except FileNotFoundError:
        return {
            'title': filename,
            'has_icon': False,
            'icon_url': '',
            'file_exists': False
        }

def check_aug31_games():
    """Check all games from August 31st post"""
    # Games from the Aug 31st post with their likely storefront/filename mappings
    games_to_check = [
        # Epic Games
        ("epic", "machinarium", "Machinarium"),
        ("epic", "make-way", "Make Way"),
        ("epic", "strange-horticulture", "Strange Horticulture"),
        ("epic", "kamaeru", "Kamaeru"),
        
        # Amazon Games (Prime Gaming)
        ("amazon", "fantasy-empires", "Fantasy Empires"),
        ("amazon", "heroes-of-loot-2", "Heroes of Loot 2"),
        ("amazon", "dungeon-of-the-endless-definitive-edition", "Dungeon of the Endless: Definitive Edition"),
        ("amazon", "labyrinth-city-pierre-the-maze-detective", "Labyrinth City: Pierre the Maze Detective"),
        
        # GOG Games
        ("gog", "shadow-sorcerer", "Shadow Sorcerer"),
        ("gog", "war-of-the-lance", "War of the Lance"),
        ("gog", "advanced-dungeons-dragons-heroes-of-the-lance", "Advanced Dungeons & Dragons: Heroes of the Lance"),
    ]
    
    print("Checking August 31st games for icon images:\n")
    
    games_with_icons = []
    games_missing_icons = []
    
    for storefront, filename, display_name in games_to_check:
        result = check_game_icon(storefront, filename)
        result['storefront'] = storefront
        result['filename'] = filename
        result['display_name'] = display_name
        
        if result['file_exists'] and result['has_icon']:
            games_with_icons.append(result)
            print(f"✅ {display_name} ({storefront}) - Has icon")
        elif result['file_exists'] and not result['has_icon']:
            games_missing_icons.append(result)
            print(f"❌ {display_name} ({storefront}) - JSON exists but no icon_image")
        else:
            games_missing_icons.append(result)
            print(f"🚫 {display_name} ({storefront}) - JSON file not found")
    
    print(f"\n📊 SUMMARY:")
    print(f"✅ Games with icons: {len(games_with_icons)}")
    print(f"❌ Games missing icons: {len(games_missing_icons)}")
    
    if games_missing_icons:
        print(f"\n🚨 MISSING ICON IMAGES:")
        for game in games_missing_icons:
            if game['file_exists']:
                print(f"   - {game['display_name']} ({game['storefront']}/{game['filename']}.json)")
            else:
                print(f"   - {game['display_name']} (JSON file not found: {game['storefront']}/{game['filename']}.json)")
    
    return games_with_icons, games_missing_icons

if __name__ == "__main__":
    check_aug31_games()