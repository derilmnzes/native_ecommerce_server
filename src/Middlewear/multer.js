const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/images');
  },
  filename: function (req, file, cb) {
    console.log(file,'file')
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '-' + uuidv4();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });


module.exports = upload