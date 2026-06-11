function oddSum(arr,index=0){
     if(index === arr.length){
         return 0
     }
     if(arr[index]%2!==0){
         return arr[index]+oddSum(arr,index+1)
     }
     
     return oddSum(arr,index+1)
}

console.log(oddSum([1,2,3]))