const router = require('express').Router();
// const router = express.Router();
const noteRoutes = require('./noteRoutes');

//use branching routes
router.use('/notes', noteRoutes);

module.exports = router;