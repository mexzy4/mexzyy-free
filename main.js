const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1100, height: 720, minWidth: 420, minHeight: 560,
    title: 'Mexzyy Free', backgroundColor: '#0b0713',
    icon: path.join(__dirname, 'icon-512.png'),
    webPreferences: { backgroundThrottling: false }
  });
  win.loadFile('index.html');
});
app.on('window-all-closed', () => app.quit());
