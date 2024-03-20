import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, forgotPassword, resetPassword, verifyAccessToken } from './authThunk';

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  secret: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verifyAccessToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tokenValid = payload.valid;
      })
      .addMatcher(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
