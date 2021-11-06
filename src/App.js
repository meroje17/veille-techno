import React from 'react';

// Styles
import * as naming from './constants/styles';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <section className={naming.BODY}>

      </section>
      <Footer />
    </div>
  );
}

export default App;
