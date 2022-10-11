import { useState } from 'react';
import styles from '../../../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../../public/images/Logo.png';

export default function Header(){
    const [sidebar, setSidebar] = useState(false);

    const handleShowSiderbar = ()=>{
        setSidebar(true)
    }

    const handleCloseSidebar = () =>{
        if(sidebar){
            setSidebar(false)
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.contentLogo}>
            <Image src={Logo} alt='logo' />
            </div>
         <nav className={sidebar ? styles.sideBar : styles.nav} sidebar={sidebar}>
              <ul className={styles.ul}>
                  <Link href='/'>
                      <li className={styles.li}
                      onClick={handleCloseSidebar}
                      >
                          Home
                      </li>
                  </Link>
              </ul>
              <ul className={styles.ul}>
                  <Link href='portifolio'>
                      <li className={styles.li}
                      onClick={handleCloseSidebar}
                      >
                          Portifólio
                      </li>
                  </Link>
              </ul>
              <ul className={styles.ul}>
                  <Link href='contato'>
                  <li className={styles.li}
                  onClick={handleCloseSidebar}
                  >
                      Contato
                  </li>
                  </Link>
              </ul>
              <div className={styles.closeSideBar}>
              <FaTimes
                onClick={handleCloseSidebar}
              />
              </div>
          </nav>
            <div className={styles.menu}>
                <FaBars 
                color='#da258e' 
                fontSize={'24px'}
                onClick={handleShowSiderbar}
                />
            </div>
        </header>
    )
}