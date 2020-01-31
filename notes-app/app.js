const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./notes.js");

yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "title of note to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    removeNote(argv.title);
  }
});

// Create the read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "title of the note to be read",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readNote(argv.title)
  }
});

// Create a list command
yargs.command({
  command: "list",
  describe: "list notes",
  handler () {
    listNotes();
  }
});

yargs.parse();

// npm modules used: chalk, validator