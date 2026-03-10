import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export default rootReducer;