import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import PostMessage from '../components/home/PostMessage';
import UsersMessages from '../components/home/UsersMessages';
import PremiumBar from '../components/home/PremiumBar';
import Tendances from '../components/home/Tendances';
import Suggestions from '../components/home/Suggestions';
import Footer from '../utilities/Footer';
import Layout from '../utilities/Layout';
import { useMyContext } from '../context/UseContext';
import HeaderBar from '../components/home/HeaderBar';
import SearchForm from '../components/home/SearchForm';

const Home = () => {
  const { user } = useMyContext();
  return (
    <Layout>
      <main className='central'>
        <div className='central-container'>
          <div className='central-left'>
            <HeaderBar />
            <div className='central-left__bottom'>
              <PostMessage user={user} />
              <UsersMessages uid={user.uid} />
            </div>
          </div>
          <div className='central-right'>
            <SearchForm />
            <div className='central-right__bottom'>
              <div className='central-right__bottom-content'>
                <PremiumBar />
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

export default Home;
