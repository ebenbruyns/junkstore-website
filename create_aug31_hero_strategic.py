#!/usr/bin/env python3
"""
Create hero image for Aug 31st post with strategic game placement
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

def is_adjacent(pos1, pos2, cols):
    """Check if two positions are adjacent (horizontally or vertically)"""
    row1, col1 = pos1 // cols, pos1 % cols
    row2, col2 = pos2 // cols, pos2 % cols
    
    # Check if adjacent horizontally or vertically
    return (abs(row1 - row2) == 1 and col1 == col2) or (abs(col1 - col2) == 1 and row1 == row2)

def create_strategic_grid():
    """Create hero image grid with strategic game placement"""
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
    
    # Load all game data
    game_data_list = []
    for storefront, filename in games:
        game_data = load_game_data(storefront, filename)
        if game_data:
            title = game_data['title']
            icon_url = fix_and_get_icon_url(game_data)
            
            if icon_url:
                img = download_image(icon_url)
            elif 'vertical_artwork' in game_data and game_data['vertical_artwork']:
                img = download_image(game_data['vertical_artwork'])
            else:
                img = None
                
            thumb = create_uniform_thumbnail(img, thumb_size, title)
            game_data_list.append({
                'title': title,
                'thumb': thumb,
                'filename': filename,
                'storefront': storefront
            })
            print(f"Loaded: {title}")
    
    # Categorize games
    priority_games = [
        "Machinarium",
        "Make Way", 
        "Heroes of Loot 2",
        "Labyrinth City: Pierre the Maze Detective",
        "Strange Horticulture",
        "Kamaeru",
        "Dungeon of the Endless: Definitive Edition"
    ]
    
    white_background_games = [
        "Fantasy Empires",
        "Shadow Sorcerer", 
        "War of the Lance",
        "Advanced Dungeons & Dragons: Heroes of the Lance"
    ]
    
    # Organize games by category
    priority_thumbs = []
    white_bg_thumbs = []
    
    for game in game_data_list:
        if game['title'] in priority_games:
            priority_thumbs.append(game)
        elif game['title'] in white_background_games:
            white_bg_thumbs.append(game)
    
    print(f"Priority games: {len(priority_thumbs)}")
    print(f"White background games: {len(white_bg_thumbs)}")
    
    # Create 3x9 grid strategically
    grid = [[None for _ in range(cols)] for _ in range(rows)]
    
    # Step 1: Fill middle row with priority games (need 7, have 7)
    middle_row = 1
    for col, game in enumerate(priority_thumbs[:7]):  # Take first 7
        grid[middle_row][col] = game
        print(f"Middle row position {col}: {game['title']}")
    
    # Fill remaining middle row slots with white background games if needed
    for col in range(7, cols):
        if white_bg_thumbs:
            game = white_bg_thumbs.pop(0)
            grid[middle_row][col] = game
            print(f"Middle row position {col}: {game['title']}")
    
    # Step 2: Fill remaining positions alternating between all games
    # Create pool of remaining games to distribute
    remaining_games = priority_thumbs + white_bg_thumbs
    
    # For each position, find a suitable game
    positions_to_fill = []
    for row in range(rows):
        for col in range(cols):
            if row != middle_row or col >= 7:  # Skip already filled middle row positions
                if row != middle_row:  # Only add non-middle row positions
                    positions_to_fill.append((row, col))
    
    # Fill positions strategically
    game_pool = remaining_games * 3  # Create enough copies
    game_index = 0
    
    for row, col in positions_to_fill:
        placed = False
        attempts = 0
        
        while not placed and attempts < len(game_pool):
            candidate = game_pool[(game_index + attempts) % len(game_pool)]
            
            # Check constraints
            can_place = True
            
            # Check adjacent positions for same game
            adjacent_positions = [
                (row-1, col), (row+1, col),  # Above/below
                (row, col-1), (row, col+1)   # Left/right
            ]
            
            for adj_row, adj_col in adjacent_positions:
                if 0 <= adj_row < rows and 0 <= adj_col < cols:
                    adj_game = grid[adj_row][adj_col]
                    if adj_game and adj_game['title'] == candidate['title']:
                        can_place = False
                        break
                    
                    # Special constraint: white background games can't touch
                    if (adj_game and 
                        candidate['title'] in white_background_games and 
                        adj_game['title'] in white_background_games):
                        can_place = False
                        break
            
            if can_place:
                grid[row][col] = candidate
                placed = True
                print(f"Position ({row},{col}): {candidate['title']}")
            
            attempts += 1
        
        if placed:
            game_index = (game_index + 1) % len(game_pool)
        else:
            # Fallback - just place any game
            grid[row][col] = game_pool[game_index % len(game_pool)]
            print(f"Fallback position ({row},{col}): {grid[row][col]['title']}")
            game_index = (game_index + 1) % len(game_pool)
    
    # Create final hero image
    hero_img = Image.new('RGB', (hero_width, hero_height), (0, 0, 0))
    
    # Place thumbnails in grid
    for row in range(rows):
        for col in range(cols):
            if grid[row][col]:
                game = grid[row][col]
                x = col * thumb_width
                y = row * thumb_height
                hero_img.paste(game['thumb'], (x, y))
    
    # Save hero image
    output_path = '/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/images/blog/aug31-hero-strategic.jpg'
    hero_img.save(output_path, 'JPEG', quality=90)
    
    print(f"Strategic hero image created: {output_path}")
    print(f"Dimensions: {hero_width}x{hero_height}")

if __name__ == "__main__":
    create_strategic_grid()