function sumofArray(arr,index=0){
    if(index === arr.length){
        
     return 0
    }
     return arr[index]+sumofArray(arr,index+1)
}

 console.log(sumofArray([1,2,3,4]))