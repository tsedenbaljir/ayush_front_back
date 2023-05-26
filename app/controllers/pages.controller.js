const db = require("../models");
const Articles = db.pages;
const Op = db.Sequelize.Op;


// Create and Save a new articles
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Хоосон хадгалах боломжгүй байна!",
    });
    return;
  }

  const articles = {
    title: req.body.title,
    data: req.body.data,
  };
  // Save abouts in the database
  Articles.create(articles)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "оруулсан мэдээлэлээ дахин шалгана уу.",
      });
    });
};

// Retrieve all articless from the database.

exports.findAll = (req, res) => {
  Articles.findAll({
    // Add order conditions here....
    order: [["createdAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articless.",
      });
    });
};

// Find a single articles with an id
exports.findOne = (req, res) => {
  var id = req.params.id;
  if (id < 0) {
    id = 1;
  }
  Articles.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Ийм мэдээ байхгүй байна.",
      });
    });
};

// Update a articles by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const articlesUpdate = {
    title: req.body.title,
    data: req.body.data,
  };

  Articles.update(articlesUpdate, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send("");
      } else {
        res.status(200).send({
          message: `Cannot update articles with id=${id}. Maybe articles was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating articles with id=" + id,
      });
    });
};

// Delete a articles with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Articles.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "articles was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete articles with id=${id}. Maybe articles was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete articles with id=" + id,
      });
    });
};