import React,{useContext} from 'react'
import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title'
import CartTable from '../components/Cart/Cart'
import GlobalContext from '../Context'

function CartScreen() {
  const {cart} = useContext(GlobalContext)
  return (
    <Layout>
        <div>
          {
          cart.length > 0 
            ? (
              <div>
                  <Title>Your Item(s)</Title>
                  <hr />
                <CartTable />
              </div>
             
            ) 
            
            : <div style={{height:'100vh', fontSize:'1rem'}}><Title>Your Cart Is currently empty</Title></div>}
        </div>
    </Layout>
  )
}

export default CartScreen