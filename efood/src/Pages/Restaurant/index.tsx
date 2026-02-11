import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantHeader from '../../components/RestaurantHeader'
import ProductsContainer from '../../components/ProductsContainer'
import CheckoutModal from '../../components/CheckoutModal'
import CartSidebar from '../../components/CartSidebar'
import DeliveryModal from '../../components/DeliveryModal'
import Footer from '../../components/Footer'
import { PageContainer } from './styles'
import { fetchRestaurantById } from '../../services/api'
import produto1 from '../../images/produto1.png'
import produto2 from '../../images/produto2.png'
import produto3 from '../../images/produto3.png'
import produto4 from '../../images/produto4.png'
import produto5 from '../../images/produto5.png'
import produto6 from '../../images/produto6.png'

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
        // Busca dados da API
        await fetchRestaurantById(restaurantId)
        
        // Usa dados originais com imagens locais
        setRestaurantInfo({
          titulo: 'La Dolce Vita Trattoria',
          tipo: 'Italiana'
        })
        
        const originalProducts: Product[] = [
          {
            id: 1,
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: produto1,
            price: 60.90,
            porcao: 'de 2 a 3 pessoas'
          },
          {
            id: 2,
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: produto2,
            price: 60.90,
            porcao: 'de 2 a 3 pessoas'
          },
          {
            id: 3,
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: produto3,
            price: 60.90,
            porcao: 'de 2 a 3 pessoas'
          },
          {
            id: 4,
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: produto4,
            price: 60.90,
            porcao: 'de 2 a 3 pessoas'
          },
          {
            id: 5,
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: produto5,
            price: 60.90,
            porcao: 'de 2 a 3 pessoas'
          },
          {
            id: 6,
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: produto6,
            price: 60.90,
            porcao: 'de 2 a 3 pessoas'
          }
        ]
        
        setProducts(originalProducts)
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