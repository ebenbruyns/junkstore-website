# Website Maintenance Guide

## What This Document Is
This is your "how-to" guide for keeping the website running smoothly. It covers routine tasks and troubleshooting.

## How to Use This
- **Follow these steps** for regular maintenance
- **Reference when problems occur** for troubleshooting
- **Update procedures** as the website evolves
- **Check monthly** to keep everything current

---

## Daily/Regular Tasks

### Adding New Games
**When:** As you test new games  
**Frequency:** As needed  

**Steps:**
1. **Edit the appropriate YAML file:**
   - Epic games: `_data/epic_games.yml`
   - GOG games: `_data/gog_games.yml`
   - Amazon games: `_data/amazon_games.yml`

2. **Add game entry using this format:**
   ```yaml
   - title: "Game Name"
     storefront: "Epic" # or "GOG" or "Amazon"
     protondb: "https://www.protondb.com/app/123456" # or "" if none
     notes: "Your testing notes here"
     date_tested: "Jan '25" # Current month/year
   ```

3. **Update the JSON data file:**
   ```bash
   cd /home/annie/JunkStore/Website/mrsjunkrunner.github.io
   ruby -ryaml -rjson -e "
   epic = YAML.load_file('_data/epic_games.yml')
   gog = YAML.load_file('_data/gog_games.yml') 
   amazon = YAML.load_file('_data/amazon_games.yml')
   all_games = epic + gog + amazon
   puts JSON.pretty_generate(all_games.sort_by { |g| g['title'] })
   " > assets/data/games.json
   ```

4. **Test the changes:**
   - Run Jekyll: `bundle exec jekyll serve`
   - Check the games table loads properly
   - Verify new game appears correctly

### Content Updates
**When:** Updating existing game information  
**Frequency:** As needed  

**Steps:**
1. Find the game in the appropriate YAML file
2. Update the information (notes, ProtonDB link, etc.)
3. Regenerate JSON file (step 3 above)
4. Test the changes

---

## Weekly Tasks

### Check Website Health
**Frequency:** Weekly  

**Checklist:**
- [ ] Website loads properly
- [ ] Games table displays correctly
- [ ] Search and filtering work
- [ ] Mobile version looks good
- [ ] No broken links or images

### Review New Issues
**Frequency:** Weekly  

**Steps:**
1. Check if users have reported any problems
2. Add new issues to `ISSUES.md`
3. Prioritize urgent fixes
4. Plan fixes for next work session

---

## Monthly Tasks

### Performance Check
**Frequency:** Monthly  

**Tools to Use:**
- Google PageSpeed Insights
- GTmetrix
- Chrome DevTools

**What to Check:**
- [ ] Page load speeds
- [ ] Mobile performance
- [ ] Core Web Vitals scores
- [ ] Image optimization opportunities

### Content Audit
**Frequency:** Monthly  

**Review:**
- [ ] Game information accuracy
- [ ] Outdated ProtonDB links
- [ ] Missing or incomplete game notes
- [ ] Overall content organization

---

## Troubleshooting Common Issues

### Games Table Not Loading
**Symptoms:** Table shows "Loading..." indefinitely  

**Possible Causes & Solutions:**
1. **JSON file missing or corrupted:**
   - Check if `assets/data/games.json` exists
   - Regenerate JSON file using steps above

2. **JavaScript errors:**
   - Open browser DevTools (F12)
   - Check Console tab for error messages
   - Common fix: refresh the page

3. **Server issues:**
   - Restart Jekyll: `bundle exec jekyll serve`
   - Check terminal for error messages

### Search/Filtering Not Working
**Symptoms:** Typing in search or changing store filter has no effect  

**Solutions:**
1. Refresh the page
2. Check browser DevTools for JavaScript errors
3. Ensure `assets/js/games-table.js` file is accessible

### Website Won't Build
**Symptoms:** Jekyll build fails with errors  

**Common Solutions:**
1. **YAML syntax errors:**
   - Check for proper indentation in YAML files
   - Ensure quotes are properly closed
   - Validate YAML syntax online

2. **Missing files:**
   - Ensure all referenced files exist
   - Check file paths are correct

3. **Ruby/Jekyll issues:**
   - Run `bundle install` to update dependencies
   - Check Ruby version compatibility

### Mobile Display Issues
**Symptoms:** Website looks broken on mobile devices  

**Solutions:**
1. Clear browser cache on mobile device
2. Test in desktop browser with mobile simulation
3. Check CSS files are loading properly
4. Verify responsive design breakpoints

---

## File Structure Reference

### Important Files:
```
_data/
├── epic_games.yml      ← Epic Games data
├── gog_games.yml       ← GOG games data
├── amazon_games.yml    ← Amazon games data
└── featured_games.yml  ← Featured games list

assets/
├── data/
│   └── games.json      ← Generated JSON for JavaScript table
├── js/
│   └── games-table.js  ← Table functionality
└── css/
    └── (CSS files)     ← Styling

_pages/misc/
├── tested-games.md     ← Original games page
└── tested-games-js.md  ← JavaScript version

_sass/
└── games-table.scss    ← Table-specific styling
```

### Backup Strategy:
- **Git repository:** Natural backup of all changes
- **Local copies:** Keep local copies before major changes
- **Test versions:** Use separate test files (like `tested-games-js.md`)

---

## Emergency Procedures

### If Website Goes Down:
1. **Check Jekyll build status**
2. **Review recent changes** in git history
3. **Revert to last working version** if needed
4. **Contact hosting provider** if server issues

### If Games Table Breaks:
1. **Switch back to original version:**
   - Update navigation to point to `/tested-games/` instead of `/tested-games-js/`
2. **Check error messages** in browser DevTools
3. **Verify JSON file integrity**
4. **Regenerate JSON file** from YAML data

### If Major Issues Occur:
1. **Document the problem** in `ISSUES.md`
2. **Revert recent changes** using git
3. **Test with minimal configuration**
4. **Seek help** with specific error messages

---

## Getting Help

### When to Seek Help:
- Error messages you don't understand
- Functionality stops working
- Performance significantly degrades
- Need to implement new features

### Information to Provide:
- Specific error messages
- Steps that led to the problem
- Browser and device information
- Recent changes made

### Useful Resources:
- Jekyll documentation: https://jekyllrb.com/docs/
- GitHub Pages help: https://docs.github.com/en/pages
- Browser DevTools guides
- This project's documentation files