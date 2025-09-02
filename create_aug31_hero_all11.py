#!/usr/bin/env python3
"""
Create hero image for Aug 31st post with ALL 11 games
"""

import os
import json
import requests
from PIL import Image, ImageDraw
import io

def fix_icon_url_format(url):
    """Fix URLs with {formatter}.{ext} placeholders"""
    if '{formatter}.{ext}' in url:
        return url.replace('{formatter}.{ext}', '.jpg')
    return url

def get_all_11_games():
    """Get ALL 11 games from August 31st post with correct file locations"""
    games = [
        # Epic Games (2)
        ("epic", "machinarium"),
        ("epic", "make-way"),
        
        # Prime Gaming / GOG Games (2 - they're actually in GOG directory)
        ("gog", "fantasy-empires"),
        ("gog", "heroes-of-loot-2"),
        
        # Amazon Games (2)
        ("amazon", "dungeon-of-the-endless-definitive-edition"),
        ("amazon", "labyrinth-city-pierre-the-maze-detective"),
        
        # Epic Games Past Giveaways (2) 
        ("epic", "strange-horticulture"),
        ("epic", "kamaeru"),
        
        # GOG Games (3)
        ("gog", "shadow-sorcerer"),
        ("gog", "war-of-the-lance"),
        ("gog", "advanced-dungeons-dragons-heroes-of-the-lance"),
    ]
    return games

def load_game_data(storefront, filename):
    """Load game JSON data"""
    json_path = f'/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/games/{storefront}/{filename}.json'
    try:
        with open(json_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"JSON file not found: {json_path}")
        return None

def fix_and_get_icon_url(game_data):
    """Fix icon URL format and return it"""
    if not game_data or 'icon_image' not in game_data:
        return None
    
    icon_url = game_data['icon_image']
    if not icon_url:
        return None
        
    return fix_icon_url_format(icon_url)

def download_image(url):
    """Download image from URL"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return Image.open(io.BytesIO(response.content))
    except Exception as e:
        print(f"Failed to download image from {url}: {e}")
        return None

def create_uniform_thumbnail(img, size, title=""):
    """Create uniform thumbnail with proper aspect ratio and border if needed"""
    if img is None:
        # Create a placeholder image
        placeholder = Image.new('RGB', size, (64, 64, 64))
        draw = ImageDraw.Draw(placeholder)
        draw.text((size[0]//2-30, size[1]//2-10), "NO IMAGE", fill=(255, 255, 255))
        return placeholder
    
    # Calculate the scaling factor to fit the image within the target size
    img_aspect = img.width / img.height
    target_aspect = size[0] / size[1]
    
    if img_aspect > target_aspect:
        # Image is wider - scale by width
        new_width = size[0]
        new_height = int(size[0] / img_aspect)
    else:
        # Image is taller - scale by height  
        new_height = size[1]
        new_width = int(size[1] * img_aspect)
    
    # Resize the image maintaining aspect ratio
    img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Create final image with black background (borders if needed)
    final_img = Image.new('RGB', size, (0, 0, 0))
    
    # Center the resized image
    x_offset = (size[0] - new_width) // 2
    y_offset = (size[1] - new_height) // 2
    
    final_img.paste(img_resized, (x_offset, y_offset))
    
    return final_img

def create_hero_grid():
    """Create hero image grid with even distribution of all 11 games"""
    games = get_all_11_games()
    
    # Hero image dimensions
    hero_width = 1200
    hero_height = 400
    
    # Grid setup
    rows = 3
    cols = 9
    total_positions = rows * cols  # 27 positions
    
    # Calculate thumbnail size  
    thumb_width = hero_width // cols
    thumb_height = hero_height // rows
    thumb_size = (thumb_width, thumb_height)
    
    print(f"Creating {rows}x{cols} grid with {thumb_width}x{thumb_height} thumbnails")
    print(f"Need to fill {total_positions} positions with {len(games)} games")
    
    # Load game artwork with titles for debugging
    game_thumbnails = []
    for storefront, filename in games:
        game_data = load_game_data(storefront, filename)
        if game_data:
            title = game_data['title']
            icon_url = fix_and_get_icon_url(game_data)
            
            if icon_url:
                print(f"✅ Loading {title} from {icon_url}")
                img = download_image(icon_url)
                if img:
                    thumb = create_uniform_thumbnail(img, thumb_size, title)
                    game_thumbnails.append((title, thumb))
                else:
                    print(f"❌ Failed to download {title}")
                    placeholder = create_uniform_thumbnail(None, thumb_size, title)
                    game_thumbnails.append((title, placeholder))
            else:
                print(f"❌ No icon_image for {title}")
                # Use vertical_artwork as fallback
                if 'vertical_artwork' in game_data and game_data['vertical_artwork']:
                    print(f"  Using vertical_artwork as fallback for {title}")
                    img = download_image(game_data['vertical_artwork'])
                    thumb = create_uniform_thumbnail(img, thumb_size, title)
                    game_thumbnails.append((title, thumb))
                else:
                    placeholder = create_uniform_thumbnail(None, thumb_size, title)
                    game_thumbnails.append((title, placeholder))
        else:
            print(f"❌ No JSON data for {filename}")
            placeholder = create_uniform_thumbnail(None, thumb_size, filename)
            game_thumbnails.append((filename, placeholder))
    
    print(f"Successfully loaded {len(game_thumbnails)} games")
    
    # Create grid pattern with better distribution
    # 11 games, 27 positions: each game appears 2-3 times
    # 11*2 = 22, need 5 more, so 5 games appear 3 times, 6 games appear 2 times
    grid_pattern = []
    
    appearances_per_game = []
    for i in range(len(game_thumbnails)):
        if i < 5:  # First 5 games appear 3 times
            appearances_per_game.append(3)
        else:  # Remaining 6 games appear 2 times  
            appearances_per_game.append(2)
    
    # Build the pattern
    for i, (title, thumb) in enumerate(game_thumbnails):
        appearances = appearances_per_game[i]
        for _ in range(appearances):
            grid_pattern.append((title, thumb))
        print(f"{title}: {appearances} appearances")
    
    # Shuffle for better distribution
    import random
    random.seed(42)  # Consistent shuffle
    random.shuffle(grid_pattern)
    
    print(f"Grid pattern has {len(grid_pattern)} positions")
    
    # Create final hero image
    hero_img = Image.new('RGB', (hero_width, hero_height), (0, 0, 0))
    
    # Place thumbnails in grid
    for row in range(rows):
        for col in range(cols):
            pos_index = row * cols + col
            if pos_index < len(grid_pattern):
                title, thumb = grid_pattern[pos_index]
                
                x = col * thumb_width
                y = row * thumb_height
                
                hero_img.paste(thumb, (x, y))
    
    # Save hero image
    output_path = '/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/images/blog/aug31-hero-all11.jpg'
    hero_img.save(output_path, 'JPEG', quality=90)
    
    print(f"Hero image created: {output_path}")
    print(f"Dimensions: {hero_width}x{hero_height}")

if __name__ == "__main__":
    create_hero_grid()