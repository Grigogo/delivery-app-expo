import { View, Text } from 'react-native'
import React from 'react'
import { useProfile } from '../Profile/useProfile'
import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog/Catalog'

const Favorites = () => {
  const { profile } = useProfile()
  return (
    <Layout>
      <Catalog title='Избранное' products={profile?.favorites || []} />
    </Layout>
  )
}

export default Favorites
