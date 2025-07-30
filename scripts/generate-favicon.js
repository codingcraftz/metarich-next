const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFile = path.join(process.cwd(), "public", "metarich.png");
const outputDir = path.join(process.cwd(), "public");

async function generateFavicons() {
  try {
    // Generate favicon.ico (32x32)
    await sharp(inputFile).resize(32, 32).toFile(path.join(outputDir, "favicon.ico"));

    // Generate favicon-16x16.png
    await sharp(inputFile).resize(16, 16).toFile(path.join(outputDir, "favicon-16x16.png"));

    // Generate favicon-32x32.png
    await sharp(inputFile).resize(32, 32).toFile(path.join(outputDir, "favicon-32x32.png"));

    // Generate apple-touch-icon.png (180x180)
    await sharp(inputFile).resize(180, 180).toFile(path.join(outputDir, "apple-touch-icon.png"));

    console.log("Favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateFavicons();
