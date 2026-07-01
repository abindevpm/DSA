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

 function removeOdd(arr){
    
     let j = 0;
    for(let i = 0;i<a.length;i++){
         if(a[i]%2==0){
             a[j] = a[i]
             j++
         }
         
    }
    a.length = j
    return arr
    
    
}

console.log(removeOdd(a))