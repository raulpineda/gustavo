import { createStore } from "redux";
import workspaceApp from "./reducer";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Counter from "./counterContainer";
import WindowLauncher from "./windowLauncher";

const store = createStore(workspaceApp);

render(
  <Provider store={store}>
    <div>
      <Counter />
      <WindowLauncher />
    </div>
  </Provider>,
  document.getElementById("app")
);
