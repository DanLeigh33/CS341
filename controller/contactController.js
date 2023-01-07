const mongodb = require('../db/connect.js');
const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
    const allDB = await mongodb.getDatabase().db().collection('Contacts').find();
    allDB.toArray().then((dbs) => {
      res.status(200).json(dbs);
    });

  };

const getContact = async (req, res) => {
    const id = new ObjectId(req.params.id);
    const oneDB = await mongodb.getDatabase().db('Contactss').collection('Contacts').find({ _id: id});
    oneDB.toArray().then((dbs) => {
      res.status(200).json(dbs[0]);
    });
  };

  module.exports = {getDB, getContact};