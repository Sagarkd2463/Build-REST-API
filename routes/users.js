import express from 'express';

import { v4 as uuidv4} from 'uuid';
import { createUser, deleteUser, getUser, getUserById, updateUser } from '../controllers/users.js';
uuidv4();

const router = express.Router();

router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;