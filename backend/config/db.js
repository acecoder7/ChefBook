import mongoose from "mongoose";

const Database = () => {
    mongoose.connect(process.env.MONGO, {
    }).then(() => {
        console.log(`MongoDB Connected Successfully`);
    }).catch((error) => {
        console.error(`MongoDB Connection Error: ${error}`);
    });
}

export default Database;