import type { NextPage } from 'next';
import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import LanguageContext from '../contexts/LanguageContext';

const App: NextPage = () => {

  const [languageActive, setLanguageActive] = useState(0);

  return (
    <LanguageContext.Provider value={{languageActive, setLanguageActive }} >
      <Header />
      <Main />
      <Footer />
    </LanguageContext.Provider>
  )
}

export default App;
