import { Prisma, Emails } from '@prisma/client';
import type { EmailsShape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape({ id, name, lastName, email, country }: Emails): EmailsShape {
  return { id, name, lastName, email, country };
}

export function shapeNullable(emails: Emails | null): EmailsShape | null {
  return emails ? shape(emails) : null;
}

export async function _getEmailsById(id: number): Promise<Emails | null> {
  const emails = await prisma.emails.findUnique({ where: { id } });

  return emails;
}

export async function findEmailsById(id: number): Promise<EmailsShape | null> {
  const emails = await prisma.emails.findUnique({ where: { id } });

  return shapeNullable(emails);
}

export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<EmailsShape>> {
  const where: Prisma.EmailsWhereInput = {};

  const count = await prisma.emails.count({ where });
  const { offset, info } = getPagination(count, query);

  const emailss = await prisma.emails.findMany({
    ...offset,
    where,
  });

  return {
    ...info,
    data: emailss.map(shape),
  };
}

export async function create(data: CreateSchema): Promise<EmailsShape> {
  const emails = await prisma.emails.create({ data });

  return shape(emails);
}

export async function update(
  id: number,
  data: UpdateSchema
): Promise<EmailsShape | null> {
  const emails = await prisma.emails.update({ where: { id }, data });

  return shapeNullable(emails);
}

export async function destroy(id: number): Promise<void> {
  await prisma.emails.delete({ where: { id } });
}
