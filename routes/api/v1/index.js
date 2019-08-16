var express = require('express');
var router = express.Router();
const multer = require('multer');
var fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    }, 
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage});

router.get('/', function(req, res, next) {
    res.json({
        "welcomeMSG": "Welcome to travel bot"
    })
});

router.post('/someFileUpload', upload.single('file_upload'),  function (req, res) {
    
    if(req.file){
        console.log('file is here');
        res.send({'file status':'file uploaded successfully'});
    } else {
        console.log('no file');
    }

});


module.exports = router;