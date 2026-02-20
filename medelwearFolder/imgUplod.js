const multer  = require('multer')

// ================ Multer storage============================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "UploaderFolder/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
    // cb(null, Date.now() + '-' + file.originalname )
  }
})

const upload = multer({ storage: storage })

module.exports = upload
// ====================Multer storage========================