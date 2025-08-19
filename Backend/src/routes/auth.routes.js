// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';
import ROLES from '../enums/roles.js';

const router = express.Router();

// Only ADMIN can create new users
router.post('/register', protect, authorizeRoles(ROLES.ADMIN), registerUser);
router.post('/login', loginUser);

export default router;
