import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import subRoutes from "./routes/subRoute.js";
import productRoutes from "./routes/productRoute.js";
import collectionRoutes from "./routes/collectionRoute.js";

// import orderRoutes from './routes/orderRoutes.js'

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(fileUpload());

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use Routes
app.use("/api/users", authRouter);
app.use("/api", categoryRoutes);
app.use("/api", subRoutes);
app.use("/api", collectionRoutes);
app.use("/api", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);