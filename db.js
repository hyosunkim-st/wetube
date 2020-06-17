import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
<<<<<<< HEAD
   process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
        
    }
=======
  process.env.MONGO_URL,
  {

  useNewUrlParser:true,
  useFindAndModify: false,
  useUnifiedTopology: true

  }
>>>>>>> feature/#3/video
);

const db = mongoose.connection;

<<<<<<< HEAD
const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection:${error}`);
=======
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = () => console.log(`❌ Error on DB Connection:${error}`);
>>>>>>> feature/#3/video

db.once("open", handleOpen);
db.on("error", handleError);