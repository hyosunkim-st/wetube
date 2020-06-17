import dotenv from "dotenv";
import "./db.js";
import app from "./app.js";
dotenv.config();
import "./models/Video.js";
import "./models/Comment.js";
import "./models/User.js";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> feature/#3/video

>>>>>>> feature/#3/video
=======
>>>>>>> origin/develop
const PORT = process.env.PORT || 4000;
const handleListening = () => {
console.log(`✅ Listening on: http://localhost:${PORT}`)
};

<<<<<<< HEAD
const handleListening = () => {
    console.log(`✅ Listening on: http://localhost:${PORT}`)
};
  
<<<<<<< HEAD
  app.listen(PORT, handleListening);
=======
const handleListening = () =>
Console.log(`Listening on: http://localhost:${PORT}`);
<<<<<<< HEAD
=======

>>>>>>> feature/#3/video


app.listen(PORT, handleListening);
>>>>>>> feature/#3/video
=======
app.listen(PORT, handleListening);
>>>>>>> origin/develop
