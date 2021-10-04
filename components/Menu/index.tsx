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

  const language = useContext(LanguageContext).languageActive;
  const setLanguageActive = useContext(LanguageContext).setLanguageActive;
  
  const [activeMenu, setActiveMenu] = useState(data.menu[0].section);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);

  function selectMenu(menu: string) {

    setActiveMenu(menu);
    setHamburgerActive(false);
    setNavMenuActive(false);
  }
  
  
  function listenToScroll() {
    // const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // const scrolled = winScroll / height;
    // console.log(scrolled);

    data.menu.forEach(function(menu : Menu){
      
      const menuItem = document.querySelector(`#${menu.section}`);
      if(menuItem == null) { return; }

      const position = menuItem.getBoundingClientRect();
      if(position.top < 1 && position.bottom > 1) {
        setActiveMenu(menu.section);
      }
    });
  }

  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll);
  },[]);

  return (
    <header id={data.id} className={styles.header} lang={ data.language[language] }>
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <a href={`#${data.menu[language].section}`} 
            className={styles.navLogo} 
            onClick={ () => selectMenu(data.menu[language].section) }>

            <Image src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height} />
          </a>
        </div>

        <ul className={navMenuActive 
          ? `${styles.active} ${styles.navMenu}` : styles.navMenu}>

          { data.menu.map((menu, index) => {
            return(
              <li key={index} className={styles.navItem}>
                <a href={`#${menu.section}`} onClick={ () => selectMenu(menu.section) } 
                  className={activeMenu == menu.section ?
                  `${styles.active} ${styles.navLink}` : styles.navLink}>
                  { menu.title[language] }
                </a>
              </li>
            );
          })}
          <li>
            <a className={styles.navItem} onClick={ () => {
              setLanguageActive(language ? 0 : 1);
            }} >
              <img src={ `../../images/${data.language[language]}.png` } 
                alt={data.language[language]} 
                title={data.language[language]} />
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