import { knapsackDPComp } from './dynamicProgramming/knapsack.js';

const wgt = [10, 20, 30, 40, 50];
const val = [50, 120, 150, 210, 240];
const cap = 50;

const member = Array.from({ length: 6 }, () => new Array(51).fill(-1));

console.log(knapsackDPComp(wgt, val, cap));