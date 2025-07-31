/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
/* eslint-disable keyword-spacing */
import mongoose from 'mongoose';

export let databaseConnection = 'Waiting for Database response...';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'tic'
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

// If there is a connection error send an error message
mongoose.connection.on('error', function(error) {
    console.log('Database connection error:', error);
    databaseConnection = `Error connecting to Database: ${JSON.stringify(error)}`;
});

// If connected to MongoDB send a success message
mongoose.connection.once('open', function () {
    try {
        const collections = mongoose.connection.collections
        const names = Object.keys(collections);
        console.log('collection names', names);
    }
    catch(err) {
        console.log('Could not get collections:', err)
    }
    databaseConnection = 'Connected to Database';
});

export default connectDB;
