import { NextPage } from 'next';

import styles from './styles.module.scss';

interface Props {
  data: {
    id: string,
    title: string,
    content: string,
    content2: string
  }
}

const Home: NextPage<Props> = ({ data }) => {

  return (
    <section id={data.id} className={styles.home}>
      <div>
        <h1>A<span>C</span>TION <br/> <span>Quality</span></h1>
        <p>{data.content}</p>
      </div>
      <div>
        <p>{data.content2}</p>
      </div>
    </section>
  );
}

export default Home;