module.exports = (app) => {
  const { authJwt } = require("../middleware");

  const articles = require("../controllers/pages.controller.js");
  const upload = require("../middleware/upload");

  var router = require("express").Router();
  var routerRole = require("express").Router();

  // Бүх нийтлэлийг авах хэсэг
  router.get("/", articles.findAll);

  // Бүх нийтлэлийг авах хэсэг
  // router.get("/panigates/:Article_id", articles.findPanigatesAll);

  // Бүх нийтлэлийг цэсийг авах хэсэг
  // router.get("/categories", articles.menuAll);

  // 6н нийтлэлийг цэсний id-гаар авах хэсэг
  // router.get("/categories/:Menu_id", articles.menuArticles);

  // Бүх нийтлэлийг авах хэсэг
  // router.get("/search/:search", articles.findAllArticle);

  // Хамгийн сүүлчийн нийтлэлийг гаргаж авана
  // router.get("/last", articles.last);

  // Карт нийтлэлийн хэсэг
  // router.get("/cardnews/:id", articles.cardnews);

  // carousel д харуулах нийтлэлийг авч байгаа хэсэг
  // router.get("/carousel", articles.carousel);

  // Хамгийн доод талын 3-н нийтлэлийг авч байгаа хэсэг
  // router.get("/bottomarticles", articles.bottom);

  // Мэдээг id гаар авах хэсэг
  router.get("/:id", articles.findOne);

  // Нийтлэл нэмэх хэсэг
  routerRole.post("/", upload.single("file"), articles.create);

  // Засвар хийх хэсэг
  routerRole.put("/:id", upload.single("file"), articles.update);
  // Мэдээг устгах хэсэг
  routerRole.delete("/delete/:id", articles.delete);

  // Дээрх бүх зүйлсийг авч ашиглана
  app.use("/api/pages", router);
  app.use(
    "/api/pages",
    [authJwt.verifyToken],
    routerRole
  );
};
