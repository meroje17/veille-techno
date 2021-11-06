import React from 'react';

// Styles
import * as naming from './constants/styles';
import './App.css';

// Components
import Changelog from './components/Changelog/Changelog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <section className={naming.BODY}>
        <Changelog />
      </section>
      <Footer />
    </div>
  );
}

export default App;
