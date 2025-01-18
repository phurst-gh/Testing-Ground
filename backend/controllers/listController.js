const mongoose = require('mongoose');
// const ListItem = mongoose.model('ListItem');

exports.getListItems = async (req, res, next) => {
  // Get list items from DB
  console.log('Hit the getListItems endpoint.');
  return 'getListItems DING!';
};

exports.addListItem = async (req, res, next) => {
  // Add list item to the DB
  console.log('Hit the addListItem endpoint.');
  return 'addListItem DING!';
};

exports.deleteListItem = async (req, res, next) => {
  // Delete list item from DB
};

exports.editListItem = async (req, res, next) => {
  // Edit list item in DB
};
