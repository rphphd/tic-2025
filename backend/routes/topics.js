/* eslint-disable no-console */
import express from "express";
import { getCount, getFromLimit, getIn, insertMany, updateMany, deleteOne } from "../data/data-interface.js";

import { model as technologiesModel } from "../models/technologies.js";
import { model as descriptionsModel } from "../models/descriptions.js";
import { model as linksModel } from "../models/links.js";

const models = [
    technologiesModel,
    descriptionsModel,
    linksModel
];

const router = express.Router();

router.get('/', function(req, res) {
    Promise.all([
        getCount(technologiesModel.model),
        getFromLimit(technologiesModel.model, {}, req.query.start, req.query.limit)
    ]).then( ([ count, technologies ]) => {
        const techIds = technologies.map( t => t.id ).reduce( (list, t) => {
            if (t) {
                list.push(t)
            }
            return list
        }, [])
        if (techIds && techIds.length > 0 && techIds[0]) {
            Promise.all([
                getIn(models[1].model, models[1].uniqueId, techIds),
                getIn(models[2].model, models[2].uniqueId, techIds)
            ]).then( ([descriptions, links]) => {
                res.send({
                    'count': count,
                    'technologies':  technologies,
                    'descriptions': descriptions,
                    'links': links
                });
            })
        } else {
            res.send({
                'count': 0
            })
        }
    }).catch(err => {
        res.send({ 'error': err})
    })

});

router.put('/:model', function(req, res) {
    const modelReceived = models.find( m => m.modelName === req.params.model )
    if (modelReceived) {
        const idsInDocs = req.body.docs.map(d => d[modelReceived.uniqueId])
        if (idsInDocs && idsInDocs.length > 0 && idsInDocs[0] ) {
            const newDocs = []
            const updateDocs = []
            getIn(modelReceived.model, modelReceived.uniqueId, idsInDocs)
            .then( docs => {
                console.log('docs from PUT getIn', docs)
                idsInDocs.forEach(i => {
                    const newDoc = req.body.docs.find(d => d[modelReceived.uniqueId] === i)
                    const dbDocs = docs.filter(d => d[modelReceived.uniqueId] === i)
                    console.log(`Model ${modelReceived.modelName} - for type ${i}, resulting dbDocs`, dbDocs)
                    switch (dbDocs.length) {
                        case 0: // no existing doc, just insert it
                            newDocs.push(newDoc)
                            break;
                        case 1: // merge in request doc replacement
                            Object.assign(dbDocs[0], newDoc)
                            updateDocs.push(dbDocs[0])
                            break;
                        default: // remove all but the first
                            Object.assign(dbDocs[0], newDoc)
                            updateDocs.push(dbDocs[0])
                            for (let dno = 1; dno < dbDocs.length; dno++) {  // cleanup multiple docs with same id
                                deleteOne(modelReceived.model, dbDocs[dno])
                                .then( response => {
                                    console.log(`Deleted one`, response, dbDocs[dno])
                                })
                            }
                    }
                })
                if (newDocs.length > 0) {
                    try {
                        insertMany(modelReceived.model, newDocs)
                        .then( (err, docs) => {
                            if (err) {
                                res.send(`Error inserting docs for model ${req.params.model} - insertion incomplete.`)
                            } else {
                                res.send(`For model ${req.params.model}, inserted ${docs.length} docs.`)
                            }
                        })
                    }
                    catch(err) {
                        console.log(`Could not insertMany for model ${req.params.model}`, err)
                        res.send(`Error with insertMany for model ${req.params.model}`)
                    }
                }
                if (updateDocs.length > 0) {
                    console.log('updateDocs', updateDocs)
                    updateMany(modelReceived.model, updateDocs)
                    .then( responses => {
                        console.log('responses', responses)
                        let response = {n: 0, nModified: 0, ok: 1}
                        for (let i = 0; i < responses.length; i++) {
                            response.n += responses[i].n
                            response.nModified += responses[i].nModified
                            response.ok *= responses[i].ok
                        }
                        res.json(response)
                    })
                    .catch( err => {
                        console.log(`Could not updateMany for model ${req.params.model}`, err)
                        res.send(`Error with updateMany for model ${req.params.model}`)
                    })
                }
            }, err => {
                console.log(`getIn for ${modelReceived.modelName} docs in ${idsInDocs.join(',')} produced error}`, err)
                res.send(`Error getting existing docs for model ${modelReceived.modelName}.`)
            })
        } else {
            res.send(`documents for model ${req.params.model} missing id field.`)
        }
    } else {
        res.send(`No such model ${req.params.model}.`)
    }
});

export default router;
