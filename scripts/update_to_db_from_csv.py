import csv
import sqlite3
import os

def update_table_from_csv(csv_path, db_path, table_name):
    if not os.path.exists(csv_path):
        print(f"CSV file not found: {csv_path}")
        return
    if not os.path.exists(db_path):
        print(f"Database file not found: {db_path}")
        return

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Load CSV rows
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        updated = 0
        unmatched = []

        # Build a map from NormalizedTitle to Title for matching
        cursor.execute(f"SELECT Title, NormalizedTitle FROM {table_name} WHERE NormalizedTitle IS NOT NULL")
        title_map = {row[1]: row[0] for row in cursor.fetchall()}

        for row in reader:
            norm_title = row['title']
            date_tested = row.get('date_tested', '')
            notes = row.get('notes', '')

            matched_title = title_map.get(norm_title)
            if matched_title:
                cursor.execute(f'''
                    UPDATE {table_name}
                    SET DateTested = ?, Notes = ?
                    WHERE Title = ?
                ''', (date_tested, notes, matched_title))
                updated += 1
            else:
                unmatched.append(norm_title)

    conn.commit()
    conn.close()

    print(f"Updated {updated} rows in {table_name}.")
    if unmatched:
        print(f"{len(unmatched)} titles not matched in DB:")
        for t in unmatched:
            print(f" - {t}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 4:
        print("Usage: python update_db_from_csv.py <csv_path> <db_path> <table_name>")
        sys.exit(1)

    csv_path = sys.argv[1]
    db_path = sys.argv[2]
    table_name = sys.argv[3]

    update_table_from_csv(csv_path, db_path, table_name)
