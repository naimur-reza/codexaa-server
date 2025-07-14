export const userRole = {
  ADMIN: 'admin',
  MODERATOR: 'moderator'
} as const
export type USER_ROLE = (typeof userRole)[keyof typeof userRole]
