const mongoose = require("mongoose");

async function connectMongoDb(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
}
    // .then(() => console.log("Mongoose connected"))
    // .catch((err) => console.log("Error MOngoose", err));