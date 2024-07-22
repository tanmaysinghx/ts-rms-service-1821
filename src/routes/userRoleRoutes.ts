import { Router } from 'express';
import { setUserRoles, getUserRoles, updateUserRoles, deleteUserRoles } from '../controllers/userRoleController';

const router: Router = Router();

router.post('/', setUserRoles);
router.get('/:email', getUserRoles);
router.put('/:email', updateUserRoles);
router.delete('/:email', deleteUserRoles);

export default router;
