class MinHeap {
    constructor(){
        this.heap = []
    }

  insert(value){
    this.heap.push(value)
    this.heapifyUp()
  }

  heapifyUp(){
    let index = this.heap.length-1

    while(index>0){
        let parentIndex = Math.floor((index-1)/2)

        if(this.heap[parentIndex]<=this.heap[index]){
            break
        }

    [this.heap[parentIndex],this.heap[index]] = 
    [this.heap[index],this.heap[parentIndex]]

    index = parentIndex

    }

  }



}

let heap = new MinHeap()

heap.insert(10)
heap.insert(2)
heap.insert(44)

console.log(heap.heap)
