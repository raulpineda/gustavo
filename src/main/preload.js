const { ipcRenderer, webContents, ipcMain, remote } = require("electron");

window.ipcRenderer = ipcRenderer;
window.webContents = webContents;
window.ipcMain = ipcMain;
window.remote = remote;
