console.log("Hello from the server side");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const authRouter=require('./routes/authRoutes');
const tripRouter=require('./routes/tripRoutes');
const entryRouter=require('./routes/entryRoutes');
const userRouter=require("./routes/userRoutes");



app.use('/api/v1/auth',authRouter);
app.use('/api/v1/trips',tripRouter);
app.use('/api/v1/entries',entryRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;
