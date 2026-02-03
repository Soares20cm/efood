class Food {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  rating: number
  highlighted?: boolean

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    rating: number,
    highlighted?: boolean
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rating = rating
    this.highlighted = highlighted
  }
}

export default Food