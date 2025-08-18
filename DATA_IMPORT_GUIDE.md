# Data Import Guide for Optimized Games Table

## Quick Import Process

### 1. Copy Files from Testing Manager
```bash
# Main data files
cp /home/annie/JunkStore/github/junkstore-games-tested/website-export/games-table.json /home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/
cp /home/annie/JunkStore/github/junkstore-games-tested/website-export/index.json /home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/games.json

# Individual game files for modals
cp -r /home/annie/JunkStore/github/junkstore-games-tested/website-export/games/ /home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/
```

### 2. Update Page Configuration (if needed)
The optimized table system loads from:
- **Main table data**: `/assets/data/games-table.json`
- **Summary stats**: `/assets/data/games.json` 
- **Individual game modals**: `/assets/data/games/{storefront}/{slug}.json`

### 3. Verify Data Structure
Check that `games-table.json` contains:
```json
{
  "total_games": 678,
  "featured_games": 15,
  "storefronts": {
    "Epic": { "total": 346, "featured": 3 },
    "GOG": { "total": 300, "featured": 3 },
    "Amazon": { "total": 23, "featured": 0 },
    "itch.io": { "total": 9, "featured": 9 }
  },
  "ratings_summary": {
    "green_decky": 509,
    "green_standalone": 572,
    "both_green": 509
  },
  "games": [...]
}
```

## Current Known Issues & Solutions

### ✅ FIXED: Table Loading Issues
- **Issue**: No data displaying in table
- **Cause**: JavaScript was loading wrong JSON file
- **Fix**: Updated to load `games-table.json` instead of `games.json`

### ✅ FIXED: Badge Styling
- **Issue**: itch.io badge not displaying correctly
- **Cause**: CSS expected `itch` class but storefront was `itch.io`
- **Fix**: Added logic to map `itch.io` → `itch` for CSS class

### ✅ FIXED: Modal File Paths
- **Issue**: Individual game modals not loading
- **Cause**: Missing modal file path construction
- **Fix**: Added path generation: `games/${storefront}/${slug}.json`

### ❌ PENDING: Game Artwork/Images
- **Issue**: No images displaying in modals
- **Cause**: Export process doesn't include `verticalArtwork` URLs from database
- **Solution Needed**: Update testing manager export to include artwork URLs from SQLite databases

## Artwork Integration (TODO)

The testing manager has image support through SQLite databases at:
- Epic: `/home/annie/jsdb/New DB/epic.db`
- GOG: `/home/annie/jsdb/New DB/gog.db` 
- Amazon: `/home/annie/jsdb/New DB/amazon.db`
- itch.io: `/home/annie/jsdb/New DB/itch.db`

**To enable images:**
1. Update website export script to query image tables
2. Include `verticalArtwork` URLs in exported JSON files
3. Ensure modal system can access image files

## File Structure After Import
```
assets/data/
├── games-table.json          # Main table data (678 games)
├── games.json               # Summary stats 
└── games/
    ├── epic/                # Epic Games JSON files
    ├── gog/                 # GOG JSON files  
    ├── amazon/              # Amazon Games JSON files
    └── itch.io/             # itch.io JSON files
```

## Testing After Import
1. **Table Display**: Check all games load with correct counts
2. **Featured Games**: Verify featured section shows recent games
3. **Modals**: Click games to ensure detailed modals load
4. **Filtering**: Test storefront and search filters
5. **Badges**: Confirm all store badges display correctly
6. **Mobile**: Test responsive layout on mobile devices

## Troubleshooting

### No Games Displaying
- Check browser console for loading errors
- Verify `games-table.json` exists and has valid JSON
- Ensure JavaScript is loading correct file path

### Modal Not Opening
- Check that individual game JSON files exist
- Verify file path construction matches directory structure
- Look for JavaScript errors in modal opening functions

### Missing Featured Games  
- Check `is_featured: true` exists in games data
- Verify featured games section JavaScript is working
- Ensure featured games have valid modal file paths

### Badge Styling Issues
- Verify CSS classes match storefront names
- Check for case sensitivity issues
- Ensure all storefronts have defined badge styles

---

**Last Updated**: August 18, 2025  
**Data Version**: 678 games (Epic: 346, GOG: 300, Amazon: 23, itch.io: 9)