import React from 'react'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import styles from './Layout.module.css'

function Layout(props) {
  return (
      <div className={styles.layout}>
          <NavBar />
          {/* <SideBar /> */}
          <div className={styles.main}>
              {props.children}
          </div>
          <Footer/>
      </div>
  )
}

export default Layout
