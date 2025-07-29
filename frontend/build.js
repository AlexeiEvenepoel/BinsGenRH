#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Building BINs Generator RH Frontend...\n");

// Check if node_modules exists
if (!fs.existsSync("node_modules")) {
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });
  console.log("✅ Dependencies installed\n");
}

// Build the project
console.log("🔨 Compiling modules...");
try {
  execSync("npm run build:dev", { stdio: "inherit" });
  console.log("✅ Compilation successful\n");
} catch (error) {
  console.error("❌ Compilation failed:", error.message);
  process.exit(1);
}

// Check if build was successful
const distPath = path.join(__dirname, "dist", "script.js");
if (fs.existsSync(distPath)) {
  const stats = fs.statSync(distPath);
  console.log(`📄 Generated script.js (${Math.round(stats.size / 1024)}KB)`);
  console.log("🎉 Build completed successfully!");
  console.log("\n📋 Next steps:");
  console.log('   • Run "npm start" to start the development server');
  console.log("   • Open http://localhost:8080 in your browser");
  console.log('   • Use "npm run watch" for automatic recompilation');
} else {
  console.error("❌ Build failed: script.js not generated");
  process.exit(1);
}
