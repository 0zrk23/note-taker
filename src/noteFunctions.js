// const db = require('../db/db.json');
const fs = require('fs');
const Note = require('../lib/note');

/**
 * This function returns all of the notes in the db
 * @returns {array of objects} The notes in the database
 */
async function getNotes(){
    let notes = await JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    return notes;
}

/**
 * This function saves a new note to the db
 * @param {object} newNoteData The new data for the note
 */
async function saveNote (newNoteData) {
    //reads database
    let notes = await JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    //check if there are no notes
    if(!notes.length){
        notes = [];
    }
    const newNote = new Note(newNoteData)
    notes.push(newNote);
    //saves the notes to the database
    await fs.writeFileSync('./db/db.json',JSON.stringify(await sequence(notes)),'utf8');
}

/**
 * This function deletes a note based on its id
 * @param {number} id The id of the note you want to delte
 */
async function deleteNote(id){
    //reads database
    let notes = await JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    notes.splice(id - 1,1);
    //saves the notes to the database
    await fs.writeFileSync('./db/db.json',JSON.stringify(await sequence(notes)),'utf8');
}

/**
 * This function sequences the notes based on order
 * @param {array: objects} notes The array containing the notes objects
 * @returns {array: objects} The array with the notes sequenced
 */
async function sequence(notes){
    for(let i = 0; i < notes.length; i++){
        notes[i].id = i + 1;
    }
    return notes;
}

module.exports = {getNotes, saveNote, deleteNote}