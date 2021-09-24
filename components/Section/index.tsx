import { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

interface Props {
  data: {
    id: string,
    title: string,
    position: string,
    color: string,
    background: string,
    content: string,
    image: string
  }
}

const Section: NextPage<Props> = ({ data }) => {

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
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>
      
    </section>
  );
}

export default Section;