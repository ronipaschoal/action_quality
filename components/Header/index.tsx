import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

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

  const [activeMenu, setActiveMenu] = useState('home');
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);
  
  function mobileMenu() {
    setHamburgerActive(!hamburgerActive);
    setNavMenuActive(!navMenuActive);
  }

  function selectMenu(menu: string) {
    setActiveMenu(menu);
    if(hamburgerActive) {
      setHamburgerActive(false);
      setNavMenuActive(false);
    }
  }
  
  return (
    <header id={data.id} className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#home" className={styles.navLogo} onClick={ () => selectMenu('home') }>
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height} />
          </a>
        </div>
        <ul className={navMenuActive ?
              `${styles.active} ${styles.navMenu}` : styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#home" onClick={ () => selectMenu('home') } 
              className={activeMenu == 'home' ?
              `${styles.active} ${styles.navLink}` : styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" onClick={ () => selectMenu('about') } 
              className={activeMenu == 'about' ?
              `${styles.active} ${styles.navLink}` : styles.navLink}>
              Sobre
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#strategy" onClick={ () => selectMenu('strategy') } 
              className={activeMenu == 'strategy' ?
              `${styles.active} ${styles.navLink}` : styles.navLink}>
              Estrategia
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#clients" onClick={ () => selectMenu('clients') } 
              className={activeMenu == 'clients' ?
              `${styles.active} ${styles.navLink}` : styles.navLink}>
              Clientes
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" onClick={ () => selectMenu('contact') } 
              className={activeMenu == 'contact' ?
              `${styles.active} ${styles.navLink}` : styles.navLink}>
              Contato
            </a>
          </li>
        </ul>
        <div className={hamburgerActive ?
            `${styles.active} ${styles.hamburger}` : styles.hamburger}
            onClick={ mobileMenu }>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;