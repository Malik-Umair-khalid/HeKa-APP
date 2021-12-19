const initialState = {
  name: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "startQuiz":
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
export default reducer;
