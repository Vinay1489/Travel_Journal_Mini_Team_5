const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

mongoose
  .connect(DB, {
    tlsAllowInvalidCertificates: true,
  })
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log("Error in connecting " + err);
  });

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server side!", app: "Travel-Journal" });
});

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
