module.exports = (app) => {
  const posts = require("../controllers/post.controller.js");
  const router = require("express").Router();
  router.get("/", posts.findAll);
  router.post("/", posts.create);
  router.get("/:id", posts.findOne);
  app.use("/api/posts", router);
};
