class Graph {
   constructor(){
    this.adjacencylist = {}
   }


  addVertex(vertex){
    if(!this.adjacencylist[vertex]){
        this.adjacencylist[vertex] = new Set()
    }
  }

    





}

let graph = new Graph()

 graph.addVertex("A")

console.log(graph)