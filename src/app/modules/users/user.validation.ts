import { z } from 'zod'

const createUser = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(30, 'Username must not exceed 30 characters'),
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50, 'Password must not exceed 50 characters'),
  role: z
    .enum(['super_admin', 'admin', 'moderator'])
    .optional()
    .default('moderator'),
  status: z.enum(['active', 'inactive']).optional().default('active')
})

export const UserValidation = {
  createUser
}

export type IUser = z.infer<typeof UserValidation.createUser>
