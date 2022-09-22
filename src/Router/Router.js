import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import {HomeScreen, AboutScreen, ProductsScreen,ProductDetailScreen, ContactScreen,CheckoutScreen,CartScreen,LoginScreen, SignupScreen, RegisterScreen, NotFoundScreen, DashboardScreen,Layout,Profile,Orders, Receipts} from './index'

const Router = ()=> {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/products/:slug" element={<ProductDetailScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/login" element={<SignupScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/not-found" element={<NotFoundScreen />} />
      <Route path="/checkout" element={<CheckoutScreen />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardScreen />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="receipts" element={<Receipts />} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default Router


