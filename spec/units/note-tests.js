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
    assert.isTrue(noteModel.text === "Test note")
  };

  testNoteInstantiation();

})(this);