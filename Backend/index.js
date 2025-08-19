// index.js
import dotenv from 'dotenv';
import connectDB from './src/config/dbconfig.js';
import { app } from './app.js';  // ✅ use the app you already set up

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
