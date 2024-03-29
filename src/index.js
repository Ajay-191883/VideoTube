// require("dotenv").config({ path: "./env" });

/**
 *# FIRST APPROACH TO HANDLE DB CONNECTION
 import mongoose from "mongoose";
 import { DB_NAME } from "./constants";
 
import express from "express";

const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App id listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR in App: ", error);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !");
    process.exit(1);
  });
