function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      return array
    }
    array[i] = changeValue;
   }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue;
   }
  return array
}

function findBy(array, findFn){
  var temp = findFn();
  for (var i = 0; i < array.length; i++){
    if (findFn(array[i])){
      return array[i]
    }
  }
  return null
}
