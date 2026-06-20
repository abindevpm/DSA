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
      
      append(value){
        const node = new Node (value)
        if(!this.head){
            this.head = node 
            this.tail = node
            return 
        }
         this.tail.next = node
         node.prev = this.tail
         this.tail = node
      }
      
       middle(){
          let slow = this.head
          let fast = this.head
          
           while(fast && fast.next){
               slow = slow.next
               fast = fast.next.next
           }
           console.log(slow.value)
      }

        middleDelete(){
          let prev = null
          let slow = this.head
          let fast = this.head
          
          while(fast && fast.next){
              prev = slow
              slow = slow.next
              fast = fast.next.next
          }
          prev.next = slow.next
      }
      

      reverseDouble(){
    let curr = this.head
    while(curr){
        let temp = curr.next
        curr.next = curr.prev
        curr.prev = temp
        
        curr = temp
    }
    let temp = this.head
    this.head = this.tail
    this.tail = temp
}


deletefrst(){
    if(!this.head){
        return 
    }
    if(!this.head.next){
        this.head = null
        this.tail = null
        return 
    }
    this.head =  this.head.next
    this.head.prev = null
}




deletelast(){
    if(!this.tail){
        return 
    }
     if(!this.head.next){
        this.head = null
        this.tail = null
        return
     }
     this.tail = this.tail.prev
     this.tail.next = null
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
    list.prepend(3)
    list.append()
     list.reverse()
    list.middle()
    list.middleDelete()
    list.deletefrst()
    list.deletelast()

   
    
     list.display()
    