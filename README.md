# Blog API

This API allows users to create, retrieve, and view blog posts. The API uses MongoDB to store the blog posts.

# Endpoints http://localhost:3001/api/
### POST /posts

This endpoint allows users to create a new blog post via a POST request. Each blog post should have a title and content. The endpoint validates that both title and content are present before creating the post.

### GET /posts

This endpoint allows users to retrieve all blog posts via a GET request.

### GET /posts/:id

This endpoint allows users to retrieve a single blog post by its ID via a GET request.


## Technologies Used

    Node.js
    Express.js
    MongoDB


## Getting Started

# Clone the repository:
git clone https://github.com/ShanifKn/Blogger.git

# Install dependencies:

npm install

 # Start the server:
 
npm start ||
npm run dev 

 Use the API with your preferred client (e.g., Postman, curl).
