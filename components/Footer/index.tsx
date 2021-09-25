import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

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
      text: Array<string>
    },
    designBy: {
      link: string,
      text: string
    }
  }
}

const Footer: NextPage<Props> = ({ data }) => {

  const language = useContext(LanguageContext);

  return (
    <footer className={styles.footer}>
      <div>
        <a href={ data.linkedin.link } target="_blank" rel="noreferrer">
          {/* { data.linkedin.text } &nbsp; */}
          <Image 
            src={data.linkedin.logo.src}
            alt={data.linkedin.logo.alt}
            width={data.linkedin.logo.width}
            height={data.linkedin.logo.height} />
        </a>
        <a href={ 'tel:' + data.contact.number } target="_blank" rel="noreferrer">{ data.contact.text[language.languageActive] }</a>
      </div>
      <div>
        <a href={ data.designBy.link } target="_blank" rel="noreferrer">{ data.designBy.text }</a>
      </div>
    </footer>
  );
}

export default Footer;