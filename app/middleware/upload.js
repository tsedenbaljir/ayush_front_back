const multer = require("multer");
const sharp = require("sharp");

const imageFilter = (req, file, cb) => {
  // console.log(file.mimetype.startsWith("application"));
  if (
    file.mimetype.startsWith("image") ||
    file.mimetype.startsWith("application")
  ) {
    cb(null, true);
  } else {
    cb("Энэ файлыг оруулах боломжгүй байна.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-nso-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
