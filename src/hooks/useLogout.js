import React, { useEffect, useState } from 'react';
import { configAuth, firestoreConfig } from '../firebase/config';
import { useMyContext } from '../context/UseContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useMyContext();
  const { user } = useMyContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    try {
      // await firestoreConfig
      //   .collection('users')
      //   .doc(user.uid)
      //   .update({ online: false });

      await configAuth.signOut();

      dispatch({ type: 'LOGOUT' });
      if (!isCancelled) {
        setError(null);
        setIsLoading(false);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isLoading, logout };
};
