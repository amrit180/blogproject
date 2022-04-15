const Blog = require("../models/blog");

module.exports.createblog = async (req, res) => {
  try {
    const { title, slug, image, body } = req.body;
    // console.log(req.body);
    const newblog = await new Blog({
      title,
      slug,
      image,
      body,
    }).save();
    res.json(newblog);
  } catch (err) {
    console.log(err);
  }
};

// getallblogs
// getSingleBlog
// updateBlog
module.exports.updateblog = async (req, res) => {
  try {
    const { postId, title, image, body } = req.body;
    const editedblog = await Blog.findOneAndUpdate(
      { _id: postId },
      {
        title,
        image,
        body,
      },
      { new: true }
    ).exec();
    res.json(editedblog);
  } catch (err) {
    console.log(err);
  }
};
// deleteBlog
module.exports.deleteblog = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletepost = await Blog.findOneAndDelete({ _id: postId }).exec();
    res.json(deletepost);
  } catch (err) {
    console.log(err);
  }
};
