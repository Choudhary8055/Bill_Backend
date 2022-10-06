const router = require('express').Router();
const multer  = require('multer');
const {uploadCsv}= require('../Controller/fileController');


const upload = multer({ dest: 'uploads/csv/' });

router.post('/upload-csv', upload.single('file'), uploadCsv);

module.exports = router;
