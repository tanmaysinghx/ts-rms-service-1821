import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

export const createRole = async (name: string): Promise<Role> => {
  return await prisma.role.create({ data: { name } });
};

export const getRoles = async (): Promise<Role[]> => {
  return await prisma.role.findMany();
};

export const updateRole = async (id: string, name: string): Promise<Role> => {
  return await prisma.role.update({
    where: { id },
    data: { name }
  });
};

export const deleteRole = async (id: string): Promise<void> => {
  await prisma.role.delete({ where: { id } });
};
