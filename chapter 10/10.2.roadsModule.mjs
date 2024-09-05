// import { buildGraph } from './graph.ms';
import { buildGraph } from './graph.mjs';

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

// //code below works in the book sandbox
// const allRoads = [];
// for (let road of roads) {
//   const splitRoad = road.split('-');
//   allRoads.push(splitRoad);
// }
// export const roadGraph = buildGraph(allRoads);

// //code below works here
export const roadGraph = buildGraph(roads);
console.log(roadGraph);

// //author solution - NOT WORKING IN THE BOOK SANDBOX - wrong import, should be "./graph.js"
// import {buildGraph} from "./graph";

// const roads = [
//   "Alice's House-Bob's House",   "Alice's House-Cabin",
//   "Alice's House-Post Office",   "Bob's House-Town Hall",
//   "Daria's House-Ernie's House", "Daria's House-Town Hall",
//   "Ernie's House-Grete's House", "Grete's House-Farm",
//   "Grete's House-Shop",          "Marketplace-Farm",
//   "Marketplace-Post Office",     "Marketplace-Shop",
//   "Marketplace-Town Hall",       "Shop-Town Hall"
// ];

// export const roadGraph = buildGraph(roads.map(r => r.split("-")));
