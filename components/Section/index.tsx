import { NextPage } from 'next';
import { useContext } from 'react';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  data: {
    id: string,
    title: Array<string>,
    position: string,
    color: string,
    background: string,
    content: Array<string>,
    image: string
  }
}

const Section: NextPage<Props> = ({ data }) => {

  const language = useContext(LanguageContext);

  return (
    <section id={data.id}
      className={styles.section}
      style={{ 
        background: `${data.background}99`,
        color: data.color,
        flexDirection: data.position == 'left' ? 'row-reverse' : 'row'
      }}>
      
      <div className={`${styles.image} image`}
        style={{ backgroundImage: `url(${data.image})`}}></div>

      <div style={{ background: `${data.background}99`}}>
        <h2>{data.title[language.languageActive]}</h2>
        <p>{data.content[language.languageActive]}</p>
      </div>
      
    </section>
  );
}

export default Section;