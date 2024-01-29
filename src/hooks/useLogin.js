import { useEffect, useState } from 'react';
import { configAuth } from '../firebase/config';
import { useMyContext } from '../context/UseContext';

export const useLogin = () => {
  const [isCancel, setIsCancel] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useMyContext();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await configAuth.signInWithEmailAndPassword(email, password);
      dispatch({ type: 'LOGIN', payload: res.user });
      if (!isCancel) {
        setError(null);
        setIsLoading(false);
      }
    } catch (error) {
      if (!isCancel) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    setIsCancel(false);
    return () => setIsCancel(true);
  }, []);

  return { error, isLoading, login };
};
