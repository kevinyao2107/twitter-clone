import { useEffect, useReducer, useRef, useState } from 'react';
import { firestoreConfig } from '../firebase/config';

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = firestoreConfig.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unSub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        setError('Impossible de recurer la data');
      }
    );

    return () => unSub();
  }, [collection, query, orderBy]);

  return { documents, error };
};
