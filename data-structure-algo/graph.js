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
  let vertices = Number(readline());
  let edges = Number(readline());
  let graph = {};
  for (let i = 1; i <= vertices; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < edges; i++) {
    let pair = readline();
    let edge = pair.split(" ");
    let v1 = Number(edge[0]);
    let v2 = Number(edge[1]);

    graph[v1].push(v2);

    graph[v2].push(v1);
  }
  console.log(graph);
  traversal(graph, vertices);
}

function traversal(graph, vertices) {
  let visited = [];
  for (let i = 0; i <= vertices; i++) visited.push(false);
  console.log("DFS");
  dfs(graph, 1, visited);
}
function dfs(graph, node, visited) {
  if (visited[node]) {
    return;
  }
  visited[node] = true;
  console.log(node);
  for (let n of graph[node]) {
    dfs(graph, n, visited);
  }
}
