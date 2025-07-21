const {connect} = require("mongoose")
require("dotenv").config();

const connectDb = connect(process.env.MONGO_URL);

module.exports = connectDb;