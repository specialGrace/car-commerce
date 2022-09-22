import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.logo}>TGQ-Autos</h2>
      <div className={styles.categories}>
        <h4>Categories</h4>
          <ul>
            <li>
              <Link to="/">Mercedez</Link>
            </li>
            <li>
              <Link to="/">Lexus</Link>
            </li>
            <li>
              <Link to="/">Camry</Link>
            </li>
          </ul>
      </div>
      <div className={styles.socials}>
        <h4>Socials</h4>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com"
                rel="noopener noreferrer nofollow"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com"
                rel="noopener noreferrer nofollow"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com"
                rel="noopener noreferrer nofollow"
              >
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Footer