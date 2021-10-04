import { NextPage } from 'next';

import Menu from '../Menu';
import Home from '../Home';
import Section from '../Section';
import Contact from '../Contact';

import styles from './styles.module.scss';

const Main: NextPage = () => {

  const sections = {
    about: 0,
    strategy: 1,
    clients: 2
  }

  return (
    <main>
      <Menu />
      <Home />
      <Section index={sections.about} />
      <Section index={sections.strategy} />
      <Section index={sections.clients} />
      <Contact />
    </main>
  );
}

export default Main;