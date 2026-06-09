function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1
    
    let mid = Math.floor((left+right)/2)
    
     if(arr[mid] === target){
         return mid
     }else{
         if(target>arr[mid]){
             left = mid-1
         }
         right = mid+1
     }
     return -1
}

 console.log(binarySearch([1,2,3,4,5],33))