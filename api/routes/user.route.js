import express from 'express';
import { updateUser, deleteUser, test, getUserListings } from '../controller/user.controller.js'
import { verifyToken } from '../utils/veritfyUser.js'

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)

export default router;