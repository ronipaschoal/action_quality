import { NextPage } from 'next';
import { useContext } from 'react';

import { dataArray } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  index: number;
}

const Section: NextPage<Props> = ({ index }) => {

  const {id, background, color, position, image, title, content} = dataArray[index];
  const {languageActive} = useContext(LanguageContext);

  return (
    <section id={id}
      className={styles.section}
      style={{ 
        background: `${background}99`,
        color: color,
        flexDirection: position == 'left' ? 'row-reverse' : 'row'
      }}>
      
      <div className={`${styles.image} image`}
        style={{ backgroundImage: `url(${image})`}}>
      </div>

      <div style={{ background: `${background}99`}}>
        <h2>{title[languageActive]}</h2>
        <p>{content[languageActive]}</p>
      </div>
      
    </section>
  );
}

export default Section;