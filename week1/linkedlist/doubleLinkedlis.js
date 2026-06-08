class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

 class DoubleLinkedlist {
     constructor(){
         this.head = null
         this.tail = null
         this.size = 0;
     }
      getSize(){
          return this.size === 0
      }
      prepend(value){
          const node = new Node (value)
           if(!this.head){
               this.head = node
               this.tail = node
           }else{
               node.next = this.head
               this.head = node
               this.head.prev= node
           }
      }
       display(){
           let curr = this.head
           let s = ''
           while(curr){
               s+=curr.value+'<->'
               curr = curr.next
           }
           console.log(s,null)
       }
      
      
      
 }
 
    const list = new DoubleLinkedlist()
    list.prepend(1)
    list.prepend(2)
    
     list.display()
    