import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface Logo {
  src: string,
  alt: string,
  width: number,
  height: number
}

interface Menu {
  section: string,
  title: Array<string>
}

interface Props {
  data: {
    id: string,
    logo: Logo,
    menu: Array<Menu>
  }
}

const Header: NextPage<Props> = ({ data }) => {

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
      if(position.top < 0 && position.bottom > 0) {
        setActiveMenu(menu.section);
      }
    });
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
                  { menu.title[0] }
                </a>
              </li>
            );
          })}
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

export default Header;