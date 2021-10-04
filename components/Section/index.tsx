import { NextPage } from 'next';
import { useContext } from 'react';

import { dataArray } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  index: number;
}

const Section: NextPage<Props> = ({ index }) => {

  const data = dataArray[index];
  const language = useContext(LanguageContext).languageActive;

  return (
    <section id={data.id}
      className={styles.section}
      style={{ 
        background: `${data.background}99`,
        color: data.color,
        flexDirection: data.position == 'left' ? 'row-reverse' : 'row'
      }}>
      
      <div className={`${styles.image} image`}
        style={{ backgroundImage: `url(${data.image})`}}>
      </div>

      <div style={{ background: `${data.background}99`}}>
        <h2>{data.title[language]}</h2>
        <p>{data.content[language]}</p>
      </div>
      
    </section>
  );
}

export default Section;