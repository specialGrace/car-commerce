import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineInstagram } from "react-icons/ai";
import {GiLifeBar} from "react-icons/gi";
import {CgFacebook} from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";
import { FaCreativeCommonsSamplingPlus, FaTimes } from "react-icons/fa";
import styles from '../SideBar/SideBar.module.css'

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const closeSidebarHandler = (e) => {
    setSidebarIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Sidebar}>
        <span className={styles.logoname}>
          <Link to="/" className={styles.logolink}>
            <FaCreativeCommonsSamplingPlus className={styles.logoicon} />
          </Link>
          <Link to="/" className={styles.logolink}>
            <h1 className={styles.tgq}>TGQ-Autos</h1>
          </Link>
          <div className={styles.timesContainer}>
            <button
              type=""
              onClick={closeSidebarHandler}
              className={styles.timesBtn}
            >
              <FaTimes className={styles.times} />
            </button>
          </div>
        </span>
        <hr />
        <ul className={styles.navbarlist}>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.navlink}>
              <AiOutlineHome className={`${styles.icon} ${styles.right}`} />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.navlink}>
              <GiLifeBar className={`${styles.icon} ${styles.right}`} />
              <p>Login</p>
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navlink}>
              <GiLifeBar className={`${styles.icon} ${styles.right}`} />
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navlink}>
              <GiLifeBar className={`${styles.icon} ${styles.right}`} />
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.navlink}>
              <GiLifeBar className={`${styles.icon} ${styles.right}`} />
              <p>Cart</p>
            </Link>
          </li>
          <li>
            <Link to="/payment" className={styles.navlink}>
              <GiLifeBar className={`${styles.icon} ${styles.right}`} />
              <p>Payment</p>
            </Link>
          </li>
        </ul>
        <hr />

        <span className={styles.mediaContainer}>
          <div className={styles.media}>
            <a href="" className={styles.mediaAnchor}>
              <AiOutlineInstagram className={styles.mediaLink} />
            </a>
          </div>
          <div className={styles.media}>
            <a href="" className={styles.mediaAnchor}>
              <IoLogoTwitter className={styles.mediaLink} />
            </a>
          </div>
          <div className={styles.media}>
            <a href="" className={styles.mediaAnchor}>
              <CgFacebook className={styles.mediaLink} />
            </a>
          </div>
        </span>
      </div>
      {/* {sidebarIsOpen && } */}
    </div>
  );
};

export default Sidebar;
