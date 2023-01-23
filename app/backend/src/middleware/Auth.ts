import { RequestHandler } from 'express';
import JWT from '../utils/JWT';

const jwt = new JWT();

const auth: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(authorization);

    req.body.user = decoded;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default auth;
