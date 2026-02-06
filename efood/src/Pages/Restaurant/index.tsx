import React, { useState } from 'react'
import RestaurantHeader from '../../components/RestaurantHeader'
import ProductsContainer from '../../components/ProductsContainer'
import CheckoutModal from '../../components/CheckoutModal'
import CartSidebar from '../../components/CartSidebar'
import DeliveryModal from '../../components/DeliveryModal'
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
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false)
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false)

  const openProductModal = (product: Product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const closeProductModal = () => {
    setIsProductModalOpen(false)
    setSelectedProduct(null)
  }

  const handleAddToCart = () => {
    closeProductModal()
    setIsCartSidebarOpen(true)
  }

  const openCartSidebar = () => {
    setIsCartSidebarOpen(true)
  }

  const closeCartSidebar = () => {
    setIsCartSidebarOpen(false)
  }

  const handleContinueToDelivery = () => {
    closeCartSidebar()
    setIsDeliveryModalOpen(true)
  }

  const closeDeliveryModal = () => {
    setIsDeliveryModalOpen(false)
  }

  return (
    <PageContainer>
      <RestaurantHeader onOpenCart={openCartSidebar} />
      <ProductsContainer onProductClick={openProductModal} />
      <Footer />
      
      <CheckoutModal 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        onAddToCart={handleAddToCart}
      />
      
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={closeCartSidebar}
        onContinue={handleContinueToDelivery}
      />
      
      <DeliveryModal
        isOpen={isDeliveryModalOpen}
        onClose={closeDeliveryModal}
      />
    </PageContainer>
  )
}

export default Restaurant