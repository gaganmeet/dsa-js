class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode()
      }
      curr = curr.children[char]
    }
    curr.isEndOfWord = true
  }
  contains(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!curr.children[char]) {
        return false
      }
      curr = curr.children[char]
    }
    return curr.isEndOfWord
  }
  startsWith(prefix) {
    let curr = this.root
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i]
      if (!curr.children[char]) {
        return false
      }
      curr = curr.children[char]
    }
    return true
  }
}

const trie = new Trie()
trie.insert('apple')
trie.insert('app')
trie.insert('apple')
trie.insert('apples')
trie.insert('ball')
trie.insert('banana')
trie.insert('bananas')
console.log(trie.contains('apple'))
console.log(trie.contains('app'))
console.log(trie.contains('apts'))
console.log(trie.contains('ap'))
console.log(trie.contains('ball'))
console.log(trie.startsWith('ap'))

