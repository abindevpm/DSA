class Graph {
    constructor(){
        this.adjacencylist = {}
    }

addVertex(vertex){
    if(!this.adjacencylist[vertex]){
        this.adjacencylist[vertex] = {}
    }
}

 addEdge(vertex1,vertex2,weight){
    if(!this.adjacencylist[vertex1]){
        this.addVertex(vertex1)
    }

   if(!this.adjacencylist[vertex2]){
    this.addVertex(vertex2)
   }

  this.adjacencylist[vertex1][vertex2] = weight
  this.adjacencylist[vertex2][vertex1] = weight


 }







 display(){
    console.log(this.adjacencylist)
 }

}

 let graph = new Graph()


graph.addVertex("A")
graph.addVertex("B")


graph.addEdge("A","B",10)


 console.log(graph)