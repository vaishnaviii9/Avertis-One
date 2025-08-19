import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Mongoose connection options
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`, 
            options
        );
        
        console.log(`\n✅ MONGODB connected! DB host: ${connectionInstance.connection.host}`);
        console.log(`📄 Database: ${connectionInstance.connection.name}`);
        
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;