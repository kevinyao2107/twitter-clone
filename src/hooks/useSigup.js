import { useEffect, useRef, useState } from 'react';
import { configAuth, firestoreConfig } from '../firebase/config';
import { useMyContext } from '../context/UseContext';

export const useSignup = () => {
  const isCancelledRef = useRef(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useMyContext();

  const singup = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);
    isCancelledRef.current = false;

    try {
      const res = await configAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error(`Nous ne pouvons pas finaliser l'inscription`);
      }

      await res.user.updateProfile({ displayName });

      await firestoreConfig.collection('users').doc(res.user.uid).set({
        online: true,
        displayName,
      });

      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelledRef.current) {
        setError(null);
        setIsLoading(false);
      }
    } catch (error) {
      if (!isCancelledRef.current) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      isCancelledRef.current = true;
    };
  }, []);

  return { error, isLoading, singup };
};
