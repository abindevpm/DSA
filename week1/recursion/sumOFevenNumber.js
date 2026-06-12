function sumofEven(arr,index=0){
    if(index === arr.length){
        return 0
    }
    if(arr[index]%2==0){
        return arr[index]+sumofEven(arr,index+1)
    }
    return sumofEven(arr,index+1)
}

console.log(sumofEven([1,2,3,4,8,]))