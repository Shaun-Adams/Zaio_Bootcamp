function FirstDuplicate(array){
    
  var dictionary = {};

  for(var i = 0; i < array.length; i++) {
        if(dictionary[arr[i]] !== undefined){
             return array[i];
        }
        else{
            dictionary[arr[i]] = i;
        }
  }

  return -1;

}
