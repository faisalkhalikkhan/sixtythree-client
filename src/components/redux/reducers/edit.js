export const Edit = (state = { edit: null }, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        edit: action.payload,
      };
    case "NULL_DATA":
      return {
        edit: null,
      };
    default:
      return state;
  }
};
