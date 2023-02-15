import type { Handler } from 'express';
import * as services from './services';
import { SimpleError } from '../../utils/errors';

export const getObject: Handler = async (req, res, next) => {
  const emails = await services._getEmailsById(req.params.id);

  // Ownership validation should be here

  if (!emails) {
    throw new SimpleError(404, req.t('notFound'));
  }

  req.object = emails;
  return next();
};
