import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token tidak ditemukan' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    (req as any).userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token tidak valid' });
  }
};
