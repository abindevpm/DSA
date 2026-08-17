class HashTable {
     constructor(size){
        this.table = new Array(size)
        this.size = size
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

         while(this.table[index]!==undefined){

            if(this.table[index][0] === key){
                this.table[index][1] = value
                return 
            }
            index = (index+1)%this.size
         }
         this.table[index] = [key,value]
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
ht.set("name",222)
ht.set("mane",33)


ht.display()