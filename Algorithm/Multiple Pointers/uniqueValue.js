const uniqueValue = (array) =>{
    var left = 0;
    var right = 1;
    var counter = 0;
    while(right < array.length){
        if(array[left] !== array[right]){
            counter++;
            left = right;
            right++;
        }
        else{
            right++;
        }
    }
    return console.log(counter+1);
} 

uniqueValue([1,1, 2, 3,5, 7]);