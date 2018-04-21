import { createStore, applyMiddleware } from "redux";
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

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
const initialState = getInitialStateRenderer();

const store = createStore(
  workspaceApp,
  initialState,
  applyMiddleware(forwardToMain, logger)
);

replayActionRenderer(store);

render(
  <Provider store={store}>
    <div>
      <Counter />
      <WindowLauncher />
    </div>
  </Provider>,
  document.getElementById("app")
);
