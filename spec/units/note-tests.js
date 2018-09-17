(function (exports) {

  function testNoteInstantiation() {
    var note = new Note("Test note");
    assert.isTrue(note.textReturn() === "Test note")
  };

  testNoteInstantiation();

})(this);