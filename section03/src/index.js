// const mouduleData=require("./math");
// console.log(mouduleData.add(1,2));
// console.log(mouduleData.sub(1,2));

// const {add,sub}=require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

// import mul from "./math.js";
// import{add,sub} from "./math.js";

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));

import mul, {add, sub} from "./math.js";

import randomColor from "randomcolor";

const color=randomColor();
console.log(color);