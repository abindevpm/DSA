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