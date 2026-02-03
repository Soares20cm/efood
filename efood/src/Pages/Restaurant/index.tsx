import React, { useState } from 'react'
import RestaurantHeader from '../../components/RestaurantHeader'
import ProductsContainer from '../../components/ProductsContainer'
import ProductModal from '../../components/ProductModal'
import Footer from '../../components/Footer'
import { PageContainer } from './styles'

type Product = {
  id: number
  name: string
  description: string
  image: string
}

const Restaurant = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <PageContainer>
      <RestaurantHeader />
      <ProductsContainer onProductClick={openModal} />
      <Footer />
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </PageContainer>
  )
}

export default Restaurant