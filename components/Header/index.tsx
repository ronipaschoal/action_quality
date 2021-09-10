import { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

interface Props {
  data: {
    id: string,
    logo: {
      src: string,
      alt: string,
      width: number,
      height: number
    }
  }
}

const Header: NextPage<Props> = ({ data }) => {

  return (
    <header id={data.id} className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <a>
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height} />
          </a>
        </div>
        <ul>
          <li><a href="#home" className={styles.active}>Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#strategy">Estrategia</a></li>
          <li><a href="#clients">Clientes</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;