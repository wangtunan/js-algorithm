import { coinChangeIIDPComp } from './dynamicProgramming/unboundedKnapsack.js';

const coins = [1, 2, 5];
const amt = 5;

console.log(coinChangeIIDPComp(coins, amt));