export interface IService {
  title: string
  subtitle: string
  image: string
  features: string[]
  metaTitle: string;
  metaDescription:string;
  metaTags: string[];
  metaImageAlt: string;
  createdAt?: Date
  updatedAt?: Date
}
