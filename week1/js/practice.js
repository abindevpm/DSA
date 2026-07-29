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


 //  removing Duplicates without inbuit and extra array

 function removeDup(arr){
    
     for(let i = 0;i<arr.length;i++){
          for(let j = i+1;j<arr.length;j++){
               if(arr[i] === arr[j]){
                   for(let k = j;k<arr.length-1;k++){
                        arr[k] = arr[k+1]
                   }
                   arr.length--
                   j--
               }
          }
     }
     return arr
    
}

console.log(removeDup([1,2,3,1,2,3]))



// count uppercase characters in array of strings

let a = ["Redmi","realme",-1,2,"Oppo",10,"jio"]

let count = 0;

for(let i = 0;i<a.length;i++){
    if(typeof a[i] === "string"){
        
        for(let j=0;j<a[i].length;j++){
            if(a[i][j]>="A" && a[i][j]<="Z"){
                count++
            }
        }
        
        
    }
}

console.log(count)


//  finding common elements in 2 arrays

let a = [1,2,3]
let b = [3,4,5]


for(let i = 0;i<a.length;i++){
    for(let j = 0;j<b.length;j++){
        if(a[i] === b[j]){
            console.log(a[i])
        }
    }
}


//  find missing number in an array 

let a = [1,3,4,6]

 let expect = 1
 
 for(let i = 0;i<a.length;i++){
     while(a[i]!==expect){
         console.log(expect)
         expect++
     }
     expect++
 }


 // finding first Non Repeating character in a string

 let a = "abcdabce"

 let freq = {};

for(let i = 0;i<a.length;i++){
    let item = a[i]
    freq[item] = (freq[item] || 0)+1
}


for(let i = 0;i<a.length;i++){
    if(freq[a[i]] === 1){
        console.log(a[i])
        break
    }
}

// second Non Repeating Character in a string 

 let a = "abcdabce"

 let freq = {}
 
 for(let i = 0;i<a.length;i++){
     let item = a[i]
     freq[item] = (freq[item] || 0)+1
 }
 
 let count = 0
 
  for(let i = 0;i<a.length;i++){
      if(freq[a[i]] === 1){
          count++
          
          
          if(count === 2){
              console.log(a[i])
              break
          }
          
          
      }
  }
  

  // Finding Last NON Repeating Character in a string

  let a = "abcdabce";

 let freq = {}
 
  for(let i = 0;i<a.length;i++){
      let item = a[i]
      freq[item] = (freq[item] || 0)+1 
  }
  
  for(let i = a.length-1;i>=0;i--){
      if(freq[a[i]] === 1){
          console.log(a[i])
          break
      }
  }


  // Replacing NON repeating character  with another character

  let a = "abcdabce"

 let freq = {};
 
 let result = ''

 for(let i = 0;i<a.length;i++){
     let item = a[i]
     freq[item] = (freq[item] || 0)+1
 }
 
for(let i = 0;i<a.length;i++){
    if(freq[a[i]] === 1){
        result+="0"
    }else{
        result+=a[i]
    }
}

console.log(result)

// Removing NON repeating character in a string

let a = "abcdabce"

 let freq = {};
 let result = ''
 
 for(let i = 0;i<a.length;i++){
     let item = a[i]
     freq[item] = (freq[item] || 0)+1
 }
 
 for(let i = 0;i<a.length;i++){
     if(freq[a[i]]>1){
         result+=a[i]
     }
 }
 
 console.log(result)


 // Finding the Max Occurence Elements in an arrary


let arr = [1,1,1,1,1,1,2,3,3,3,4,4,4]

let freq = {}

let max = 0;
 let maxElement;
 
  for(let i = 0;i<arr.length;i++){
       let item = arr[i]
       
       freq[item] = (freq[item] || 0)+1   
  }
  
   for(let i in freq){
       if(freq[i]>max){
            max = freq[i]
            maxElement = i
       }
   }
   
   console.log(maxElement)

   // Remove First NON repeating value in string

   let a = "abcdabce"

 let freq = {};
 
 let result = ""
 
 for(let i = 0;i<a.length;i++){
     let item = a[i]
     freq[item] = (freq[item] || 0)+1
 }
 
  let count = 0
 
  for(let i = 0;i<a.length;i++){
      if(freq[a[i]] === 1){
          count++
          
          if(count === 1){
              continue
          }
          
          
      }
      result+=a[i]
  }
  
  console.log(result)


  //  Move all 0 to the end of the array

  let a = [1, 2, 0, 3, 4, 0];

let j = 0;

for(let i = 0;i<a.length;i++){
     if(a[i]!==0){
         let temp = a[i]
         a[i] = a[j]
         a[j] = temp
         j++
     }
}

console.log(a)



// Move all 0 to the beginniing of the array

let a = [1, 2, 0, 3, 4, 0];

 let j  = a.length-1
 

for(let i = a.length-1;i>=0;i--){
    if(a[i]!==0){
        let temp = a[i]
        a[i] = a[j]
        a[j] = temp
        j--
    }
}

console.log(a)
  


   
    
 

 
 






 


