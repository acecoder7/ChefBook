import app from "./app.js";
import dotenv from "dotenv";
import Database from "./config/db.js";

// config
dotenv.config({ path: "./config/config.env" });

// handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`closing server due to uncaught exception!`);
  
    process.exit(1);
});
  
// Database Connection
Database();
  
// listening to PORT
app.listen(process.env.PORT, () => {
    console.log(`Listenting on port ${process.env.PORT}`);
});
  

// unhandled promise rejection
// process.on("unhandledRejection", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`closing server due to unhandled error!`);
//     server.close(() => {
//       process.exit(1);
//   });
// });