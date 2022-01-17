const init = [];
export const Users = (state = init, action) => {
  switch (action.type) {
    case "GET__ALL":
      return (state = action.payload);
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "UPDATE_USER":
      for (let i = 0; i < state.length; i++){
        if (state[i]._id === action.payload._id) {
          state[i] = action.payload
        }
      }
      return state
    case "DELETE_USER":
      state = state.filter((item) => item._id !== action.payload);
      return state;
    default:
      return state;
  }
};

