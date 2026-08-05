class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

 class QueueLinkedlist {
     constructor(){
         this.head = null
         this.tail = null
         this.size = 0;
     }
     
      isEmpty(){
          return this.size === 0
      }
      
      
      enqueue(value){
          
          const node = new Node (value)
          
          if(this.isEmpty()){
              this.head = node 
              this.tail = node 
          }else{
              this.tail.next = node 
              this.tail = node 
          }
          this.size++
      }
      
      
      dequeue(){
          if(this.isEmpty()){
              return "Queue is Empty"
          }
          
          const value = this.head.value
          this.head = this.head.next
          this.size--
          
          if(this.isEmpty()){
              this.tail = null
          }
          return value
          
      }
      
      
     
     
     
     
     
     
     
     
     display(){
         let curr = this.head
         let s = ''
         while(curr){
             s+=curr.value
             curr = curr.next
         }
         
         console.log(s)
     }
     
     
 }
 
 const queue = new QueueLinkedlist ()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
 
 queue.dequeue()
 queue.dequeue()
 
 queue.display()