/**
 * The note class is for creating new note objects
 */
class Note {
    constructor(data){
        this.id = 1;
        this.title = data.title;
        this.text = data.text;
    }
}

module.exports = Note;