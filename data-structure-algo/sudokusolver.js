"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

function main() {
  let board = [];
  for (let i = 0; i < 9; i++) {
    let input = readline();
    let arr = input.split(" ");
    board.push(arr);
  }
  solveSudoku(board);
  console.log(board);
}

var solveSudoku = function (board) {
  function checkValid(board, r, c, num) {
    let blkrow = Math.floor(r / 3) * 3,
      blkcol = Math.floor(c / 3) * 3;
    for (let i = 0; i < 9; i++)
      if (
        board[i][c] == num ||
        board[r][i] == num ||
        board[blkrow + Math.floor(i / 3)][blkcol + (i % 3)] == num
      )
        return false;
    return true;
  }

  function helper(board, r, c) {
    for (let i = r; i < 9; i++) {
      c = 0;
      for (let j = c; j < 9; j++) {
        if (board[i][j] != "0") continue;
        for (let k = "1"; k <= "9"; k++) {
          if (checkValid(board, i, j, k)) {
            board[i][j] = "" + k;
            if (helper(board, i, j + 1)) return true;
            board[i][j] = "0";
          }
        }
        return false;
      }
    }
    return true;
  }

  helper(board, 0, 0);
};
