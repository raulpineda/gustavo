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
        value: state.value + 6
      };
      break;

    default:
      return state;
      break;
  }
}

module.exports = workspaceApp;
