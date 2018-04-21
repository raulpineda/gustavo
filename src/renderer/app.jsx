import { createStore } from "redux";
import workspaceApp from "./reducer";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Counter from "./counterContainer";
import WindowLauncher from "./windowLauncher";
import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer
} from "electron-redux";

const store = createStore(workspaceApp);

// const todoApp = combineReducers(reducers);
// const initialState = getInitialStateRenderer();

// const store = createStore(
//   todoApp,
//   initialState,
//   applyMiddleware(
//     forwardToMain, // IMPORTANT! This goes first
//     ...otherMiddleware,
//   ),
// );

// replayActionRenderer(store);

render(
  <Provider store={store}>
    <div>
      <Counter />
      <WindowLauncher />
    </div>
  </Provider>,
  document.getElementById("app")
);
