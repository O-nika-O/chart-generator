
import mongoose from 'mongoose'

const db = '';

const connectDB = async () => {

    try {
        console.log('Connected to chart-generator database');
        await mongoose.connect(`${db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

//module.exports = connectDB
export default connectDB;