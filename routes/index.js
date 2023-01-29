const router = require('express').Router();
const path = require('path');
// const router = express.Router();
const apiRoutes = require('./api');
const noteRoutes = require('./noteRoutes');

//use branching routes
router.use('/api', apiRoutes);
router.use('/notes', noteRoutes);

/** handles the home route send the 
 * index.html file
 */
router.get('/', async (req,res) => {
    try{
        console.log(path.join(__dirname, '../public/index.html'))
        res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;