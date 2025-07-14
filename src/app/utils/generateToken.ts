import jwt from 'jsonwebtoken'

const generateToken = (payload: any, secret: any, expires_in: any) => {
  return jwt.sign(payload, secret, {
    expiresIn: expires_in,
    algorithm: 'HS256'
  })
}

export default generateToken

export const generateAccessToken = (user: any, secret: string) => {
  return generateToken({ user }, secret, '7d')
}
