import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import GlobalContext from '../../Context'

import styles from './NavBar.module.css'

function NavBar() {
  const { cart } = useContext(GlobalContext)

  const { setShowBackDrop, setIsOpen } = useContext(GlobalContext);
  
   const openSidebarHandler = () => {
     setIsOpen(true);
     setShowBackDrop(true);
   };
  
  return (
    <div className={styles.navbar}>
      <div className={styles.navToggler}>
        <button type="" onClick={openSidebarHandler} className={styles.menuBtn}>
          <GiHamburgerMenu className={styles.menuIcon} />
        </button>
        <li className={styles.tgq}>TGQ-Autos</li>
      </div>

      <div className={styles.spacer}></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/cart" className={styles.cart}>
            <HiOutlineShoppingCart className={styles.cartIcon} />
            <div className={styles.cartCount}>{cart.length}</div>
          </Link>
        </li>
      </ul>
      <FaHamburger className={styles.menu} />
    </div>
  );
}

export default NavBar

