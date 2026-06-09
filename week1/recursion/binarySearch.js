function binarySearch(arr,target,left = 0,right = arr.length-1){
    if(left>right){
        return -1
    }

     let mid = Math.floor((left+right)/2)

      if(arr[mid] === target){
        return mid
      }
      if(target>arr[mid]){
        return binarySearch(arr,target,mid+1,right)
      }else{
        return binarySearch(arr,target,left,mid-1)
      }

}

console.log(binarySearch([1,2,3,4],3))