import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://araujo:06OSXbghkM5jjd3V@node-express.jk8vlp2.mongodb.net/alura-node?retryWrites=true&w=majority");
mongoose.connect("mongodb://127.0.0.1:27017/alura-node");

let db = mongoose.connection;

export default db;