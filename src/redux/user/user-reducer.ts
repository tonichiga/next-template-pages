import { createReducer } from "@reduxjs/toolkit";
import mainOperations from "./user-operations";
import { TUser } from "@/types/data";

export interface UserState {
  user: TUser;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: UserState = {
  user: null,
  loading: "idle",
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(mainOperations.login.fulfilled, (_, { payload }) => {
      return { user: payload, loading: "idle", error: null };
    })
    .addCase(mainOperations.login.rejected, (state, { error, meta }) => {
      return { ...state, loading: "idle", error: meta };
    })
    .addCase(mainOperations.login.pending, (state) => {
      return { ...state, loading: "pending", error: null };
    })
    .addCase(mainOperations.logout.fulfilled, () => {
      return { user: null, loading: "idle", error: null };
    })
    .addCase(mainOperations.registration.fulfilled, (_, { payload }) => {
      return { user: payload.data, loading: "idle", error: null };
    })
    .addCase(mainOperations.registration.rejected, (state, { error }) => {
      return { ...state, loading: "failed", error };
    })
    .addCase(mainOperations.registration.pending, (state) => {
      return { ...state, loading: "pending", error: null };
    })
    .addCase(mainOperations.fetchUser.fulfilled, (_, { payload }) => {
      return { user: payload, loading: "idle", error: null };
    })
    .addCase(mainOperations.fetchUser.rejected, (state, { error }) => {
      return { ...state, loading: "failed", error: null };
    })
    .addCase(mainOperations.fetchUser.pending, (state) => {
      return { ...state, loading: "pending", error: null };
    });
});

export default userReducer;
