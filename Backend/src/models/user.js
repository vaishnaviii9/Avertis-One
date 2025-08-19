import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import ROLES from '../enums/roles.js';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: Object.values(ROLES),
    required: true
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Compare passwords
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
