import type { Handler } from 'express';
import * as schemas from './schemas';
import * as services from './services';
import { sendConfirmationEmail } from '../../mailservice/nodemailer';
import { transport } from '../../config/config';

export const list: Handler = async (req, res) => {
  // Validate query
  const query = schemas.query.parse(req.query);

  // Get all emailss
  const data = await services.findMany(query);

  // Response
  return res.json(data);
};

export const retrieve: Handler = async (req, res) => {
  // Get emails
  const emails = await services.findEmailsById(req.object.id);

  // Return response
  return res.json(emails);
};

export const create: Handler = async (req, res) => {
  // Validate data
  const data = schemas.create.parse(req.body);

  // Check required data
  if (!data.name || !data.email || !data.lastName || !data.country) {
    return res.status(400).json({ message: 'Missing required data.' });
  }

  try {
    // Create an emails
    const emails = await services.create(data);
    // Call mailservice
    // sendConfirmationEmail();

    // Response
    return res.status(201).json(emails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const update: Handler = async (req, res) => {
  // Validate data
  const data = schemas.update.parse(req.body);

  // Update the emails
  const emails = await services.update(req.object.id, data);

  // Response
  return res.json(emails);
};

export const destroy: Handler = async (req, res) => {
  // Destroy the emails
  await services.destroy(req.object.id);

  // Response
  return res.status(204).json();
};
