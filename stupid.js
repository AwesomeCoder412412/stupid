const fs = require("fs");
const path = require("path");

// Path to your articles folder
const ARTICLES_DIR = path.join(__dirname, "articles_text");

// Output manifest file
const MANIFEST_FILE = path.join(ARTICLES_DIR, "manifest.json");

function generateManifest() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error("Articles folder not found:", ARTICLES_DIR);
    process.exit(1);
  }

  // Get all .txt files in the folder
  const files = fs.readdirSync(ARTICLES_DIR).filter(file => file.endsWith(".txt"));

  // Write JSON manifest
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(files, null, 2));
  console.log(`Manifest generated with ${files.length} files at ${MANIFEST_FILE}`);
}

generateManifest();