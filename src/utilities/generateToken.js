import Jwt from 'jsonwebtoken'
import env from '@src/config/environment'

const generateToken = (id) => {
  return Jwt.sign({ id }, env.JWT_SECRET, {
    expiresIn: '1d'
  })
}

export default generateToken
