import { Solver } from "./solver";
import { BubbleSort } from "./bubblesort";
import { MergeSort } from "./mergesort";

const mySolver = new Solver([4, 7, 8, 1, 2, 9, 3, 5, 6], new BubbleSort());

mySolver.logic();
console.log(mySolver.Data);


mySolver.setStrategy(new MergeSort());
mySolver.logic();
console.log(mySolver.Data);
