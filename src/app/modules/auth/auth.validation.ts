import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty(),
})

const changePasswordSchema = z.object({
  adminId: z.string().nonempty(),
  oldPassword: z.string().nonempty(),
  newPassword: z.string().min(6),
})

export const authSchema = {
  loginSchema,
  changePasswordSchema,
} 