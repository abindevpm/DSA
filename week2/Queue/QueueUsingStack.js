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

    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
 }

 class Queue {
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

  enqueue(element){
    this.stack1.push(element)
  }

 dequeue(){
    while(!this.stack1.isEmpty()){
        this.stack2.push(this.stack1.pop())
    }
   return this.stack2.pop()
 }


 display(){
    console.log([...this.stack2.items].reverse().concat(this.stack1.items))
 }


 }


 const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)


queue.dequeue()




 queue.display()