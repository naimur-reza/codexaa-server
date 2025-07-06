import { Schema, model } from 'mongoose'
import { IClientFeedback } from './clientFeedback.interface'

const ClientFeedbackSchema = new Schema<IClientFeedback>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    feedback: {
      type: String,
      required: [true, 'Feedback is required'],
      trim: true
    },
    image: {
      type: String
      // required: [true, 'Image is required']
    },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
      trim: true
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

ClientFeedbackSchema.index({ name: 1 })
ClientFeedbackSchema.index({ createdAt: -1 })

export const ClientFeedback = model<IClientFeedback>(
  'ClientFeedback',
  ClientFeedbackSchema
)
