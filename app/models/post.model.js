module.exports = (mongoose) => {
  const Schema = mongoose.Schema(
    {
      title: String,
      body: String,
      published: Boolean,
    },
    { timestamps: true }
  );
  Schema.methods.toJSON = function () {
    const { __v, _id, ...Object } = this.toObject();
    Object.id = _id;
    return Object;
  };
  const Post = mongoose.model("posts", Schema);
  return Post;
};
