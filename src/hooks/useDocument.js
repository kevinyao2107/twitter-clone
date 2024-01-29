import { useEffect, useReducer, useRef, useState } from 'react';
import { firestoreConfig } from '../firebase/config';

export const useDocument = (collection, id) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const ref = firestoreConfig.collection(collection).doc(id);

    const sub = ref.onSnapshot(
      (doc) => {
        setIsLoading(false);
        setDocuments({ ...doc.data(), id: doc.id });
      },
      (err) => {
        console.log(err);
        setError('impossible de trouver le poste');
        setIsLoading(false);
      }
    );

    return () => sub();
  }, [id, collection]);

  return { documents, error, isLoading };
};
