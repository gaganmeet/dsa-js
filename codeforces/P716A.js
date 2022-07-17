'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim()
    })

  main()
})

function readline() {
  return inputString[currentLine++]
}
// Make a Snippet for the code above this and then write your logic in main();

function main() {
  let nandc = readline().split(' ')
  let n = parseInt(nandc[0])
  let d = parseInt(nandc[1])
  let arr = readline()
    .split(' ')
    .map((x) => parseInt(x))
  let ans = 1
  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] <= d) {
      ans++
    } else {
      ans = 1
    }
  }
  console.log(ans)
}
