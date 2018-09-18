var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error('Assertion Failed: ' + assertionToCheck + ' is not truthy')
    } else {
      console.log('success');
    }
  }
}


// var Assert


// Assert.prototype.isTrue
