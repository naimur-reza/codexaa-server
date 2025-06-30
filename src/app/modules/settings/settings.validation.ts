import { z } from 'zod'

export const navigationItemSchema = z.object({
  title: z.string().min(1),
  url: z.string().url()
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
  subtitle: z.string().min(1)
})

export const footerSchema = z.object({
  logo: z.string().optional(),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  productLinks: z.array(productLinkSchema),
  socialIcons: z.array(socialIconSchema)
})

export const settingsUpdateSchema = z.object({
  navigation: z.array(navigationItemSchema).optional(),
  navLogo: z.string().optional(),
  hero: heroSchema.optional(),
  footer: footerSchema.optional()
}) 