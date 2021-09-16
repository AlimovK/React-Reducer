export const Reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, counter: state.counter + 1 };
    case "minus":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
