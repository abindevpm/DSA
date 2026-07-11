function sumOdd(arr,index=0){
    if(index === arr.length){
        return 0;
    }
    
     if(arr[index]%2!==0){
         return arr[index]+sumOdd(arr,index+1)
     }
     return sumOdd(arr,index+1)
    
}

console.log(sumOdd([1,2,3,]))