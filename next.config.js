// next.config.js
const os = require('os');

const platform = os.platform();
const arch = os.arch();

if (platform === 'darwin' && arch === 'arm64') {
  require('@next/swc-darwin-arm64');
} else if (platform === 'linux' && arch === 'x64') {
  require('@next/swc-linux-x64');
} else if (platform === 'win32' && arch === 'x64') {
  require('@next/swc-win32-x64');
} else {
  console.error(`Unsupported platform: ${platform} ${arch}`);
  process.exit(1);
}

module.exports = {
  reactStrictMode: true,
};
