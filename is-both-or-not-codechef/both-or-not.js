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
  let n = parseInt(readline())
  if (n % 5 === 0 && n % 11 === 0) {
    console.log('BOTH')
  } else if (n % 5 === 0 || n % 11 === 0) {
    console.log('ONE')
  } else {
    console.log('NONE')
  }
}
