const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'
const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export interface CheckoutPayload {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export interface CheckoutResponse {
  orderId: string
}

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Erro ao buscar restaurantes')
  }
  return response.json()
}

export const fetchRestaurantById = async (id: number): Promise<Restaurant | undefined> => {
  const restaurants = await fetchRestaurants()
  return restaurants.find(restaurant => restaurant.id === id)
}

export const checkout = async (payload: CheckoutPayload): Promise<CheckoutResponse> => {
  const response = await fetch(CHECKOUT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  
  if (!response.ok) {
    throw new Error('Erro ao finalizar pedido')
  }
  
  return response.json()
}
