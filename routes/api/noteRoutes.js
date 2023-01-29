const router = require('express').Router();
const {saveNote,getNotes,deleteNote} = require('../../src/noteFunctions');

/**
 * This handles the api/notes get request
 * it wll respond with the array of notes
 * from the database
 */
router.get('/', async (req,res) => {
    try {
        //get the notes from the database
        const notes = await getNotes();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json(err);
    }   
})

/**
 * This handles the post request for
 * api/notes. it will respond with a message
 * stating the note was saved
 */
router.post('/',async (req,res) => {
    try {
        //checks if there is a title or text, not necessary though
        if(!req.body.title || !req.body.text){
            res.status(400).json({message: "Request needs to have a title and text properties"})
            return;
        }
        //save the note to the database
        await saveNote(req.body);
        res.status(200).json({message: 'Successfully saved note!'})
    } catch (err) {
        res.status(500).json(err);
    }
})


/**
 * This handles the delete request for 
 * api/notes/:id (id being the id of the note to delete)
 * it will respond with a message stating that the note
 * was successfully deleted
 */
router.delete('/:id', async (req,res) => {
    try {
        if(!req.params.id){
            res.status(400).json({message: "Request needs an id property"})
            return;
        }
        //delete the note from the database
        await deleteNote(req.params.id);
        res.setMaxListeners(200).json({message: 'Successfully deleted note!'})
    } catch (err) {
        res.status(404).json(err);
    }
})

module.exports = router;