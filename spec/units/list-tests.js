(function (exports) {

  function addNoteTest() {

    var list = new List()
    list.add('new note')
    assert.isTrue(list.notes.includes('new note'))    // assert.include(list.all()) === "my first note"
    }

    function createAndStoreTest() {

    var l1 = new List();
    l1.createAndStore(Note("My first note"));


    console.log(l1.notes[0]);
    console.log(l1.notes[0].textReturn());
    // assert.isTrue((l1.notes.first()) === ("My first note"));
    assert.isTrue(l1.notes[0].textReturn() !== "My first note");

    }

    addNoteTest();
    createAndStoreTest();

  }) (this);
