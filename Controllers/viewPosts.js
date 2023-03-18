import postModel from "../Models/Post.js";

export const viewPosts = async (req, res) => {
  try {
    const post = await postModel.find();

    if (post.length === 0) return res.status(200).json({ message: "No post are available yet" });

    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const viewPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postModel.findById(id);

    if (!post) return res.status(404).json({ message: "No post found " });

    return res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};
