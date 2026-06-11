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
      

       deletestart(){
        if(!this.head) return
         this.head = this.head.next
       }

      deleteEnd(){
          if(!this.head) return 
          if(!this.head.next){
              this.head = null
              return
          }
          let curr = this.head
           while(curr.next.next){
               curr = curr.next
           }
           curr.next = null
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

      middledelete(){
        if(!this.head) return
        if(!this.head.next){
            this.head = null
            return 
        }
        let slow = this.head
        let fast = this.head
        let prev = null

         while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast  = fast.next.next
         }
         prev.next = slow.next

      }

      reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
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
  list.deletestart()
  list.deleteEnd()
  list.middle()
  list.middledelete()
  list.reverse()
  
  
  
  list.display()           