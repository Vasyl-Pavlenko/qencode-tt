import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://auth-qa.qencode.com',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const setSecret = (secret) => {
  instance.defaults.headers.common.Secret = secret;
};

export const loginThunk = createAsyncThunk('auth/login', async (formData, thunkApi) => {
  try {
    const { data } = await instance.post('/v1/auth/login', formData);
    setToken(data.token);
    setSecret(data.secret);
    Notify.success('You have successfully logged into your account!');

    return data;
  } catch (err) {
    Notify.failure("I'm sorry, check your email and password or register a new account!");
    return thunkApi.rejectWithValue(err.message);
  }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, thunkAPI) => {
  try {
    const response = await instance.post(`/v1/auth/password-reset`, {
      email: email,
    });

    if (response) {
      Notify.success('Please, check your email!');
    }

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, secret, password }, thunkApi) => {
    try {
      const requestData = {
        token: token,
        secret: secret,
        password: password,
      };

      const { data } = await instance.post('/v1/auth/password-set', requestData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const verifyAccessToken = createAsyncThunk('auth/verifyAccessToken', async (_, thunkAPI) => {
  try {
    const response = await instance.post(
      '/v1/auth/access-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data); 
  }
});
