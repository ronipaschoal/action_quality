import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Home: NextPage = () => {
  
  const language = useContext(LanguageContext).languageActive;

  return (
    <section id={data.id} className={styles.home}>
      <div>
        <h1>A<span>C</span>TION <br/> <span>Quality</span></h1>
        <p>{data.content[language]}</p>
      </div>
      <div>
        <p>{data.content2[language]}</p>
      </div>
    </section>
  );
}

export default Home;