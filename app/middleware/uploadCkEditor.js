const multer = require("multer");

function isVideoFile(filename) {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.wmv', '.mkv', '.flv', '.webm', '.mpeg', '.mpg', '.3gp', '.m4v'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return videoExtensions.includes(extension);
}
const imageFilter = (req, upload, cb) => {
  // console.log('app',upload.mimetype.startsWith("application"));
  // console.log('image',upload.mimetype.startsWith("image"));
  if (
    upload.mimetype.startsWith("image") || isVideoFile(upload.originalname) ||
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
