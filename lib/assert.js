var assert = { 
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error('Assertion Failed: ' + assertionToCheck + ' is not truthy')
    }
  }
}


// var Assert 


// Assert.prototype.isTrue