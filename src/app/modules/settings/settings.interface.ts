export interface NavigationItem {
  title: string
  url: string
}

export interface ProductLink {
  title: string
  url: string
}

export interface SocialIcon {
  icon: string
  url: string
}

export interface HeroSection {
  title: string
  subtitle: string
  words: string[]
}

export interface FooterSection {
  logo?: string
  address: string
  phone: string
  email: string
  productLinks: ProductLink[]
  socialIcons: SocialIcon[]
}

export interface ISettings {
  navigation: NavigationItem[]
  navLogo?: string
  hero: HeroSection
  footer: FooterSection
} 