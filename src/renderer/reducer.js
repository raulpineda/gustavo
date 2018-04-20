const initialState = {
  value: 0
};

function workspaceApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case "incremenThor":
      return {
        value: state.value + 1
      };
      break;

    default:
      return state;
      break;
  }
}

export default workspaceApp;
