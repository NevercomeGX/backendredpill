import { z } from 'zod';
import * as schemas from './schemas';

export interface EmailsShape {
  id: number;
  name: string;
  lastName: string;
  email: string;
  country: string;
}

export type QuerySchema = z.infer<typeof schemas.query>;
export type CreateSchema = z.infer<typeof schemas.create>;
export type UpdateSchema = z.infer<typeof schemas.update>;
