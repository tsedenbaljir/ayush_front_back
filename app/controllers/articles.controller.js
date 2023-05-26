const db = require("../models");
const Articles = db.articles;
const Article_ctgr = db.article_ctgr;
const Abouts_about_ctgr = db.articles_article_ctgr;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 6;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: articles } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, articles, totalPages, currentPage };
};
// Retrieve all articless from the database.

// exports.createMenus = (req, res) => {
//   // Save abouts in the database
//   for (i = 1; i < 2440; i++) {
//     // console.log(i);
//     Abouts_about_ctgr.create({
//       articlesId: i,
//       article_ctgrId: 3,
//     }).then(() => {
//       res.send(data);
//     });
//   }
// };

// Create and Save a new articles
exports.create = (req, res) => {
  // console.log(req.body)
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
    src: req.file.filename,
  };

  // console.log(abouts);
  // Save abouts in the database
  Articles.create(articles)
    .then((data) => {
      Abouts_about_ctgr.create({
        articlesId: data.id,
        article_ctgrId: req.body.categories_id,
      }).then(() => {
        res.send(data);
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "оруулсан мэдээлэлээ дахин шалгана уу.",
      });
    });
  // // Save articles in the database
  // Articles.create(articles)
  //   .then((data) => {
  //     console.log(data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Уучлаарай оруулсан мэдээлэлээ дахин шалгана уу.",
  //     });
  //   });
};

// Retrieve all articless from the database.

exports.findAll = (req, res) => {
  Articles.findAll({
    // Add order conditions here....
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: Article_ctgr,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
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

exports.findPanigatesAll = (req, res) => {
  // console.log(req.body.search);
  const { page, size } = req.query;
  const search = req.params.Article_id;
  const { limit, offset } = getPagination(page, size);

  var id = 0;
  if (search === "nnews") {
    // console.log(id, search);
    Articles.findAndCountAll({
      // Add order conditions here....
      limit,
      offset,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Article_ctgr,
          where: {
            id: { [Op.notLike]: 0 },
          },
        },
      ],
    })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articless.",
        });
      });
  }
  if (search === "fnews") {
    Articles.findAndCountAll({
      // Add order conditions here....
      limit,
      offset,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Article_ctgr,
          where: {
            id: { [Op.like]: 2 },
          },
        },
      ],
    })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articless.",
        });
      });
  }
  if (search === "mnews") {
    Articles.findAndCountAll({
      // Add order conditions here....
      limit,
      offset,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Article_ctgr,
          where: {
            id: { [Op.like]: 1 },
          },
        },
      ],
    })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articless.",
        });
      });
  }
  if (search === "tender") {
    Articles.findAndCountAll({
      // Add order conditions here....
      limit,
      offset,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Article_ctgr,
          where: {
            id: { [Op.like]: 0 },
          },
        },
      ],
    })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articless.",
        });
      });
  }
};

// Retrieve all aboutss from the database.
exports.menuAll = (req, res) => {
  Article_ctgr.findAll({
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving aboutss.",
      });
    });
};

// Retrieve all aboutss from the database.
exports.menuArticles = (req, res) => {
  const id = req.params.Menu_id;
  if (id == 3) {
    var condition = {
      id: { [Op.notLike]: 0 },
    };
    Articles.findAll({
      // Add order conditions here....
      include: [
        {
          model: Article_ctgr,
          attributes: ["id"],
          through: {
            attributes: [],
          },
          where: condition,
        },
      ],
      limit: 6,
      order: [["createdAt", "DESC"]],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving aboutss.",
        });
      });
  } else {
    var condition = {
      id: { [Op.like]: `%${id}%` },
    };
    Articles.findAll({
      // Add order conditions here....
      include: [
        {
          model: Article_ctgr,
          attributes: ["id"],
          through: {
            attributes: [],
          },
          where: condition,
        },
      ],
      limit: 6,
      order: [["createdAt", "DESC"]],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving aboutss.",
        });
      });
  }
};

// Retrieve all articless from the database.

exports.findAllArticle = (req, res) => {
  const { page, size } = req.query;
  const search = req.params.search;

  // console.log(id, search);
  var condition = {
    title: { [Op.like]: `%${search}%` },
  };

  const { limit, offset } = getPagination(page, size);
  Articles.findAndCountAll({
    // Add order conditions here....
    limit,
    offset,
    order: [["createdAt", "DESC"]],
    where: condition,
    include: [
      {
        model: Article_ctgr,
      },
    ],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articless.",
      });
    });
};
// Retrieve all articless from the database.

exports.carousel = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Articles.findAll({
    // Add order conditions here....
    include: [
      {
        model: Article_ctgr,
        attributes: ["id"],
        through: {
          attributes: [],
        },
        where: { id: { [Op.notLike]: 0 } },
      },
    ],
    limit: 5,
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

// last news
exports.last = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Articles.findAll({
    limit: 1,
    order: [["createdAt", "DESC"]],
    where: condition,
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

// cardnews д зориоулж өргөтгөв news
exports.cardnews = (req, res) => {
  var id = req.params.id;
  if (id == 1) {
    Articles.findAll({
      include: [
        {
          model: Article_ctgr,
          attributes: ["id"],
          through: {
            attributes: [],
          },
          where: { id: { [Op.notLike]: 0 } },
        },
      ],
      limit: 6,
      offset: 5,
      order: [["createdAt", "DESC"]],
    })
      .then((data) => {
        res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articless.",
        });
      });
  }
  if (id == 2) {
    Articles.findAll({
      include: [
        {
          model: Article_ctgr,
          attributes: ["id"],
          through: {
            attributes: [],
          },
          where: { id: { [Op.notLike]: 0 } },
        },
      ],
      limit: 7,
      offset: 6,
      order: [["createdAt", "DESC"]],
    })
      .then((data) => {
        res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articless.",
        });
      });
  }
};

// Retrieve all articless from the database.

exports.bottom = (req, res) => {
  Articles.findAll({
    // Add order conditions here....
    limit: 3,
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
  Articles.findByPk(id, {
    // Add order conditions here....
    include: [
      {
        model: Article_ctgr,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  })
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

// Update a articles by the id in the request
exports.updatewithImage = (req, res) => {
  const id = req.params.id;
  const articlesUpdate = {
    title: req.body.title,
    data: req.body.data,
    src: req.file.filename,
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
