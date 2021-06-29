const reqControllers = require("../controllers/reqControllers");

function routes(app) {
  //   app.get(
  //     "/posts/:postId/",

  //     reqControllers.getAllById
  //   );
  app.get("/posts/:id", reqControllers.getOnePostById);
  app.get("/posts", reqControllers.getAllPosts);
  app.get("/todos", reqControllers.getAllTodos);
  app.get("/comments", reqControllers.getAllComments);
  app.get("/users", reqControllers.getAllUsers);
  app.get("/albums", reqControllers.getAllAlbums);
  app.get("/photos", reqControllers.getAllPhotos);
}

module.exports = routes;
