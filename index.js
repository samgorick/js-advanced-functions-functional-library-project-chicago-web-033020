const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCol = Object.values(collection)
      for (let i=0; i < newCol.length; i++){
        callback(newCol[i])
      }
      return collection
    },

    map: function(collection, callback) {

      collection = Object.values(collection)

      const newCol = []

      for (let i=0; i < collection.length; i++){
        newCol.push(callback(collection[i]))
      }
      return newCol
    },

    reduce: function(collection, callback, acc) {
      let newCol = Object.values(collection);
      //if starting value not supplied, then remove the first element and assign it to acc. That element is removed from collection
      if(isNaN(acc)){
        acc = newCol.shift()
      }
      for(let i=0; i < newCol.length; i++){
        acc = callback(acc, newCol[i], newCol)
      }
      return acc
    },

    find: function(collection, predicate){
      for (let i=0; i < collection.length; i++){
        if(predicate(collection[i])) return collection[i]
      }
    },

    filter: function(collection, predicate){
      const filtered = []
      for (let i=0; i < collection.length; i++){
        if(predicate(collection[i])){
          filtered.push(collection[i])
        }
      }
      return filtered
    },

    size: function(collection){
      let newCol = Object.values(collection);
      return newCol.length;
    },

    first: function(array, n=1){
      return n === 1 ? array[0] : array.slice(0, n)
    },

    last: function(array, n=1){
      const arrLength = array.length 
      return n === 1 ? array[(arrLength - 1)] : array.slice((arrLength - n), arrLength)
    },

    compact: function(array){
      const filtered = []
      for (let i=0; i < array.length; i++){
        if(array[i]){
          filtered.push(array[i])
        }
      }
      return filtered
    },

    sortBy: function(array, callback){
      const newArr = [...array]
      for (let i=0; i < newArr.length; i++){
        return newArr.sort(function(a, b){
          return callback(a) - callback(b)
        })
      }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
