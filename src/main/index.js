const { app, shell, BrowserWindow, Menu, ipcMain } = require("electron");
const join = require("path").join;
const { createStore, applyMiddleware } = require("redux");
const {
  forwardToRenderer,
  triggerAlias,
  replayActionMain
} = require("electron-redux");
const workspaceApp = require("./reducer");

const store = createStore(
  workspaceApp,
  applyMiddleware(
    forwardToRenderer // IMPORTANT! This goes last
  )
);

replayActionMain(store);

const DEFAULT_WINDOW_CONFIG = {
  width: 800,
  height: 600,
  webPreferences: {
    preload: join(__dirname, "preload.js")
  }
};

const DEFAULT_URL = "http://localhost:8000/";

app.once("window-all-closed", function() {
  app.quit();
});

app.once("ready", function() {
  let w = new BrowserWindow(DEFAULT_WINDOW_CONFIG);
  w.once("closed", function() {
    w = null;
  });
  w.loadURL(DEFAULT_URL);

  ipcMain.on("open-a-window-please", () => {
    let myNewWindow = new BrowserWindow(DEFAULT_WINDOW_CONFIG);

    myNewWindow.on("closed", () => {
      myNewWindow = null;
    });

    myNewWindow.loadURL(DEFAULT_URL);
  });
});
