import { Request, Response } from 'express';
import * as roleService from '../services/roleService';

function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export const createRole = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const role = await roleService.createRole(name);
    res.status(201).json(role);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await roleService.getRoles();
    res.status(200).json(roles);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const role = await roleService.updateRole(id, name);
    res.status(200).json(role);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await roleService.deleteRole(id);
    res.status(204).send();
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
