import { connect as mongooseConnect } from "mongoose";
const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }

  await mongooseConnect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  connection.isConnected = true;
  console.log("MongoDB connected successfully");
}

export default connect;
