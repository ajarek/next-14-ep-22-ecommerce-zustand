export type Product = {
  _id?: number
  name: string
  slug: string
  image: string
  baner?: string
  price: number
  brand: string
  description: string
  category: string
  rating: number
  numReviews: number
  countInStock: number
  colors?: string[]
  sizes?: string[]
}
