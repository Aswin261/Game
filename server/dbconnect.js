const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
let db;
const app = express();
app.use(express.json());
app.use(cors());
connectToDb((err) => {
  if (!err) {
    app.listen(3001, () => {
      console.log("listening on port 3001");
    });
    db = getDb();
  }
});

app.get("/userLog", (req, res) => {
  let posts = [];
  db.collection("userLog")
    .find()
    .sort({ id: 1 })
    .forEach((post) => posts.push(post))
    .then(() => {
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ error: "fetch the documents" });
    });
});

//Add
app.post("/userLog", (req, res) => {
  db.collection("userLog")
    .findOne({ id: Number(req.body.id) })
    .then((existingUser) => {
      if (existingUser) {
        res
          .status(409)
          .json({ error: "Customer with this Name already exists" });
      } else {
        db.collection("userLog")
          .insertOne({
            id: Number(req.body.id),
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
          })
          .then((result) => {
            res.status(201).json(result.value);
          })
          .catch((err) => {
            res.status(500).json({ error: "Could not create a document" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not check for existing user" });
    });
});

//Modify
app.put("/userLog/:id", (req, res) => {
  const id = Number(req.params.id);

  const updateData = {};
  if (req.body.First_name) updateData.First_name = req.body.First_name;
  if (req.body.Last_name) updateData.Last_name = req.body.Last_name;

  db.collection("userLog")
    .updateOne({ id: id }, { $set: updateData }, { returnOriginal: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//Delete
app.delete("/userLog/:id", (req, res) => {
  const id = Number(req.params.id);

  db.collection("userLog")
    .deleteOne({ id: id })
    .then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).json({ message: "Invalid item" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
