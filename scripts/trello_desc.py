#!/usr/bin/env python3
"""
trello_desc.py  —  Build a Trello card description from CHANGELOG.md.

Usage:
  python3 scripts/trello_desc.py <version> <commit_hash> <date> <files> [project_root]
"""
import sys, re, os

def extract_entry(changelog_path: str, version: str) -> dict:
    try:
        text = open(changelog_path).read()
    except FileNotFoundError:
        return {}

    pattern = rf"## {re.escape(version)} ·[^\n]*\n(.*?)(?=\n---|\Z)"
    m = re.search(pattern, text, re.DOTALL)
    if not m:
        return {}

    block = m.group(1).strip()
    lines = block.splitlines()

    title = ""
    you_can = ""
    body_lines = []
    files_line = ""

    for line in lines:
        if line.startswith("**") and line.endswith("**") and not title:
            title = line.strip("*").strip()
        elif line.startswith("You can now"):
            you_can = line.strip()
        elif line.startswith("📄"):
            files_line = line.strip()
        elif line.strip():
            body_lines.append(line.strip())

    return {
        "title":       title,
        "body":        " ".join(body_lines),
        "you_can_now": you_can,
        "files_line":  files_line,
    }

def build_desc(version, commit_hash, date, files, changelog_path):
    entry = extract_entry(changelog_path, version)

    parts = []

    if entry.get("title"):
        parts.append(f"**{entry['title']}**")
        parts.append("")

    if entry.get("body"):
        parts.append(entry["body"])
        parts.append("")

    if entry.get("you_can_now"):
        parts.append(entry["you_can_now"])
        parts.append("")

    parts.append("---")
    parts.append(f"🔧 Commit: {commit_hash}")
    parts.append(f"📅 Date: {date}")
    parts.append(f"📁 Files: {files}")

    return "\n".join(parts)

if __name__ == "__main__":
    if len(sys.argv) < 5:
        sys.exit(1)
    version      = sys.argv[1]
    commit_hash  = sys.argv[2]
    date         = sys.argv[3]
    files        = sys.argv[4]
    project_root = sys.argv[5] if len(sys.argv) > 5 else os.getcwd()
    changelog    = os.path.join(project_root, "CHANGELOG.md")
    print(build_desc(version, commit_hash, date, files, changelog))
