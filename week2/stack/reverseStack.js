function reverseStack(stack){
    let tempStack = new Stack()
    
     while(!stack.isEmpty()){
         tempStack.push(stack.pop())
     }
     return tempStack
}

const reversed = reverseStack(stack)

reversed.display()