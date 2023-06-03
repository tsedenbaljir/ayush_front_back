const multer = require("multer");

  const imageFilter = (req, upload, cb) => {
    // console.log('app',upload.mimetype.startsWith("application"));
    // console.log('image',upload.mimetype.startsWith("image"));
    if (
    upload.mimetype.startsWith("image") ||
    upload.mimetype.startsWith("application")
  ) {
    cb(null, true);
  } else {
    cb("Энэ файлыг оруулах боломжгүй байна.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, upload, cb) => {
    cb(null, __basedir + "/resources/uploads/");
  },
  filename: (req, upload, cb) => {
    cb(null, `${Date.now()}-nso-${upload.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
