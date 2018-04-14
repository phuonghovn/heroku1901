var multer  = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public'),
    filename: (req, file, cb) => {
        const lastDotIndex = file.originalname.lastIndexOf('.');
        const extension = file.originalname.substring(lastDotIndex);
        cb(null, Date.now() + extension); 
    }
})
// var upload = multer({ dest: 'public/' });
var upload = multer({ storage });

module.exports = { upload };