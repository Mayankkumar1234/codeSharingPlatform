const express = require("express");
const connection = require("./Config/connection");
const codeRouter = require("./routes/coderRoute");
const app = express();
const cors = require("cors");
 require("dotenv").config();

 PORT = process.nev.PORT || 9000;

app.use(cors());
app.use(express.json())

app.listen(PORT, async () => {
  await connection

  console.log("Connected to mongoDb");

  console.log("Server is working at port:"+PORT);
});

app.use("/api-code", codeRouter);

 