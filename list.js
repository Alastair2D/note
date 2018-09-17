(function (exports) {

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

  exports.List = List

})(this)


