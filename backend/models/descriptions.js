import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    technology: String,
    description: String
});

const modelName = 'topicdescriptions';
const uniqueId = 'technology';
const model = new mongoose.model(modelName, schema);

export {
    schema,
    model,
    modelName,
    uniqueId
};
