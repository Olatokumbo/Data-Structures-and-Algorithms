const sumZero = (array) =>{
    var left = 0;
    var right = array.length-1;
    while(left<right){
        let sum = array[left]+array[right];
        if(sum===0){
            return console.log([array[left], array[right]]); 
        }
        else if(sum >0){
            right--;
        }
        else{
            left++;
        }
    }
}

 sumZero([-2, 1, 0, 1, 2, 3])