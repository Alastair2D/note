(function (exports) {

  // Array.prototype.first = function() {
  //   return this[0];
  // }

  function List() {
    this.notes = []
  }

  List.prototype.add = function(note) {
    return this.notes.push(note)
  }

  List.prototype.prettyPrint = function() {
    this.notes.forEach( function(note) {
      console.log(note);
    })
  }

  List.prototype.createAndStore = function(string) {
    var n1 = new Note(string);
    this.add(n1);
    return this.notes;
  }

  exports.List = List

})(this)

  (function (exports) {
    function Note(string) {
      this.text = string;
    };

    Note.prototype.textReturn = function () {
      return this.text;
    };

    exports.Note = Note;

  })(this);