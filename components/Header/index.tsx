import { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Header: NextPage = () => {
  
  const language = useContext(LanguageContext).languageActive;

  return (
    <Head>
      <title>{ data.title }</title>

      { data.fonts.map((font, index) => {
        return(
          <link key={index} href={font} rel="preload" as="font" crossOrigin=""></link>
        );
      })}
      
      <meta name="description" content={ data.description[language] } />
      <link rel="icon" href="./images/favicon.png" type="image/png" />
    </Head>
  );
}

export default Header;