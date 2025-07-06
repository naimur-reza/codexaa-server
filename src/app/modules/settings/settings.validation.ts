import { z } from 'zod'

export const navigationItemSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  enabled: z.boolean().optional()
})

export const productLinkSchema = z.object({
  title: z.string().min(1),
  url: z.string().url()
})

export const socialIconSchema = z.object({
  icon: z.string().min(1),
  url: z.string().url()
})

export const heroSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  words: z.array(z.string())
})

export const locationSchema = z.object({
  country: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email()
})

export const footerSchema = z.object({
  logo: z.string().optional(),
  locations: z.array(locationSchema),
  productLinks: z.array(productLinkSchema),
  socialIcons: z.array(socialIconSchema)
})

export const settingsUpdateSchema = z.object({
  navigation: z.array(navigationItemSchema).optional(),
  navLogo: z.string().optional(),
  hero: heroSchema.optional(),
  footer: footerSchema.optional()
})
