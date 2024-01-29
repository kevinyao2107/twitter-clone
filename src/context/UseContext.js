import { createContext, useContext, useEffect, useReducer } from 'react';
import { configAuth } from '../firebase/config';

export const UseContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const UseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const isAuthenticated = configAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
    });

    return () => isAuthenticated();
  }, []);

  console.log('state', state);

  return (
    <UseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UseContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(UseContext);
  if (!context) {
    throw new Error('You must provide');
  }
  return context;
};
