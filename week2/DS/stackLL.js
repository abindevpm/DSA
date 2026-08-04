class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.head = null
        this.size = 0
    }
    
    push(value){
        const node = new Node (value)
        
        node.next = this.head
        this.head = node 
        this.size++
    }
    
    pop(){
        if(this.head === null){
            return "Stack is Empty"
        }
        
         const removed = this.head.value
         this.head = this.head.next
         this.size--
         
         return removed
        
    }
    
    isEmpty(){
        return this.size === 0
    }
    
 length(){
     return this.size
 }
    
    
    
    
    
    
    display(){
        let curr = this.head
        let s = ''
        while(curr){
            s+=curr.value
            curr = curr.next
        }
        
        console.log(s,null)
    }
    
    
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop()
stack.pop()

console.log(stack.isEmpty())

console.log(stack.length())


stack.display()