import express from 'express';
import { updateUser, test } from '../controller/user.controller.js'
import { verifyToken } from '../utils/veritfyUser.js'

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)

export default router;