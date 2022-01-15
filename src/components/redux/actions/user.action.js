import Axios from "axios";

export const addNewUser = async (data) => {
  await Axios.post("/api/v1/login", data);
  return (dispatch) => {
    dispatch({
      type: "ADD_NEW_USER",
      payload: payload,
    });
  };
};

export const deleteUser = async (id) => {
  await Axios.post("/api/v1/login", id);
  return (dispatch) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };
};
