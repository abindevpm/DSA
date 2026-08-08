class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    
    hash(key){
        let hash = 0;
        
        for(let  i = 0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash%this.size
        
    }
    
    set(key,value){
        let index = this.hash(key)
        this.table[index] = [key,value]
        
    }

      get(key){
        let index  = this.hash(key)
        return this.table[index]
    }
    
    
    
}

const ht = new HashTable (10)

ht.set("name",10)
ht.set('name',22)

console.log(ht.table)
console.log(ht.get("name"))




