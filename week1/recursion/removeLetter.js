function removeLetter(str,letter){
    if(str.length === 0){
        return ''
    }
    if(str[0] === letter){
        return removeLetter(str.slice(1),letter)
    }
    return str[0]+removeLetter(str.slice(1),letter)
}

console.log(removeLetter('abiaa','a'))