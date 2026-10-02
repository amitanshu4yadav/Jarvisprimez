const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  const w = new BrowserWindow({ width: 1000, height: 720, minWidth: 760, minHeight: 600,
    backgroundColor: '#050a18', title: 'JarvisPrimez', icon: path.join(__dirname, 'build/icon.png'),
    webPreferences: { contextIsolation: true } });
  Menu.setApplicationMenu(null);
  w.loadFile('index.html');
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
