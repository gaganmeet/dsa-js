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
} // use readline() to read input
function main() {
  let input = readline().split(' ')
  let a = parseInt(input[0])
  let b = parseInt(input[1])
  let x = parseInt(input[2])
  let y = parseInt(input[3])
  console.log(a * x + b * y)
}
