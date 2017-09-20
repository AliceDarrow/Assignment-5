//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://aliD:thisisatestpassword@ds119044.mlab.com:19044/cen3031-ad', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyA5KXyg2Qp7zxmFvuAYn9oEKKR76rcwmJs',
  },
  port: 8080
};
//comment
