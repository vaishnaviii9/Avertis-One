// const Leave = require("../models/leave");
// const LEAVE_STATUS = require("../enums/leaveStatus");

// exports.applyLeave = async (req, res) => {
//   try {
//     const { startDate, endDate, reason } = req.body;

//     if (!startDate || !endDate || !reason) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const leave = new Leave({
//       employee: req.user._id, // assuming req.user is set after login
//       startDate,
//       endDate,
//       reason
//     });

//     // await leave.save();

//     res.status(201).json({ message: "Leave application submitted", leave });
//   } catch (error) {
//     res.status(500).json({ message: "Error applying leave", error: error.message });
//   }
// };
