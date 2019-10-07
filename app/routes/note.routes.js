module.exports = app => {
    const notes = require('../controllers/note.controller.js');

    // create a new Note
    app.post('/notes', notes.create);

    // Retrieve all notes
    app.get('/notes', notes.findAll);

    // Retrieve a single note with noteId
    app.get('/notes/:noteId', notes.findOne);
    
    // update a note with noteId
    app.put('/notes/:notedId', notes.update);

    // delete a note with noteId
    app.delete('/notes/:noteId', notes.delete);
}