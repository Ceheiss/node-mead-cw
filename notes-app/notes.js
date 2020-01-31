const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red.inverse('Note title taken!'));
  } else {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('new note added'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.title !== title);
  if (updatedNotes.length === notes.length){
    console.log(chalk.red.inverse(`Title "${title}" not found`));
    return saveNotes(notes);
  } else {
    console.log(chalk.green.inverse(`Title "${title}" was removed`));
    return saveNotes(updatedNotes);
  }
}

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.red.inverse(":( You don't have any notes yet"));
  } else {
    console.log(chalk.blue.inverse("Your notes:"));
    notes.forEach((note, i) => console.log(chalk.yellow(`${i + 1}. ${note.title}`)));
  }
}

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);
  if (noteToRead) {
    console.log(chalk.inverse(noteToRead.title));
    console.log(chalk.green(noteToRead.body));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []
  }
}

module.exports = { 
  addNote,
  removeNote,
  listNotes,
  readNote
}