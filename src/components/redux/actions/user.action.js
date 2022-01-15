export const get__all_users = (payload) => {
  return {
    type: "GET__ALL",
    payload: payload
  }
}
export const add_user = (payload) => {
  return {
    type: "ADD_USER",
    payload: payload
  }
}