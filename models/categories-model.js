'use strict';

const schema = require('./categories-schema.js');

class Categories {
    constructor(){
    } // 


    get(_id){
        if(_id){
            return schema.findOne({_id});
        }
        else {
            return schema.find({});
        }
    }// end of get method 

    create(record){
        let newRecord = new schema(record);
        return newRecord.save();
    } // end of create method 

    update(_id,record){
        return schema.findByIdAndUpdate(_id,record,{ new:true});
    } // end of update method 

    delete(_id){
        return schema.findByIdAndDelete(_id);
    } // end of update method 

} // end of Categories Class 

module.exports = Categories;