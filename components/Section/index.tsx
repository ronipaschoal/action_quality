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
    <section id={data.id} className={styles.section}>
      
      <div className="image"></div>
      <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>

      <style jsx>{`
        section {
          background: ${data.background};
          color: ${data.color};
          flex-direction: ${ data.position == 'left' ? 'row-reverse' : 'row' };
        }
        .image {
          background: url(${data.image});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        // div:not(.image) {
        //   padding: ${ data.position == 'left' ? '0  40px 0 var(--container-padding)' : '0 var(--container-padding) 0 40px' };
        // }
      `}</style>

    </section>
  );
}

export default Section;