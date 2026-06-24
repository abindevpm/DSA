class Node {
    constructor(value){
        this.value = value
        this.next=null
    }
}

class circularLinkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size= 0
    }
    
    
    display(){
        if(!this.head){
            console.log('lst is empty')
            return 
        }
        let curr = this.head 
        
        do{
            console.log(curr.value)
            curr = curr.next
        }while(curr!==this.head)
        
    }
    
    
}

const list = new circularLinkedlist()

list.display()