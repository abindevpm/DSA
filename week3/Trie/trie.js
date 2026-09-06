class TrieNode {
    constructor(){
        this.children = {};
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root

        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch] = new TrieNode()
            }
            node = node.children[ch]
        }
        node.isEnd = true
    }

     

      search(word){
        let node = this.root

         for(let ch of word){
            if(!node.children[ch]){
                return false
            }
            node = node.children[ch]
         }
         return node.isEnd 

      }

      startWith(prefix){
    let node = this.root

   for(let ch of prefix){
    if(!node.children[ch]){
        return false
    }
    node = node.children[ch]
   }
   return true
     
  }



  autocomplete(prefix){
        
        let node = this.root

        for(let ch of prefix){
            if(!node.children[ch]){
                return []
            }
            node = node.children[ch]
        }
        let result = []
        this.collectionWord(node,prefix,result)
        return result

    }

    collectionWord(node,prefix,result){
        if(node.isEnd){
            result.push(prefix)
        }

        for(let ch in node.children){
            this.collectionWord(
                node.children[ch],
                prefix+ch,
                result
            )
        }

    }



}


let trie = new Trie()

trie.insert("cat")
trie.insert("bat")
trie.insert("car")



console.log(trie.root)

console.log(trie.search("cat"))
console.log(trie.autocomplete("c"))
