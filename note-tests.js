// import { Note } from './note.js'

// (function(exports) {
//   function noteTest1() {
//     var note = new Note()
//     if (!note) {
//     throw new Error('no note thing exists, this means Note is undefined')
//     }
//   }
//   noteTest1()
//   })(this)

(function (exports) {

  function testNoteInstantiation() {
    var noteModel = new NoteModel("Test note");

    if (noteModel.textReturn() !== "Test note") {
      throw new Error("Note not instantiated correctly")
    } else { console.log("testNoteInstantiation passed") }

  };

  testNoteInstantiation();

})(this);