const { execSync } = require("child_process");
const os = require("os");

const platform = os.platform();
const arch = os.arch();

if (platform === "darwin" && arch === "arm64") {
  execSync("npm install @next/swc-darwin-arm64@latest", { stdio: "inherit" });
} else if (platform === "win32" && arch === "x64") {
  execSync("npm install @next/swc-win32-x64@latest", { stdio: "inherit" });
} else if (platform === "linux" && arch === "x64") {
  execSync("npm install @next/swc-linux-x64@latest", { stdio: "inherit" });
} else {
  console.error(`Unsupported platform: ${platform} ${arch}`);
  process.exit(1);
}
