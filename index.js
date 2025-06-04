import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
//In this way we connect to mongodb

// remember here we intialize the empty object
dotenv.config({});

const app = express();

//How to make API or how to get data from the browser.
//This is our API basic
//Below api is for testing our code is working or not.
// app.get("/home", (req, res) => {
//   return res.status(200).json({
//     message: "I am coming from backend",
//     success: true,
//   });
// });

//middleware
//When request pass then our data in jason format.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  //frontend build we use the react vite(imp to remember)
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

//It take the port and callback function
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
