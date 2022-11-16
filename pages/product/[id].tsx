import { server } from '../../config';
import { GetStaticProps } from 'next';
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${server}/api/avo/${params.id}`)
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    }
  }
}

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/avo`)
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map((avo) => ({
    params: {
      id: avo.id
    }
  }))

  return {
    paths: paths,
    //incremental static generation
    //cualquier pagina que no se especifique en el path dara un 404
    //404 for everything else
    fallback: false
  }
}

const ProductPage = ({ product }: {product: TProduct}) => {

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
