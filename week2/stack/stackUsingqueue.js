class Queue {
    constructor(){
        this.items = []
    }
    
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

     isEmpty(){
        return this.items.length === 0
     }

     size(){
        return this.items.length
     }


}

 class Stack {
    constructor(){
        this.queue = new Queue()
    }

     push(data){
           this.queue.enqueue(data)
            for(let i = 0;i<this.queue.size()-1;i++){
                this.queue.enqueue(this.queue.dequeue())
            }


     }

     pop(){
        return this.queue.dequeue()
     }


     display(){
        console.log(this.queue.items)
     }


 }



const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()



stack.display()
