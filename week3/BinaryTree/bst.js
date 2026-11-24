class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

     insert(value){
        let newNode = new Node(value)
         
         if(this.root === null){
            this.root = newNode
         }else{
            this.insertNode(this.root,newNode)
         }
     }

     insertNode(node,newNode){
        if(newNode.value<node.value){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
     }

     
search(value,node=this.root){
    if(node === null){
        return false
    }
     if(value === node.value){
        return true
     }

      if(value<node.value){
        return this.search(value,node.left)
      }else{
        return this.search(value,node.right)
      }
}



min(node = this.root){
    if(!node.left){
        return node.value
    }
    return this.min(node.left)
}



max(node = this.root){
    if(!node.right){
        return node.value
    }
  return this.max(node.right)
}









height(node = this.root){
    if(node === null){
        return -1
    }

 let left = this.height(node.left)
 let right = this.height(node.right)

  return 1+Math.max(left,right)

}



isBalanced(node = this.root){

 if(node === null){
    return true
 }

let leftHeight = this.height(node.left)
let rightHeight = this.height(node.right)

 if(Math.abs(leftHeight-rightHeight)>1){
     return false
 }


 return this.isBalanced(node.left) &&
 this.isBalanced(node.right)

}






degree(value,node = this.root){
    if(node === null){
        return -1
    }

   if(node.value === value){
    let count = 0;

    if(node.left!==null) count++
    if(node.right!==null) count++

   return count
   }


  if(value<node.value){
    return this.degree(value,node.left)
  }

return this.degree(value,node.right)

}








 
kthLargest(k){

let count = 0;
let result = null

 function reverseInorder(node){

  if(node === null || count>=k){
    return
  }

  reverseInorder(node.right)

   count++

  if(count === k){
    result = node.value
    return
  }

  reverseInorder(node.left)



 }

 reverseInorder(this.root)
 return result
 
}



 kthSmallest(k){

 let count = 0;
 let result = null

 function inorder(node){
    if(node === null || count>k){
        return
    }

  inorder(node.left)
  count++


   if(count === k){
    result = node.value
    return
   }

   inorder(node.right)


 }

 inorder(this.root)
 return result


 }


 secondlargest(){
    
 if(!this.root) return null

 let current = this.root
 let parent = null

while(current.right){

 parent = current
 current = current.right

}

 if(current.left){
    current = current.left

  while(current.right){
    current = current.right
  }
  return current.value

 }

return parent ? parent.value :null

 }




 
thirdLargest(){

 let count = 0;
 let result = null

 function reverseInorder(node){
  if(node === null ||count>=3){
    return 
  }

 reverseInorder(node.right)
 count++

if(count === 3){
    result = node.value
    return 
}

reverseInorder(node.left)

 }

  reverseInorder(this.root)

return result

}




 sumofleadNode(){

function sum(node){

 if(node === null){
    return 0
 }

 if(node.left === null && node.right === null){
    return node.value
 }

return sum(node.left)+sum(node.right)

}
return sum(this.root) 

 }




 delete(value){
    this.root = this.deleteNode(this.root,value)
}

 deleteNode(node,value){

 if(node === null) return null

if(value<node.value){
    node.left = this.deleteNode(node.left,value)
}else if(value>node.value){
    node.right = this.deleteNode(node.right,value)
}else {
    if(!node.left) return node.right
    if(!node.right) return node.left


 let min = node.right

 while(min.left){
    min = min.left
 }

node.value = min.value

node.right = this.deleteNode(node.result,min.value)


}

return node
 }


























   inorder(node = this.root){
    if(node === null){
        return
    }
    this.inorder(node.left)
    console.log(node.value)
    this.inorder(node.right)
   }


   
Preorder(node = this.root){
    if(node === null){
        return
    }

    console.log(node.value)
    this.Preorder(node.left)
    this.Preorder(node.right)

}



PostOrder(node = this.root){
    if(node === null){
        return
    }

  this.PostOrder(node.left)
  this.PostOrder(node.right)
  console.log(node.value)

}




}




let tree = new BST()

tree.insert(22)
tree.insert(10)
tree.insert(1)


tree.delete(399)


console.log(tree.search(10))


tree.inorder()
tree.Preorder()
tree.PostOrder()

console.log(tree.min())
console.log(tree.max())

console.log(tree.height())



console.log(tree.degree(1))
  
 console.log(tree.kthLargest(2))

  console.log(tree.kthSmallest(2))

  
console.log(tree.secondlargest())


console.log(tree.thirdLargest())


 console.log(tree.sumofleadNode())
