import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantHeader from '../../components/RestaurantHeader'
import ProductsContainer from '../../components/ProductsContainer'
import CheckoutModal from '../../components/CheckoutModal'
import CartSidebar from '../../components/CartSidebar'
import DeliveryModal from '../../components/DeliveryModal'
import Footer from '../../components/Footer'
import { PageContainer } from './styles'
import { fetchRestaurantById, MenuItem } from '../../services/api'

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
  porcao: string
}

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false)
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [restaurantInfo, setRestaurantInfo] = useState<{ titulo: string; tipo: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const restaurantId = id ? parseInt(id) : 1
        const restaurant = await fetchRestaurantById(restaurantId)
        
        if (restaurant) {
          setRestaurantInfo({
            titulo: restaurant.titulo,
            tipo: restaurant.tipo
          })
          
          const formattedProducts: Product[] = restaurant.cardapio
            .slice(0, 6) // Limita para apenas 6 produtos
            .map((item: MenuItem) => ({
              id: item.id,
              name: item.nome,
              description: item.descricao,
              image: item.foto,
              price: item.preco,
              porcao: item.porcao
            }))
          
          setProducts(formattedProducts)
        }
      } catch (error) {
        console.error('Erro ao carregar restaurante:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurant()
  }, [id])

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

  if (loading) {
    return (
      <PageContainer>
        <RestaurantHeader restaurantInfo={restaurantInfo} onOpenCart={openCartSidebar} />
        <div style={{ textAlign: 'center', padding: '40px', color: '#fff' }}>Carregando cardápio...</div>
        <Footer />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <RestaurantHeader restaurantInfo={restaurantInfo} onOpenCart={openCartSidebar} />
      <ProductsContainer products={products} onProductClick={openProductModal} />
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