import React from 'react'
import Product from '../Product/Product'
import {Consumer} from '../../Context'
import styles from './ProductList.module.css'

const ProductList = ()=>{

  return ( 
    <div className={styles.container}>
      <Consumer> 
      {(state)=>{
        return (state.Products.length > 0 && state.Products.map(
          (product) => (
          <Product 
            key={product.id}  
            product={product} 
            addToCart={state.addToCart}
            openModal={state.openModal}
            />
          )))
      }}
      </Consumer>
    </div> 
  )
}

export default ProductList
