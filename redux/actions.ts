export const actionTypes = {
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_ERROR: 'SET_ERROR',
  LOGIN: 'LOGIN',
  INIT_AUTH: 'INIT_AUTH',
  AUTH_RESULT: 'AUTH_RESULT',
};

export const setEmail = (email: string) => ({
  type: actionTypes.SET_EMAIL,
  email,
});

export const setPassword = (password: string) => ({
  type: actionTypes.SET_PASSWORD,
  password,
});

export const setError = (error: boolean) => ({
  type: actionTypes.SET_ERROR,
  error,
});

export const login = (email: string, password: string) => ({
  type: actionTypes.LOGIN,
  email,
  password,
});

export const initAuth = () => ({
  type: actionTypes.INIT_AUTH,
});

export const authResult = (result: boolean) => ({
  type: actionTypes.AUTH_RESULT,
  result,
});
