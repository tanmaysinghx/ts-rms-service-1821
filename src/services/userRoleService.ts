import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

export const setUserRoles = async (email: string, roles: string[]): Promise<UserRole> => {
  return await prisma.userRole.upsert({
    where: { email },
    update: { roles: { set: roles } },
    create: { email, roles: { set: roles } }
  });
};

export const getUserRoles = async (email: string): Promise<UserRole | null> => {
  return await prisma.userRole.findUnique({ where: { email } });
};

export const updateUserRoles = async (email: string, roles: string[]): Promise<UserRole> => {
  return await prisma.userRole.update({
    where: { email },
    data: { roles: { set: roles } }
  });
};

export const deleteUserRoles = async (email: string): Promise<void> => {
  await prisma.userRole.delete({ where: { email } });
};
