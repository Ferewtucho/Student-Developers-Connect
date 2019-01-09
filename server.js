const express = require("express");

const mongoose = require("mongoose");

const app = express();

//DB Config
const users = require("./routes/api/users");
const post = require("./routes/api/post");
const profile = require("./routes/api/profile");

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
//promesses wich mean that we have to use .then (sucess) .catch (err);
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;
//Use Routes
app.use("/api/users", users);
app.use("/api/post", post);
app.use("/api/profile", profile);
app.listen(port, () => console.log(`Server running on port ${port}`));
