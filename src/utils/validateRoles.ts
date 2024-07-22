import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const validateRoles = async (roles: string[]): Promise<boolean> => {
  const validRoles = await prisma.role.findMany();
  const validRoleNames = validRoles.map(role => role.name);
  return roles.every(role => validRoleNames.includes(role));
};
