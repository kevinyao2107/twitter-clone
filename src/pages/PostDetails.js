import React, { useEffect, useState } from 'react';
import { firestoreConfig } from './../firebase/config';
import { Link, useParams } from 'react-router-dom';
import Layout from '../utilities/Layout';
import UsersMessages from '../components/home/UsersMessages';
import PremiumBar from '../components/home/PremiumBar';
import Tendances from '../components/home/Tendances';
import Suggestions from '../components/home/Suggestions';
import Footer from '../utilities/Footer';
import { useMyContext } from '../context/UseContext';
import ReturnBar from '../components/Details/ReturnBar';
import './post-details.css';
import HeaderBar from '../components/home/HeaderBar';
import PostCard from '../components/Details/PostCard';
import PostSpinner from '../utilities/PostSpinner';
import SearchForm from '../components/home/SearchForm';
import Personality from '../components/Details/Personality';
import AdComment from '../components/Details/AdComment';
import CommentList from '../components/Details/CommentList';

const PostDetails = () => {
  const { user } = useMyContext();
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // firestoreConfig
    //   .collection('messages')
    //   .doc(id)
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       setIsLoading(false);
    //       setPost(doc.data());
    //     } else {
    //       setIsLoading(false);
    //       setError('impossible de trouver le poste');
    //     }
    //   });
    setIsLoading(true);
    const unsub = firestoreConfig
      .collection('messages')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setPost(doc.data());
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setError('impossible de trouver le poste');
        }
      });

    return () => unsub();
  }, [id]);

  return (
    <Layout>
      <main className='central'>
        <div className='central-container'>
          <div className='central-left'>
            <ReturnBar />
            <div className='central-left__bottom'>
              {isLoading ? (
                <PostSpinner />
              ) : error ? (
                <p>{error}</p>
              ) : (
                post && <PostCard data={post} />
              )}
              <AdComment />
              <CommentList />
            </div>
          </div>
          <div className='central-right'>
            <SearchForm />
            <div className='central-right__bottom'>
              <div className='central-right__bottom-content'>
                <Personality data={post} />
                <Tendances />
                <Suggestions />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PostDetails;
