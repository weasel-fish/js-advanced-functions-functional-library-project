const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let tempColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      

      for(let i = 0; i < tempColl.length; i++) {
        callback(tempColl[i], i, tempColl)
      }
      return collection
    },

    map: function(collection, callback) {
      let tempColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newColl = []

      for(let i = 0; i < tempColl.length; i++) {
        newColl.push(callback(tempColl[i], i, tempColl))
      }
      return newColl
    },

    reduce: function(collection, callback, acc) {
      let tempColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let tempAcc


      if(typeof acc === 'undefined'){
        tempAcc = tempColl[0]
        for(let i = 1; i < tempColl.length; i++) {
          tempAcc = callback(tempAcc, tempColl[i], tempColl)
        }
      } else {
        tempAcc = acc
        for(let i = 0; i < tempColl.length; i++) {
          tempAcc = callback(tempAcc, tempColl[i], tempColl)
        }
      }

      return tempAcc
    },

    find: function(collection, predicate) {
      let tempColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for(let i = 0; i < tempColl.length; i++) {
        if(predicate(tempColl[i])) {
          return tempColl[i]
        }
      }
    },
    
    filter: function(collection, predicate) {
      let tempColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newColl = []

      for(let i = 0; i < tempColl.length; i++) {
        if(predicate(tempColl[i])) {
          newColl.push(tempColl[i])
        }
      }
      return newColl
    },

    size: function(collection) {
      let tempColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      return tempColl.length
    },
    
    first: function(array, n = 1) {
      let tempColl = array.slice()
      
      if(n > 1) {
        let newColl = []
        for(let i = 0; i < n; i++) {
          newColl.push(tempColl[i])
        }
        return newColl
      } else {
        return tempColl[0]
      }

    },
    
    last: function(array, n = false) {
      return (n) ? array.slice(array.length-n) : array[array.length-1]
    },
    
    compact: function(array) {
      let newArr = []

      for(let i = 0; i < array.length; i++) {
        if(array[i]) {
          newArr.push(array[i])
        }
      }

      return newArr
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      
      newArray.sort((a, b) => callback(a) - callback(b))
      
      return newArray
    },

    functions: function() {

    },

    functions: function() {

    },
    


  }
})()

//fi.libraryMethod()
fi.find({one: 1, two: 2, three: 3, four: 4})