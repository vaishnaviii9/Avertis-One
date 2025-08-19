// models/LeaveRequest.js
const mongoose = require('mongoose');
const LEAVE_STATUS = require('../enums/leavestatus');

const LeaveRequestSchema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(LEAVE_STATUS),
    default: LEAVE_STATUS.PENDING
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  decisionDate: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model('LeaveRequest', LeaveRequestSchema);
