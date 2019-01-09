const express = require("express");

const mongoose = require("mongoose");

const app = express();

const users = require("./routes/api/users");
const post = require("./routes/api/post");
const profile = require("./routes/api/profile");

//DB Config

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
//promesses wich mean that we have to use .then (sucess) .catch (err);
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

//Use Routes
app.use("/api/users", users);
app.use("/api/post", post);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
