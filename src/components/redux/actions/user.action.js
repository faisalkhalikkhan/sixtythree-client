export const get__all_users = (payload) => {
  return {
    type: "GET__ALL",
    payload: payload,
  };
};
export const add_user = (payload) => {
  return {
    type: "ADD_USER",
    payload: payload,
  };
};
export const update_user = (payload) => {
  return {
    type: "UPDATE_USER",
    payload: payload,
  };
};
export const delete_user = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
