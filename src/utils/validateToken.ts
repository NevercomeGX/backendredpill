import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './secrets';

interface TokenPayload {
  id: string;
  username: string;
  tokenType: string;
  iat: number;
  exp: number;
}

export const validateToken = (token: string): TokenPayload => {
  try {
    const payload = jwt.verify(token, SECRET_KEY) as TokenPayload;
    return payload;
  } catch (e) {
    throw new Error('invalid_token');
  }
};
