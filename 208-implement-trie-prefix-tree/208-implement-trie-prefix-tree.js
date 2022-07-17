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
  search(word) {
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
