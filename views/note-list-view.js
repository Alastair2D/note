(function (exports) {
  
  function ListView (list) {

  ListView.prototype.buildOutput = function() {
    return `<h3>${list}</h3>`
  }
}


  exports.ListView = ListView
})(this)