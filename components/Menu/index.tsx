import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Menu {
  section: string,
  title: Array<string>
}

const Menu: NextPage = () => {

  const { languageActive, setLanguageActive } = useContext(LanguageContext);
  const { id, menu, logo, language } = data;

  const [activeMenu, setActiveMenu] = useState(menu[0].section);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll);
  },[]);

  function selectMenu(menu: string) {

    setActiveMenu(menu);
    setHamburgerActive(false);
    setNavMenuActive(false);
  }

  function listenToScroll() {

    menu.forEach(function(menu : Menu){
      
      const menuItem = document.querySelector(`#${menu.section}`);
      if(menuItem == null) { return; }

      const position = menuItem.getBoundingClientRect();
      if(position.top < 1 && position.bottom > 1) {
        setActiveMenu(menu.section);
      }
    });
  }

  return (
    <header id={id} className={styles.header}>

      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <a href={`#${menu[0].section}`} 
            className={styles.navLogo} 
            onClick={ () => selectMenu(menu[0].section) }>

            <Image src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              layout="fixed" />
          </a>
        </div>

        <ul className={navMenuActive 
          ? styles.active : ''}>

          { menu.map((menu, index) => {
            return(
              <li key={index} className={activeMenu == menu.section ?
                styles.active : ''}>
                
                <a
                  href={`#${menu.section}`}
                  onClick={ () => selectMenu(menu.section) }>
                  { menu.title[languageActive] }
                </a>
              </li>
            );
          })}
          <li>
            <a className={styles.language} onClick={ () => {
              setLanguageActive(languageActive ? 0 : 1);
            }} >
              <img src={ `../../images/${data.language[languageActive]}.png` } 
                alt={data.language[languageActive]} 
                title={data.language[languageActive]} />
            </a>
          </li>
        </ul>

        <div className={hamburgerActive 
          ? `${styles.active} ${styles.hamburger}` : styles.hamburger}
          onClick={ () => {
            setHamburgerActive(!hamburgerActive);
            setNavMenuActive(!navMenuActive);
          } }>

          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

      </nav>
    </header>
  );
}

export default Menu;