const Posts = require("../models/Posts");
const Albums = require("../models/Albums");
const Comments = require("../models/Comments");
const Todos = require("../models/Todos");
const Users = require("../models/Users");
const Photos = require("../models/Photos");

class reqControllers {
  getAllById = async (req, res, next) => {
    try {
      if (req.params.route === comments) {
        // let Route = req.params.route;
        Comments.find({}).then((comment) => res.json(comment));
      }
    } catch (error) {
      next();
    }
  };
  getAllPosts = async (req, res, next) => {
    try {
      Posts.find({}).then((post) => res.json(post));
    } catch (error) {
      next();
    }
  };
  getAllTodos = async (req, res, next) => {
    try {
      Todos.find({}).then((todo) => res.json(todo));
    } catch (error) {
      next();
    }
  };
  getAllComments = async (req, res, next) => {
    try {
      Comments.find({}).then((comment) => res.json(comment));
    } catch (error) {
      next();
    }
  };
  getAllAlbums = async (req, res, next) => {
    try {
      Albums.find({}).then((album) => res.json(album));
    } catch (error) {
      next();
    }
  };
  getAllUsers = async (req, res, next) => {
    try {
      Users.find({}).then((user) => res.json(user));
    } catch (error) {
      next();
    }
  };
  getAllPhotos = async (req, res, next) => {
    try {
      Photos.find({}).then((photo) => res.json(photo));
    } catch (error) {
      next();
    }
  };
  getOnePostById = async (req, res, next) => {
    try {
      Posts.findOne({ id: req.params.id }).then((post) => res.json(post));
    } catch (error) {
      next();
    }
  };
}

module.exports = new reqControllers();
