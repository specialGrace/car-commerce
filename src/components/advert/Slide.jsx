import React from 'react'
import styles from './Slide.module.css'

function Slide({sd}) {
  
  const {image_1, image_2} = sd
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.prod_1}>
          <img src={sd.image_1} alt='slide'/>
        </div>
        <div className={styles.content}>
          <span>Upto</span>
          <h3>50% Off</h3>
          <p>Offer ends after 5days</p>
          <a href='#' className={styles.btn}>View Offer</a>
        </div>
        <div className={styles.prod_2}>
          <img src={image_2} alt='slide'/>
        </div>
      </div>
    </div>
  )
}

export default Slide