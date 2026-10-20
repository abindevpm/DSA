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


 min(root = this.root){
    if(!root.left){
        return root.value
    }
    return this.min(root.left)
 }


max(root = this.root){
    if(!root.right){
        return root.value
    }
    return this.max(root.right)
}



height(node = this.root){
    if(node === null){
        return -1
    }

 let left = this.height(node.left)
 let right = this.height(node.right)

  return 1+Math.max(left,right)

}



degree(root,value){
    if(root === null){
        return -1
    }

   if(root.value === value){
    
     let count = 0;

     if(root.left) count++
     if(root.right) count++

      return count

   }

   if(value<root.value){
    return this.degree(root.left,value)
   }
return this.degree(root.right),value

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


console.log(tree.search(10))


tree.inorder()
tree.Preorder()
tree.PostOrder()

console.log(tree.min())
console.log(tree.max())

console.log(tree.height())

  console.log(tree.degree(tree.root,10))

  
 console.log(tree.kthLargest(2))