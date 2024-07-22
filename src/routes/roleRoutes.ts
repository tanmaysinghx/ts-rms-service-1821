import { Router } from 'express';
import { createRole, getRoles, updateRole, deleteRole } from '../controllers/roleController';

const router: Router = Router();

router.post('/', createRole);
router.get('/', getRoles);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

export default router;
