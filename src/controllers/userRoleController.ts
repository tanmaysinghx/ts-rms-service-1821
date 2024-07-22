import { Request, Response } from 'express';
import * as userRoleService from '../services/userRoleService';

function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export const setUserRoles = async (req: Request, res: Response) => {
  const { email, roles } = req.body;
  try {
    const userRole = await userRoleService.setUserRoles(email, roles);
    res.status(201).json(userRole);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getUserRoles = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const userRole = await userRoleService.getUserRoles(email);
    if (!userRole) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(userRole);
    }
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateUserRoles = async (req: Request, res: Response) => {
  const { email } = req.params;
  const { roles } = req.body;
  try {
    const userRole = await userRoleService.updateUserRoles(email, roles);
    res.status(200).json(userRole);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteUserRoles = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    await userRoleService.deleteUserRoles(email);
    res.status(204).send();
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
