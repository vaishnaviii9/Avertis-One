import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import ROLES from '../enums/roles.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    // 1️⃣ Connect to DB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('✅ MongoDB Connected for Seeding');

    // 2️⃣ Check if admin exists
    const existingAdmin = await User.findOne({ role: ROLES.ADMIN });
    if (existingAdmin) {
      console.log('⚠️ Admin already exists.');
      process.exit(0);
    }

    // 3️⃣ Create admin
    await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'AdminPass123', // bcrypt will hash in pre-save
      role: ROLES.ADMIN
    });

    console.log('✅ Admin created successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating admin:', err);
    process.exit(1);
  }
};

seedAdmin();
