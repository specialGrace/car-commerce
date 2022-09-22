import React from 'react'
import {useParams} from 'react-router-dom'
import Details from '../components/Details/Details'
import Layout from '../components/Layout/Layout.jsx'

function ProductDetailScreen() {
    const {slug} = useParams()
 
  return (
    <Layout>
       <Details slug={slug}/>
    </Layout>
  )
}

export default ProductDetailScreen