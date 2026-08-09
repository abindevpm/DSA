class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
        
        for(let i = 0;i<size;i++){
            this.table[i] = []
        }
        
    }
    
    hash(key){
        let hash = 0;
        
        for(let i = 0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash%this.size
        
        
    }
    
    
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        
        for(let i = 0;i<bucket.length;i++){
            if(bucket[i][0] === key){
                bucket[i][1] = value
                return 
            }
        }
        
        bucket.push([key,value])
    }
    

      get(key){
        let index = this.hash(key)
         let bucket = this.table[index]
         
         for(let  pair of bucket){
             if(pair[0] === key){
                 return pair[1]
             }
         }
         return undefined
         
    }
    
    
    
    
    
    
    
    
    display(){
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
    
}

const ht = new HashTable(10)

ht.set("name",100)
ht.set("name",33)

ht.display()
 console.log(ht.get("abindev"))