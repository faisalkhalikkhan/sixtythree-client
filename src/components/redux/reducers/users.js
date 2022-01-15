export const Users = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return {
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        users: state.users.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
