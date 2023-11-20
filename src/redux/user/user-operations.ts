import userActions from "./user-actions";
import userApi from "@/api/user-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk(userActions.login.type, userApi.login);
const logout = createAsyncThunk(userActions.logout.type, userApi.logout);
const registration = createAsyncThunk(
  userActions.registration.type,
  userApi.registration
);
const fetchUser = createAsyncThunk(
  userActions.fetchUser.type,
  userApi.fetchUser
);
const refresh = userApi.refresh;
const resetPassword = createAsyncThunk(
  userActions.resetPassword.type,
  userApi.resetPassword
);

const userOperations = {
  login,
  logout,
  registration,
  fetchUser,
  refresh,
  resetPassword,
};

export default userOperations;
