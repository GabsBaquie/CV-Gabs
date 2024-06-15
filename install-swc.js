const { execSync } = require('child_process');
const os = require('os');

const platform = os.platform();
const arch = os.arch();

let installCommand;

if (platform === 'darwin' && arch === 'arm64') {
  installCommand = 'npm install @next/swc-darwin-arm64@latest';
} else if (platform === 'linux' && arch === 'x64') {
  installCommand = 'npm install @next/swc-linux-x64@latest';
} else if (platform === 'win32' && arch === 'x64') {
  installCommand = 'npm install @next/swc-win32-x64@latest';
} else {
  console.error(`Unsupported platform: ${platform} ${arch}`);
  process.exit(1);
}

if (installCommand) {
  console.log(`Running: ${installCommand}`);
  execSync(installCommand, { stdio: 'inherit' });
}
