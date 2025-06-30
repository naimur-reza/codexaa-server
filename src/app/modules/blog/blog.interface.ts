export interface IBlog {
  title: string
  subtitle: string
  image: string
  content: string
  author: string
  tags?: string[]
  metaTitle: string
  metaDescription: string
  metaTags: string[]
  metaImageAlt: string
  createdAt?: Date
  updatedAt?: Date
} 