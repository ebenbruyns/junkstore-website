import yaml
import csv
import os

# Get absolute path to this script’s folder
base_dir = os.path.dirname(__file__)

# Use paths relative to the script’s location
input_file = os.path.join(base_dir, '..', '_data', 'gog_games.yml')
output_file = os.path.join(base_dir, '..', '_data', 'gog_tested.csv')


# Check if input file exists
if not os.path.exists(input_file):
    print(f"Error: Input file not found: {input_file}")
    exit(1)

# Load YAML data
with open(input_file, 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

# Support both plain list or wrapped in 'games' key
games = data if isinstance(data, list) else data.get('games', [])

print(f"Loaded {len(games)} games")

# Write to CSV
with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['title', 'date_tested', 'notes'])  # CSV header

    for game in games:
        title = game.get('title', '').strip()
        date_tested = game.get('date_tested', '').strip().replace("'", "''")
        notes = game.get('notes', '').strip().replace("'", "''")

        writer.writerow([title, date_tested, notes])

print(f"CSV created at: {output_file}")
