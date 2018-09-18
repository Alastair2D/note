//__INTRPOLATE DATA INTO STATIC HTML___

(function (exports) {

  function viewAllNotesAsHTML() {
    var n1 = new Note('this is a note')
    var l1 = new List()
    l1.add(n1)

    var lv1 = new ListView(l1)
  
  
    console.log(n1)
    console.log(l1)
    console.log(lv1)

    // assert return value of buildOutput equals`<h3>${list}</h3>`
  }
  

  viewAllNotesAsHTML();
})(this);

