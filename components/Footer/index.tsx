import { NextPage } from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

interface Props {

  data: {
    linkedin: { 
      link: string,
      text: string,
      logo: {
        src: string,
        alt: string,
        width: number,
        height: number
      }
    },
    contact: {
      number: string,
      text: string
    },
    designBy: {
      link: string,
      text: string
    }
  }
}

const Footer: NextPage<Props> = ({ data }) => {

  return (
    <footer className={styles.footer}>
      <a href={ data.linkedin.link } target="_blank" rel="noreferrer">
        {/* { data.linkedin.text } &nbsp; */}
        <Image 
          src={data.linkedin.logo.src}
          alt={data.linkedin.logo.alt}
          width={data.linkedin.logo.width}
          height={data.linkedin.logo.height} />
      </a>
      <a href={ 'tel:' + data.contact.number } target="_blank" rel="noreferrer">{ data.contact.text }</a>
      <a href={ data.designBy.link } target="_blank" rel="noreferrer">{ data.designBy.text }</a>
    </footer>
  );
}

export default Footer;