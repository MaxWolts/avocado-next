import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import { server } from '../config';

export const getServerSideProps = async () => {

  const response = await fetch(`${server}/api/avo`)
  const { data: productList } = await response.json()

  return {
    props: {
      productList,
    }
  }
}

const HomePage = ({ productList }: {productList: TProduct[] }) => {

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
