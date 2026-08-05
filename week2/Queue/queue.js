class Queue{
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
    
    peek(){
        return this.items[0]
    }
    
    
    
    

    
    display(){
        console.log(this.items)
    }
    
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()

console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.peek())



queue.display()