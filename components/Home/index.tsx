import { NextPage } from 'next';
import { useContext } from 'react';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  data: {
    id: string,
    title: string,
    content: Array<string>,
    content2: Array<string>
  }
}

const Home: NextPage<Props> = ({ data }) => {
  
  const language = useContext(LanguageContext);

  return (
    <section id={data.id} className={styles.home}>
      <div>
        <h1>A<span>C</span>TION <br/> <span>Quality</span></h1>
        <p>{data.content[language.languageActive]}</p>
      </div>
      <div>
        <p>{data.content2[language.languageActive]}</p>
      </div>
    </section>
  );
}

export default Home;