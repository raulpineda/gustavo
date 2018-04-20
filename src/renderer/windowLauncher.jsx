import React from "react";

const handleLaunch = () => {
  console.log("🚀");
  window.ipcRenderer.send("open-a-window-please");
};

const windowLauncher = () => <button onClick={handleLaunch}>🚀</button>;

export default windowLauncher;
