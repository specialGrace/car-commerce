import React from 'react'
import {colors} from '../colors'

import styles from './Title.module.css'

function Title({name='default', children}) {

    const {color}= colors.find((color)=> color.name === name)

  return (
    <div className={styles.container}>
        <h1 style={{color:color, textTransform:'capitalize'}}>
            {children}
        </h1>
    </div>
  )
}

export default Title