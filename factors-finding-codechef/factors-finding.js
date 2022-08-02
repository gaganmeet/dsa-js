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
  const n = parseInt(readline())
  const res = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) res.push(i)
  }
  console.log(res.length)
  console.log(res.join(' '))
}
