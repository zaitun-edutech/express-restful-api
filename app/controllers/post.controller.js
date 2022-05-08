const db = require("../models");
const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong",
      });
    });
};

exports.create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published ? req.body.published : false,
  });
  post
    .save(post)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Something went wrong create",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Something went wrong",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Post not found with id " + id,
        });
      }
      res.send({
        message: "Post updated successfully",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Something went wrong",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Post not found with id " + id,
        });
      }
      res.send({
        message: "Post deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Something went wrong to delete",
      });
    });
};
