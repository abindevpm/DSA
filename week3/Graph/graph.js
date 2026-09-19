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

    removeEdge(vertex1,vertex2){
    this.adjacencylist[vertex1].delete(vertex2)
    this.adjacencylist[vertex2].delete(vertex1)
  }


  removeVertex(vertex){
    if(!this.adjacencylist[vertex]){
        return 
    }

       for(let neighbor of this.adjacencylist[vertex]){
          this.adjacencylist[neighbor].delete(vertex)
       }
       delete this.adjacencylist[vertex]

   }


   hasEdge(vertex1,vertex2){
    return this.adjacencylist[vertex1].has(vertex2)
}



bfs(start){

let visited = {}
let queue = [start]
visited[start] = true

while(queue.length>0){
    let vertex = queue.shift()
    console.log(vertex)

   for(let neighbor of this.adjacencylist[vertex]){
      if(!visited[neighbor]){
        visited[neighbor] = true
        queue.push(neighbor)
      }
   }

}


}


dfs(start,visited = {}){
    visited[start]  = true
    console.log(start)

 for(let neighbor of this.adjacencylist[start]){
    if(!visited[neighbor]){
        this.dfs(neighbor,visited)
    }
 }

}













  display(){
    for(let vertex in this.adjacencylist){
        console.log(`${vertex}-->${[...this.adjacencylist[vertex]]}`)
    }
}



    





}

let graph = new Graph()

 graph.addVertex("A")
 graph.addVertex("B")

 graph.addEdge("A","B")

 graph.removeEdge("A","B")

  graph.removeVertex("A")

  console.log(graph.hasEdge("A","B"))

  graph.bfs("A")

  graph.dfs("C")

graph.display()