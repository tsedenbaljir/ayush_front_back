module.exports = (app) => {
  const { authJwt } = require("../middleware");

  const articles = require("../controllers/articles.controller.js");
  const upload = require("../middleware/upload");
  const uploadCkEditor = require("../middleware/uploadCkEditor");

  var router = require("express").Router();
  var routerRole = require("express").Router();
  var check = require("express").Router();

  //  бидний тухай нэмэх хэсэг
  check.get("/user", articles.findAll);

  router.post("/uploads", uploadCkEditor.single("upload"), (req, res) => {
    console.log(req.file.mimetype);
    if (req.file) {
      if (req.file.mimetype.startsWith("image")) {
        res.send(
          "<img width='100%' heigth='100%' src='https://uvs-emneleg.herokuapp.com/api/articles/imagesCk/" +
            req.file.filename +
            "'/>"
        );
      }
      if (req.file.mimetype.startsWith("application")) {
        res.send(
          "<a href='https://uvs-emneleg.herokuapp.com/api/articles/imagesCk/" +
            req.file.filename +
            "'>Татах</a>"
        );
      }
    } else {
      res.status(200).send("Энэ файлыг оруулах боломжгүй байна.");
    }
  });
  // зураг буцаах хэсэг энийг ашиглаж зургийг нийтлэлд хэвлэнэ1
  router.get("/imagesCk/:name", (req, res) => {
    res.sendFile(`/resources/uploads/${req.params.name}`, {
      root: __basedir,
    });
  });

  // зураг буцаах хэсэг энийг ашиглаж зургийг нийтлэлд хэвлэнэ2
  router.get("/images/:name", (req, res) => {
    res.sendFile(`/resources/uploads/${req.params.name}`, {
      root: __basedir,
    });
  });

  // Бүх нийтлэлийг авах хэсэг
  // router.get("/createMenus", articles.createMenus);

  // Бүх нийтлэлийг авах хэсэг
  router.get("/", articles.findAll);

  // Бүх нийтлэлийг авах хэсэг
  router.get("/panigates/:Article_id", articles.findPanigatesAll);

  // Бүх нийтлэлийг цэсийг авах хэсэг
  router.get("/categories", articles.menuAll);

  // 6н нийтлэлийг цэсний id-гаар авах хэсэг
  router.get("/categories/:Menu_id", articles.menuArticles);

  // Бүх нийтлэлийг авах хэсэг
  router.get("/search/:search", articles.findAllArticle);

  // Хамгийн сүүлчийн нийтлэлийг гаргаж авана
  router.get("/last", articles.last);

  // Карт нийтлэлийн хэсэг
  router.get("/cardnews/:id", articles.cardnews);

  // carousel д харуулах нийтлэлийг авч байгаа хэсэг
  router.get("/carousel", articles.carousel);

  // Хамгийн доод талын 3-н нийтлэлийг авч байгаа хэсэг
  router.get("/bottomarticles", articles.bottom);

  // Мэдээг id гаар авах хэсэг
  router.get("/:id", articles.findOne);

  // Нийтлэл нэмэх хэсэг
  routerRole.post("/", upload.single("file"), articles.create);

  // Засвар хийх хэсэг
  routerRole.put("/:id", upload.single("file"), articles.update);
  routerRole.put(
    "/withImage/:id",
    upload.single("file"),
    articles.updatewithImage
  );

  // Мэдээг устгах хэсэг
  routerRole.delete("/delete/:id", articles.delete);

  // Дээрх бүх зүйлсийг авч ашиглана
  app.use("/api/articles", router);
  app.use(
    "/api/articles",
    [authJwt.verifyToken],
    routerRole
  );
  app.use(
    "/api/articles/check",
    [authJwt.verifyToken
      // , authJwt.isArticle
    ],
    check
  );
};
