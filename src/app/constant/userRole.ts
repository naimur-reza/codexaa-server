export const userRole = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MODERATOR: 'moderator'
} as const
export type USER_ROLE = (typeof userRole)[keyof typeof userRole]
