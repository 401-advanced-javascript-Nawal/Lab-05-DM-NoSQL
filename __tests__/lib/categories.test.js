'use strict';

require('@code-fellows/supergoose');

const Categories = require('../../models/categories-model.js');

const category = new Categories();

describe(' Categories Testing ', () => {

    it(' can get() any record ', () => {
        let newRec = { name: 'test category' };

        return category.create(newRec)
            .then(record => {
                return category.get(record._id)
                    .then(catItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(catItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // end of then promise (catItem)
            }) // end of then promise (record)
    }) // end of it  get ()


    describe(' Categories Testing ', () => {

        it(' can create() A new record ', () => {
            let newRec = { name: 'test category' };
            return category.create(newRec)
                .then(record => {
                    Object.keys(newRec).forEach(key => {
                        expect(record[key]).toEqual(newRec[key]);
                    }) // end of forEach 
                }); // end of then promise (record)
        }); // end of it  get ()

    });

}) // end of Categories 