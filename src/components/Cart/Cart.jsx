import React,{useContext} from 'react'
import styles from './Cart.module.css'
import GlobalContext from '../../Context'
import {FiTrash2} from 'react-icons/fi'

 function Cart() {
  const {cart, cartSubTotal, cartTax, cartTotal} = useContext(GlobalContext)
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart.map((item) => {
              const { img, title, price, total, id } = item;

              return (
                <tr key={id}>
                  <td>
                    <img src={img} alt={title} className={styles.img} />
                  </td>
                  <td>{title}</td>
                  <td>{price}</td>
                  <td className={styles.qtyContainer}>
                    <span className={`${styles.qtyDecrement} ${styles.qty} `}>
                      {" "}
                      -{" "}
                    </span>
                    <span className={`${styles.qtyCount} ${styles.qty} `}>
                      {" "}
                      100{" "}
                    </span>
                    <span className={`${styles.qtyIncrement} ${styles.qty} `}>
                      {" "}
                      +{" "}
                    </span>
                  </td>
                  <td>
                    <FiTrash2 />
                  </td>
                  <td>{total}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className={styles.cartT}>
        <h5>cartSubTotal: {cartSubTotal}</h5>
        <h5>cartTax: {cartTax}</h5>
        <h5>cartTotal: {cartTotal}</h5>
      </div>
    </div>
  );
}

export default Cart