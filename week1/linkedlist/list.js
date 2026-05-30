class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.next = null
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    
    prepend(value){
        const node = new Node (value)
        if(this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
     
      display(){
            let curr = this.head
            let s = ''
            while(curr){
                s+=curr.value+'->'
                curr = curr.next
            }
            console.log(s,null)
      }    
    
}

 const list = new Linkedlist()
 list.prepend(1)
 list.prepend(2)
 list.display()

