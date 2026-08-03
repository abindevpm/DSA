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
    
    
    
    
    
    
    display(){
        console.log(this.items)
    }
    
}

const stack = new Stack 


stack.push(1)
stack.push(2)
stack.push(3)



stack.display()