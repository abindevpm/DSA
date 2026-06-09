function sum(n){
    if(n === 0){
        return false
    }
    return n+sum(n-1)
}

console.log(sum(3))