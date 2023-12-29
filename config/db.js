const mongoose = require("mongoose");

const conn = async () => {
    try {
      const dbConn = await mongoose.connect(
        `mongodb+srv://amsfusion:X64CC7FKHz2wx9W3@amscluster.67eauga.mongodb.net/?retryWrites=true&w=majority`
      );
      console.log("Conectou ao banco de dados!");
  
      return dbConn;
    } catch (error) {
      console.log(error);
    }
  };
  
  conn();
  
  module.exports = conn;