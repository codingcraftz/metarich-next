const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

async function generateFavicons() {
  const inputFile = path.join(process.cwd(), "public", "metarich.png");
  const sizes = [16, 32, 48, 64, 72, 96, 144, 192, 256];

  try {
    // Generate favicon.ico (multi-size)
    await sharp(inputFile).resize(32, 32).toFile(path.join(process.cwd(), "public", "favicon.ico"));

    // Generate apple-touch-icon
    await sharp(inputFile)
      .resize(180, 180)
      .toFile(path.join(process.cwd(), "public", "apple-touch-icon.png"));

    console.log("Favicon generation completed successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateFavicons();
