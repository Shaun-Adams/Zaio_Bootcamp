function arrayMode(array){ 
    
    for(var i = 0; i < array.length; i++) {
        if(array[Math.abs(array[i])] < 0){
            return Math.abs(array[i]);
            
        }
        else{
            array[Math.abs(array[i])] = 0 - array[Math.abs(array[i])];
        }
  }

  return -1;
    
}
