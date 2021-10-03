import { NextPage } from 'next';

import Menu from '../Menu';
import Home from '../Home';
import Section from '../Section';
import Contact from '../Contact';

import data from '../../public/content/data.json';
import styles from './styles.module.scss';

const Main: NextPage = () => {

  return (
    <main>
      <Menu data={data.menu} />
      <Home data={data.home} />
      { data.sections.map((section, index) => {
        return(
          <Section key={index} data={section} />
        );
      })}
      <Contact data={data.contact} />
    </main>
  );
}

export default Main;