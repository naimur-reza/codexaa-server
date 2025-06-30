import { Schema, model } from 'mongoose'

const NavigationItemSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false })

const ProductLinkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false })

const SocialIconSchema = new Schema({
  icon: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false })

const SettingsSchema = new Schema({
  navigation: [NavigationItemSchema],
  navLogo: { type: String },
  hero: {
    title: { type: String },
    subtitle: { type: String }
  },
  footer: {
    logo: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    productLinks: [ProductLinkSchema],
    socialIcons: [SocialIconSchema]
  }
}, { timestamps: true })

export const Settings = model('Settings', SettingsSchema) 