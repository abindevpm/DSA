function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    
    let mid = Math.floor(arr.length/2)
    
     let left = mergeSort(arr.slice(0,mid))
     let right = mergeSort(arr.slice(mid))
     
      return merge(left,right)
    
}

 function merge(left,right){
     
     let result = []
     let i = 0;
     let j = 0;
     
     while(i<left.length && j<right.length){
         if(left[i]<right[j]){
             result.push(left[i])
              i++
         }else{
             result.push(right[j])
              j++
         }
     }
     
     while(i<left.length){
         result.push(left[i])
          i++
     }
     
     while(j<right.length){
         result.push(right[j])
          j++
     }
     
     return result
     
 }
 
 
 const arr = [4,3,2,1]
 
  console.log(mergeSort(arr))



  //  mergeSort in array of Object

  function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }

  let mid = Math.floor(arr.length/2)

  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))

   return merge(left,right)

}

 function merge(left,right){

 let result = []

  let i = 0;
  let j = 0;

  while(i<left.length && j<right.length){
    if(left[i].age<right[j].age){
        result.push(left[i])
        i++
    }else{
        result.push(right[j])
        j++
    }
  }
  while(i<left.length){
    result.push(left[i])
    i++
  }

while(j<right.length){
    result.push(right[j])
     j++
}


return result


 }


let arr = [
    {name: "Aju", age: 25},
    {name: "Binu", age: 20},
    {name: "Cinu", age: 30},
    {name: "Dinu", age: 22}
]


console.log(mergeSort(arr))



 