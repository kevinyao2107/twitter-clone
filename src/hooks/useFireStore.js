import { useEffect, useReducer, useState } from 'react';
import { firestoreConfig, timestamp } from '../firebase/config';

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firesstoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { ...state, isPending: true };
    case 'ADD_DOC':
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case 'UPDATED_DOC':
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case 'ERROR':
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    case 'REMOVE_DOC':
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: true,
      };
    default:
      return state;
  }
};

export const useFireStore = (collection) => {
  const [response, dispatch] = useReducer(firesstoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = firestoreConfig.collection(collection);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const raddDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({ type: 'ADD_DOC', payload: raddDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const removeDocument = await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: 'REMOVE_DOC', payload: removeDocument });
    } catch (err) {
      console.error(err);
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  const updateDocument = async (id, update) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const updatedDocument = await ref.doc(id).update(update);
      dispatchIfNotCancelled({ type: 'UPDATED_DOC', payload: updatedDocument });
    } catch (err) {
      console.error(err);
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { ...response, addDocument, deleteDocument, updateDocument };
};
