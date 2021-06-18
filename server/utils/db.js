import mongoose from "mongoose";

const MongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connection: ✔");
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default MongoConnect;