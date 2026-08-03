class Stack {
    constructor(){
        this.items = []
        
    }
    
    push(element){
        this.items.push(element)
    }

       pop(){
        return this.items.pop()
    }

       peek(){
       return this.items[this.items.length-1]
   }

      isEmpty(){
       return this.items.length===0
   }
    
    
    
    
    
    
    
    display(){
        console.log(this.items)
    }
    
}

const stack = new Stack 


stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()


console.log(stack.peek())
console.log(stack.isEmpty())



stack.display()
