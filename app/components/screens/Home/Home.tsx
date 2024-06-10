import { View, Text } from 'react-native'
import React from 'react'
import Layout from '@/components/layout/Layout'
import Header from './Header'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'
import Products from './Products/Products'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Categories />
      <Products />
    </Layout>
  )
}

export default Home
