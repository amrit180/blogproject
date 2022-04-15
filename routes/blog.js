const { createblog, updateblog, deleteblog } = require("../controllers/blog");

const router = require("express").Router();

router.post("/create-blog", createblog);
router.put("/update-blog", updateblog);
router.delete("/delete-blog/:postId", deleteblog);

module.exports = router;
