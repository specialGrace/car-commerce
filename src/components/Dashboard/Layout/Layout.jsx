import React from 'react'
import SideBar from '../SideBar/SideBar'
import Tab from '../Tab/Tab'
import {Outlet} from 'react-router-dom'

import styles from './Layout.module.css'

function Layout(props) {
  return (
      <div className={styles.layout}>
          <Tab />
          <SideBar />
          <div className={styles.main}>
              {<Outlet />}
          </div>
      </div>
  )
}

export default Layout
