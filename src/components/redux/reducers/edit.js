export const Edit = (state = null, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return (state = action.payload);
    case "NULL_DATA":
      return (state = null);
    default:
      return state;
  }
};
