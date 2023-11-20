// import { IUser } from "@/types/user";
import { createSelector } from "@reduxjs/toolkit";
import { ReduxStore } from "../store";
import { UserEntity } from "@/entities/user.entity";

const rawUser = (state: ReduxStore): any => {
  return state.user;
};
const _user = (state: ReduxStore): any => {
  return state.user.user;
};
const user = createSelector(_user, (user) => {
  return new UserEntity(user);
});

const userSelectors = {
  user,
  rawUser,
};

export default userSelectors;
