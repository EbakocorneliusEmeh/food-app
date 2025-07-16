import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import {ToastContainer} from 'react-toastify'
const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    <ToastContainer/>
     <Footer/>
    </>
  );
};

export default App;
