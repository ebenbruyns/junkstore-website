# Artwork Import Quick Reference

## ✅ Working System (Current)

**The website now properly displays CDN artwork from game JSON files.**

### How It Works
1. **Table loads**: Basic game data from `games-table.json` (fast loading)
2. **Modal opens**: Loads individual game JSON file with full artwork URLs
3. **Images display**: CDN URLs like `https://images.gog.com/{hash}.jpg?namespace=gamesdb`

### What's Fixed
- ✅ Modal system loads individual JSON files with artwork data
- ✅ URL filtering prevents local path attempts (`./artwork/` → placeholder)
- ✅ Malformed URL detection (`%7Bformatter%7D` → placeholder)
- ✅ Graceful fallbacks for missing images

## 📋 Import Process

### 1. Copy Fresh Data
```bash
cd /home/annie/JunkStore/github/junkstore-games-tested
cp website-export/games-table.json /home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/
cp -r website-export/games/* /home/annie/JunkStore/Website/mrsjunkrunner.github.io/assets/data/games/
```

### 2. Check for Malformed URLs
```bash
# Find any malformed URLs that need fixing
grep -r "%7Bformatter%7D" assets/data/games/
```

### 3. Fix Malformed URLs (if found)
```bash
# Replace malformed formatter strings with proper .jpg extension
find assets/data/games -name "*.json" -exec sed -i 's/%7Bformatter%7D\.%7Bext%7D/.jpg/g' {} \;
```

### 4. Test
- Featured games should show artwork
- Console should show `🖼️ Image URLs from detailed data:` with proper URLs
- No `/assets/data/https:/` errors in browser

## 🚨 Troubleshooting

### Featured Games Show Placeholders
**Check console for:**
- `Will show banner? false` = URL filtered out (malformed/local)
- `Will show vertical? false` = URL filtered out (malformed/local)

**Common fixes:**
- Replace `%7Bformatter%7D.%7Bext%7D` with `.jpg`
- Remove duplicate `?namespace=gamesdb` parameters
- Ensure URLs start with `https://`

### Old 404 Errors Still Appear
**Clear browser cache and hard refresh (Ctrl+F5)**

---

**Last Updated**: August 19, 2025
**System Status**: ✅ Working - CDN artwork displaying properly