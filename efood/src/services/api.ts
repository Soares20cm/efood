const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

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
