import { View, Text } from 'react-native'
import React from 'react'
import Layout from '@/components/layout/Layout'
import Header from './Header'
import Banner from './Banner/Banner'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Banner />
    </Layout>
  )
}

export default Home
