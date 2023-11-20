import { createAsyncThunk } from "@reduxjs/toolkit";

const createAsyncThunkWrapper = (action: string, callback) => {
  return createAsyncThunk(action, async (...args) => {
    return callback(...args);
  });
};

export default createAsyncThunkWrapper;
