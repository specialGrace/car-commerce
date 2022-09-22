import React, {useContext} from 'react'
import GlobalContext from '../../Context'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

import styles from './Modal.module.css'

function Modal() {
   const {modalIsOpen, modalProduct:{img,title,price}, closeModal} = useContext(GlobalContext)
 
    if(!modalIsOpen){
        return null
    }else{
        return ( 
            <div className={styles.container}>
               <div className={styles.modal}>
                    <h4>Item added to Cart</h4> 
                    <img src={img} alt={title}/>
                    <h4>{title}</h4>
                    <h4>{price}</h4>

                    <div className={styles.action}>
                        <Link to='/' >
                            <Button name='react' className={styles.btn} onClick={()=> closeModal()}>Store</Button>
                        </Link>
                        <Link to='/cart'>
                            <Button name='success' className={styles.btn} onClick={()=> closeModal()}>Go to Cart</Button>
                        </Link>
                    </div>
               </div>
            </div>
        )
    }
}

export default Modal