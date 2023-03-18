import express from "express";
import { postPost } from "../Controllers/uploadPost.js";
import { viewPost, viewPosts } from "../Controllers/viewPosts.js";

const router = express.Router();

//* ----- GET request ------*//

router.get("/", viewPosts); //* fetch post *//

router.get("/:id", viewPost); //* fetch single post *//

//* ----- POST request ------*//

router.post("/", postPost); //* post a blog *//

export default router;
