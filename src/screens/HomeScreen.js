import React from 'react'
import Layout from '../components/Layout/Layout'
import ProductList from '../components/ProductList/ProductList'
import Advert from '../components/advert/Advert'
 

function HomeScreen() {
  return (
    <Layout> 
        <Advert />
        <ProductList />
    </Layout>
  )
}

export default HomeScreen