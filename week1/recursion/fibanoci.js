function fibanoci(n){
    if(n<2){
        return n
    }
    
    return fibanoci(n-1)+fibanoci(n-2)
}
console.log(fibanoci(6))