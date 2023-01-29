const router = require('express').Router();
const path = require('path');

//Handles the /notes route and responds with the notes.html file
router.get('/',(req,res) => {
    try{
        res.status(200).sendFile(path.join(__dirname, '..//public/notes.html'))
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router