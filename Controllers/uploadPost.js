import postModel from "../Models/Post.js";

export const postPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new postModel({
      title,
      content,
    });
    const validation = newPost.validateSync();
    if (validation) return res.status(400).json({ msg: "All field must be required" });

    await newPost.save();
    res.status(201).json({ msg: "New post is uploaded successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

