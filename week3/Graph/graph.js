class Graph {
   constructor(){
    this.adjacencylist = {}
   }


  addVertex(vertex){
    if(!this.adjacencylist[vertex]){
        this.adjacencylist[vertex] = new Set()
    }
  }

    addEdge(vertex1,vertex2){
    if(!this.adjacencylist[vertex1]){
        this.addVertex(vertex1)
    }

     if(!this.adjacencylist[vertex2]){
        this.addVertex(vertex2)
     }

       this.adjacencylist[vertex1].add(vertex2)
       this.adjacencylist[vertex2].add(vertex1)

  }


    





}

let graph = new Graph()

 graph.addVertex("A")
 graph.addVertex("B")

 graph.addEdge("A","B")

console.log(graph)