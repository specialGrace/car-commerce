import React from 'react'
import styles from './Product.module.css'
import {Link} from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import PropTypes from 'prop-types';

 

const Product = ({product, addToCart, openModal})=> {
  const {id,title, slug,img,description,price,inCart} = product

  // console.log(product)
  return ( 
    <div className={styles.container}>
      <div className={styles.card}>
         <div className={styles.cardImgContainer}>
          <Link to={`/products/${slug}`}><img src={img} alt={title} className={styles.cardImg}/></Link>
          <button disabled={inCart} className={styles.cardBtn}>
             {
             inCart 
             ? <p>In Cart</p> 
             : (
              <HiOutlineShoppingCart 
                onClick={()=> {
                  if(slug){
                    addToCart(slug)
                    // openModal(slug)
                  }
                }} 
                className={styles.cardIcon}/>)}
          </button>
         </div>
         <div className={styles.cardFooter}>
            <div className={styles.cardFooterTitle}><h4>{title}</h4></div>
            <div className={styles.cardFooterPrice}><p>{price}</p></div>
         </div>
         
      </div>
    </div>
  )
}

Product.propTypes = {
    product: PropTypes.shape({
     id:PropTypes.number,
     slug:PropTypes.string,
     title:PropTypes.string,
     description:PropTypes.string,
     inCart:PropTypes.bool,
     img:PropTypes.string,
     price:PropTypes.string
  }),
  addToCart:PropTypes.func
}

export default Product
