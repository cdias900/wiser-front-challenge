import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';

const initialState = {
  email: '',
  password: '',
  error: false,
  isAuth: false,
  authComplete: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };

    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.INIT_AUTH:
      return {
        ...state,
        authComplete: false,
      };

    case actionTypes.AUTH_RESULT:
      return {
        ...state,
        isAuth: action.result,
        authComplete: true,
      };

    default:
      return state;
  }
};

export default reducer;
