const getCount = (model, filter) => model.countDocuments(filter);

const getFromLimit = (model, filter, from, limit) => {
    let params = {};
    if (from) {
        params.skip = from;
    }
    if (limit) {
        params.limit = limit;
    }
    return model.find(filter, null, params);
};

const getIn = (model, field, list) => {
    const query = model.find({}).where(field)
        .in(list);
    return query.exec();
};

const insertMany = (model, data) => {
    if (model.modelName) {
        return model.insertMany(data);
    } else {
        return Promise.resolve([]);
    }
};

const updateMany = (model, data) => {
    if (model.modelName) {
        const updateTasks = [];
        data.forEach(doc => {
            updateTasks.push(model.replaceOne({ _id: doc._id }, doc));
        });
        return updateTasks.reduce((promiseChain, currentTask) => promiseChain.then(chainResults =>
            currentTask.then(currentResult =>
                [...chainResults, currentResult]
            )
        ), Promise.resolve([]));
    } else {
        return Promise.resolve([]);
    }
};

const deleteOne = (model, doc) => {
    if (model.modelName) {
        return model.deleteOne({ _id: doc._id });
    } else {
        return Promise.resolve({
            ok: 0, deletedCount: 0, n: 0
        });
    }
};

export {
    getCount,
    getFromLimit,
    getIn,
    insertMany,
    updateMany,
    deleteOne
};
