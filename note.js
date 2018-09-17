// (function(exports) {
//   function Note() {
//     console.log('hello')
//   }

//   exports.Note = Note 
// })(this) 

(function (exports) {
  function NoteModel(string) {
    this.text = string;
  };

  NoteModel.prototype.textReturn = function () {
    return this.text;
  };

  exports.NoteModel = NoteModel;

})(this);