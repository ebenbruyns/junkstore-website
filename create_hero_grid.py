#!/usr/bin/env python3
"""
Create a hero image grid from game thumbnails with 3 rows and repeated games
"""

import os
from PIL import Image, ImageDraw
import math

def create_hero_grid():
    # Load the current hero image
    current_hero = Image.open('/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/images/blog/aug19-hero.jpg')
    
    # Game thumbnails from the post (in order they appear)
    games = [
        'Totally Reliable Delivery Service',
        'Hidden Folks', 
        'Filthy Animals: Heist Simulator',
        'Fate: The Traitor Soul',
        'Necroking',
        'Tin Hearts',
        '10 Flights of Ballooning',
        '10S',
        '1993 Space Machine', 
        '2 9 0 1 / / FREELANCER',
        'A Short Hike',
        'Baba Is You',
        'Celeste',
        'CrossCode',
        'Super Hexagon'
    ]
    
    # The current image shows these games with thumbnails:
    # Based on the current hero image, I can see distinctive games like:
    # Totally Reliable Delivery Service, 10S, 1993 Space Machine (spaceship),
    # Necroking (NK logo), Fate, Baba Is You, A Short Hike, Celeste (character), 
    # Super Hexagon, and others
    
    # Approximate thumbnail positions in current image (based on visual inspection)
    # Current image is roughly 1200x400 pixels
    current_width, current_height = current_hero.size
    
    # Extract thumbnail regions (approximate positions from visual inspection)
    thumbnail_regions = [
        (10, 10, 200, 130),      # Totally Reliable Delivery Service
        (210, 10, 400, 130),     # Hidden Folks (magnifying glass icon)
        (410, 10, 600, 130),     # Another game (yellow/orange)
        (610, 10, 790, 130),     # NK (Necroking)
        (800, 10, 990, 130),     # Fate character
        (1000, 10, 1190, 130),   # 10 Flights of Ballooning
        
        (10, 140, 200, 260),     # 10S text
        (210, 140, 400, 260),    # 1993 Space Machine
        (410, 140, 600, 260),    # Glitch/pixel game
        (610, 140, 790, 260),    # A Short Hike
        (800, 140, 990, 260),    # Baba Is You
        (1000, 140, 1190, 260),  # CrossCode
        
        (10, 270, 200, 390),     # Celeste character
        (210, 270, 400, 390),    # Super Hexagon
    ]
    
    # Extract thumbnails
    thumbnails = []
    for region in thumbnail_regions:
        if region[2] <= current_width and region[3] <= current_height:
            thumb = current_hero.crop(region)
            thumbnails.append(thumb)
    
    # Target dimensions for new hero image
    target_width = 1200
    target_height = 400
    
    # Fixed grid dimensions
    rows = 3
    cols = 9
    
    # Calculate exact thumbnail size to fill the space perfectly
    thumb_width = target_width // cols  # 1200 / 9 = 133
    thumb_height = target_height // rows  # 400 / 3 = 133
    
    # Adjust target dimensions to ensure perfect fit with no remainder
    target_width = thumb_width * cols  # 133 * 9 = 1197
    target_height = thumb_height * rows  # 133 * 3 = 399
    
    # Create new image
    new_hero = Image.new('RGB', (target_width, target_height), (0, 0, 0))
    
    # Create grid pattern with repeated games
    grid_pattern = []
    
    # Ensure each game appears at least twice by duplicating the list
    extended_thumbnails = thumbnails + thumbnails
    
    # Fill the grid positions
    total_positions = rows * cols
    for i in range(total_positions):
        if i < len(extended_thumbnails):
            grid_pattern.append(extended_thumbnails[i])
        else:
            # If we still need more, cycle through thumbnails again
            grid_pattern.append(thumbnails[i % len(thumbnails)])
    
    # Place thumbnails in grid
    for row in range(rows):
        for col in range(cols):
            pos_index = row * cols + col
            if pos_index < len(grid_pattern):
                thumb = grid_pattern[pos_index]
                
                # Resize thumbnail to exact grid cell size, ignoring aspect ratio to eliminate gaps
                thumb_resized = thumb.resize((thumb_width, thumb_height), Image.Resampling.LANCZOS)
                
                # Calculate position (no padding, perfect grid)
                x = col * thumb_width
                y = row * thumb_height
                
                # Paste thumbnail
                new_hero.paste(thumb_resized, (x, y))
    
    # Save the new hero image
    output_path = '/home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/images/blog/aug19-hero-new.jpg'
    new_hero.save(output_path, 'JPEG', quality=90)
    print(f"New hero image created: {output_path}")
    print(f"Dimensions: {target_width}x{target_height}")
    print(f"Grid: {rows} rows x {cols} columns")
    print(f"Used {len(thumbnails)} unique thumbnails, repeated to fill {total_positions} positions")

if __name__ == "__main__":
    create_hero_grid()