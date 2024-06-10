const multer = require("multer");
const sharp = require("sharp");

function isVideoFile(filename) {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.wmv', '.mkv', '.flv', '.webm', '.mpeg', '.mpg', '.3gp', '.m4v'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return videoExtensions.includes(extension);
}
const imageFilter = (req, file, cb) => {
  // console.log(file.mimetype.startsWith("application"));
  if (
    file.mimetype.startsWith("image") || isVideoFile(file.originalname) ||
    file.mimetype.startsWith("application")
  ) {
    cb(null, true);
  } else {
    cb("Энэ файлыг оруулах боломжгүй байна.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, __basedir + "/home/ndc-user/ayush_front_back/resources/uploads/");
    cb(null, __basedir + "/home/ndc-user/ayush_front_back/home/ndc-user/ayush_front_back/resources/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-nso-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
