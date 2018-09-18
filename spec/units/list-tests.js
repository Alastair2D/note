(function (exports) {

  function addNoteTest() {


    var list = new List()
    list.add('new note')
    assert.isTrue(list.notes.includes('new note'))    // assert.include(list.all()) === "my first note"
    }


    function createAndStoreTest() {
    var n1 = new Note("My first note");
    var l1 = new List();
    l1.createAndStore(n1);
    assert.isTrue((l1.notes) === "My first note");
    }





    addNoteTest();
    createAndStoreTest();




  }) (this);
