import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import route files
import authRoutes from './src/routes/auth.routes.js';
// import leaveRoutes from './src/routes/leaveRoutes.js';

const app = express();

// CORS setup
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
);

// Common middleware
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/leaves', leaveRoutes);

// Error handler
// app.use(errorHandler);

export { app };
