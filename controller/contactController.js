const mongodb = require('../db/connect.js');
const ObjectId = require('mongodb').ObjectId;


const getDB  = async (req, res) => {
    const allDB = await mongodb.getDatabase().db('Contactss').collection('Contacts').find();
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

const createContact = async (req, res) => {
  //create object to send to the collection
  const newContact = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favoriteColor : req.body.favoriteColor,
    birthday : req.body.birthday
  };

  
  const resp = await mongodb.getDatabase().db('Contactss').collection('Contacts').insertOne(newContact);
  if (resp.acknowledged) {
    res.status(201).json(resp);
  } else {
    res.status(500).json(resp.error || 'Task could not be performed');
  }
};

const updateContact = async (req, res) => {
  //set object id to be updated
  const id = new ObjectId(req.params.id);
  //create new object to be sent for update
  const newContact = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    favoriteColor : req.body.favoriteColor,
    birthday : req.body.birthday
  };

  const resp = await mongodb.getDatabase().db('Contactss').collection('Contacts').replaceOne({_id: id}, newContact);

  if (resp.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(resp.error || 'Task could not be performed');
}
}

const deleteContact = async (req, res) => {
  const id = new ObjectId(req.params.id);

  const resp = await mongodb.getDatabase().db('Contactss').collection('Contacts').deleteOne({_id: id});
  if (resp.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(resp.error || 'Task could not be performed');
}
}

  module.exports = {getDB, getContact, createContact, updateContact, deleteContact};