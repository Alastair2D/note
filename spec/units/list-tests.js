(function (exports) {

  function listTest1() {
    //__PSEUDO STEPS__
    // 1. Add a new note to the list
    // 2. Assert that list contains new note
    // 3. Expect truthy

    var list = new List() 
    list.add('new note')
    assert.isTrue(list.all().includes('new note'))    // assert.include(list.all()) === "my first note"
    }

    listTest1() 
  }) (this);

