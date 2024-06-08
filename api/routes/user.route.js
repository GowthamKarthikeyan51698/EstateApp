import express from 'express';
import { updateUser, deleteUser, test } from '../controller/user.controller.js'
import { verifyToken } from '../utils/veritfyUser.js'

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)

export default router;