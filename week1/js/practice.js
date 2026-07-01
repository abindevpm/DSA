let a = [10,20,40,50]

let result = []

let index = 2
let  value = 30


for(let i = 0;i<a.length;i++){
    if(i === index){
        result.push(30)
    }
    result.push(a[i])
}

console.log(result)


// reversing a string function 

function reverse(str){
    return str.split("").reverse("").join("")
}

console.log(reverse("hell"))


//   frst letter capitaizing

let a = ["hello", "world"]

 let b = a.map((num)=>num[0].toUpperCase()+num.slice(1))
 
 console.log(b)

 // remove Odd without inbuilt || array

    let a = [1,2,3,4,5,6]

 function removeOdd(arr){
     
      let j = 0;
     for(let i = 0;i<arr.length;i++){
         if(arr[i]%2==0){
             arr[j] = arr[i]
             j++
         }
     }
     arr.length = j
     return arr
    
 }
 
 console.log(removeOdd(a))