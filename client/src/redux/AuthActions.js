import {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
  getError,
  isLoading,
  updateUser,
} from "./AuthSlice";
import axios from "axios";

export const getOneUser = () => (dispatch) => {
  dispatch(isLoading());
  const id = localStorage.getItem("id");
  axios
    .get(`/auth/${id}`)
    .then((res) => dispatch(getUser(res.data.user)))
    .catch((err) => dispatch(getError(err.message)));
};

export const register = (user) => (dispatch) => {
  const {
    esColegio,
    lastname,
    email,
    name,
    password,
    phone,
    ruc,
    schoolDistrict,
    schoolName,
  } = user;

  console.log(    esColegio,
    lastname,
    email,
    name,
    password,
    phone,
    ruc,
    schoolDistrict,
    schoolName,)
  dispatch(isLoading());
  axios
    .post("/auth/signup", {
      esColegio,
      lastname,
      email,
      name,
      password,
      phone,
      ruc,
      schoolDistrict,
      schoolName,
    })
    .then((res) => {
      dispatch(registerUser());
    })
    .catch((err) => {
      dispatch(getError(err.message));
    });
};

export const login = (user) => (dispatch) => {
  dispatch(isLoading());
  axios
    .post("/auth/signin", { user })
    .then((res) => {
      dispatch(loginUser(res.data.user));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.user.id);
    })
    .catch((err) => dispatch(getError(err.message)));
};

export const update = (user) => (dispatch) => {
  dispatch(isLoading());
  axios
    .put(`/auth/${user.email}`, { user })
    .then((res) => {
      dispatch(updateUser(res.data.user));
    })
    .catch((err) => dispatch(getError(err.message)));
};

export const logout = () => (dispatch) => {
  dispatch(isLoading());
  try {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  } catch (err) {
    dispatch(getError(err.message));
  }
};
