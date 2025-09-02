#!/usr/bin/env python3
"""
Create a hero image grid from game artwork URLs in JSON files
"""

import os
import json
import requests
from PIL import Image, ImageDraw
import io

def get_games_from_blog_post():
    """Get the games mentioned in the blog post"""
    games = [
        # Epic Games Giveaways
        ("epic", "totally-reliable-delivery-service"),
        ("epic", "hidden-folks"),
        
        # Prime Gaming Giveaways  
        ("epic", "filthy-animals-heist-simulator"),
        ("gog", "fate-the-traitor-soul"),
        ("gog", "necroking"),
        ("gog", "tin-hearts"),
        
        # itch.io Games
        ("itch.io", "10-flights-of-ballooning"),
        ("itch.io", "10s"),
        ("itch.io", "1993-space-machine"),
        ("itch.io", "2-9-0-1-freelancer"),
        ("itch.io", "a-short-hike"),
        ("itch.io", "baba-is-you"),
        ("itch.io", "celeste"),
        ("itch.io", "crosscode"),
        ("itch.io", "super-hexagon")
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

def download_image(url):
    """Download image from URL"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return Image.open(io.BytesIO(response.content))
    except Exception as e:
        print(f"Failed to download image from {url}: {e}")
        return None

def create_uniform_thumbnail(img, size):
    """Create uniform thumbnail with proper aspect ratio and border if needed"""
    if img is None:
        # Create a placeholder image
        placeholder = Image.new('RGB', size, (64, 64, 64))
        draw = ImageDraw.Draw(placeholder)
        draw.text((size[0]//2-20, size[1]//2-10), "NO IMAGE", fill=(255, 255, 255))
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
    """Create hero image grid from JSON game data"""
    games = get_games_from_blog_post()
    
    # Hero image dimensions
    hero_width = 1200
    hero_height = 400
    
    # Grid setup
    rows = 3
    cols = 9
    
    # Calculate thumbnail size  
    thumb_width = hero_width // cols
    thumb_height = hero_height // rows
    thumb_size = (thumb_width, thumb_height)
    
    print(f"Creating {rows}x{cols} grid with {thumb_width}x{thumb_height} thumbnails")
    
    # Load game artwork
    thumbnails = []
    for storefront, filename in games:
        game_data = load_game_data(storefront, filename)
        if game_data and 'icon_image' in game_data:
            print(f"Loading {game_data['title']}")
            img = download_image(game_data['icon_image'])
            thumb = create_uniform_thumbnail(img, thumb_size)
            thumbnails.append(thumb)
        else:
            print(f"No icon found for {filename}")
            # Create placeholder
            placeholder = create_uniform_thumbnail(None, thumb_size)
            thumbnails.append(placeholder)
    
    # Duplicate thumbnails to fill grid (each appears at least twice)
    extended_thumbnails = thumbnails * 2
    
    # Create grid pattern
    grid_pattern = []
    total_positions = rows * cols
    for i in range(total_positions):
        if i < len(extended_thumbnails):
            grid_pattern.append(extended_thumbnails[i])
        else:
            # Cycle through if we need more
            grid_pattern.append(thumbnails[i % len(thumbnails)])
    
    # Create final hero image
    hero_img = Image.new('RGB', (hero_width, hero_height), (0, 0, 0))
    
    # Place thumbnails in grid
    for row in range(rows):
        for col in range(cols):
            pos_index = row * cols + col
            if pos_index < len(grid_pattern):
                thumb = grid_pattern[pos_index]
                
                x = col * thumb_width
                y = row * thumb_height
                
                hero_img.paste(thumb, (x, y))
    
    # Save hero image
    output_path = '/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/images/blog/aug19-hero-json.jpg'
    hero_img.save(output_path, 'JPEG', quality=90)
    
    print(f"Hero image created: {output_path}")
    print(f"Dimensions: {hero_width}x{hero_height}")
    print(f"Used {len(thumbnails)} unique games")

if __name__ == "__main__":
    create_hero_grid()