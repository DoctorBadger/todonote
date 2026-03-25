import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import todoReducer from "./todoSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  users: userReducer,
});

export default rootReducer;