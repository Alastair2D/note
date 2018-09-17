(function (exports) {

  function testNoteInstantiation() {
    var note = new Note("Test note");
    assert.isTrue(note.text === "Test note")
  };

  testNoteInstantiation();

})(this);