let a = "abcabcd"

function removeChar(str,ch){
    if(str.length === 0){
        return ""
    }
    if(str[0] === ch){
        return removeChar(str.slice(1),ch)
    }
    return str[0]+removeChar(str.slice(1),ch)
}

console.log(removeChar(a,"a"))