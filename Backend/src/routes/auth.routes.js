// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
;

const router = express.Router();

// Only ADMIN can create new users
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
