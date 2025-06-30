import { Schema, model } from 'mongoose'
import { IBlog } from './blog.interface'

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    subtitle: {
      type: String,
      required: [true, 'Subtitle is required'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'Image is required']
    },
    content: {
      type: String,
      required: [true, 'Content is required']
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true
    },
    tags: {
      type: [String],
      required: false,
      trim: true
    },
    metaTitle: {
      type: String,
      required: [true, 'Meta title is required'],
      trim: true
    },
    metaDescription: {
      type: String,
      required: [true, 'Meta Description is required'],
      trim: true
    },
    metaImageAlt: {
      type: String,
      required: [true, 'Meta Image Alt Tag is required'],
      trim: true
    },
    metaTags: {
      type: [String],
      required: [true, 'Meta tags is required'],
      trim: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

// Add indexes for frequently queried fields
BlogSchema.index({ title: 1 })
BlogSchema.index({ createdAt: -1 })

export const Blog = model<IBlog>('Blog', BlogSchema) 