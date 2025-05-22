import mongoose from "mongoose";
import {DB_NAME} from '../constant.js'
const connectDB = async () => {
try {
   const conditionIntro =  await mongoose.connect(`${process.env.MONGODB_URL}`)
   console.log(`\n mongodb connect !! dost host: ${conditionIntro.connection.host}`);
} catch (error) {
   console.log("error is loading", error);
    process.exit(1)
}   
}
export default connectDB