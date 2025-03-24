require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const moviesRoutes = require("./routes/moviesRoutes"); 

const app = express(); 
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use("/movies", moviesRoutes); 


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});