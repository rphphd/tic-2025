import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    id: String,
    title: String,
    name: String,
    split: String,
    link: String
});

const modelName = 'technologies';
const uniqueId = 'id';
const model = new mongoose.model(modelName, schema);

export {
    schema,
    model,
    modelName,
    uniqueId
};
