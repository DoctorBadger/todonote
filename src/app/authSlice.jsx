import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    signup: (state, action) => {
      const { name, email, password } = action.payload;

      const existingUser = state.users.find(
        (user) => user.email === email
      );

      if (existingUser) {
        state.error = "User already exists";
      } else {
        state.users.push({ name, email, password });
        state.error = null;
      }
    },

    login: (state, action) => {
      const { email, password } = action.payload;

      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.currentUser = user;
        state.error = null;
      } else {
        state.error = "Invalid email or password";
      }
    },

    logout: (state) => {
      state.currentUser = null;
    },

    reset: (state, action) =>{
      const{ email, password} = action.payload;
      const user = state.users.find(
        (u)=>u.email===email
      )
      if (user){
        user.password = password
        state.error = null
      }else{
        state.error= "User not found"
      }
    },

  }
});

export const { signup, login, logout, reset } = authSlice.actions;

export default authSlice.reducer;