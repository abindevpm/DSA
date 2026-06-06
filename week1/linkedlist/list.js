class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

 class Linkedlist {
     constructor(){
         this.head = null
         this.size = 0;
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
      append(value){
          const node = new Node (value)
           if(this.head === null){
               this.head = node
           }else{
               let prev = this.head
                while(prev.next){
                    prev = prev.next
                }
                prev.next = node
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
  list.append(3)
  list.append(4)
  
  
  
  
  list.display()