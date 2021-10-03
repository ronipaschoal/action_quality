import { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  data: {
    title: string,
    description: Array<string>,
    fonts: Array<string>
  }
}

const Header: NextPage<Props> = ({ data }) => {
  
  const language = useContext(LanguageContext);

  return (
    <Head>
      <title>{ data.title }</title>

      { data.fonts.map((font, index) => {
        return(
          <link key={index} href={font} rel="preload" as="font" crossOrigin=""></link>
        );
      })}
      
      <meta name="description" content={ data.description[language.languageActive] } />
      <link rel="icon" href="./images/favicon.png" type="image/png" />
    </Head>
  );
}

export default Header;