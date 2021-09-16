import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

interface Props {
  data: {
    id: string,
    logo: {
      src: string,
      alt: string,
      width: number,
      height: number
    },
    menu: Array<{
      section: string,
      title: Array<string>
    }>
  }
}

const Header: NextPage<Props> = ({ data }) => {

  const [activeMenu, setActiveMenu] = useState(data.menu[0].section);
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
  
  function listenToScroll() {
    // const winScroll =
    //   document.body.scrollTop || document.documentElement.scrollTop
  
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight;
  
    // const scrolled = winScroll / height;
    
    // console.log(scrolled);
    data.menu.forEach(function(menuItem){
      // console.log(menuItem.section);
      const position = document.querySelector(`#${menuItem.section}`)?.getBoundingClientRect();
      if(position && position.top < 0 && position.bottom > 0) {
        setActiveMenu(menuItem.section);
      }
      // console.log(menuItem.section, position);
    });
    // console.log(data.menu[0].section, document.querySelector(`#${data.menu[0].section}`)?.getBoundingClientRect());
    // console.log(data.menu[1].section, document.querySelector(`#${data.menu[1].section}`)?.getBoundingClientRect());
    // console.log(data.menu[2].section, document.querySelector(`#${data.menu[2].section}`)?.getBoundingClientRect());
    // console.log(data.menu[3].section, document.querySelector(`#${data.menu[3].section}`)?.getBoundingClientRect());
    // console.log(data.menu[4].section, document.querySelector(`#${data.menu[4].section}`)?.getBoundingClientRect());
  }

  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll);
  },[]);

  return (
    <header id={data.id} className={styles.header}>

      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <a href={`#${data.menu[0].section}`} 
            className={styles.navLogo} 
            onClick={ () => selectMenu(data.menu[0].section) }>

            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height} />

          </a>
        </div>

        <ul className={navMenuActive ?
          `${styles.active} ${styles.navMenu}` : styles.navMenu}>

          { data.menu.map((menu, index) => {
            return(
              <li key={index} className={styles.navItem}>
                <a href={`#${menu.section}`} onClick={ () => selectMenu(menu.section) } 
                  className={activeMenu == menu.section ?
                  `${styles.active} ${styles.navLink}` : styles.navLink}>
                  { menu.title[0] }
                </a>
              </li>
            );
          })}
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