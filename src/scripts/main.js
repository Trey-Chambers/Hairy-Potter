// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 6, 5)
let cup = makePottery("cup", 4, 7)
let plate = makePottery("plate", 4, 10)
let tallCup = makePottery("tall cup", 5, 9)
let fruitBowl = makePottery("fruit bowl", 6, 8)

//console.log(mug)
//console.log(cup)
//console.log(plate)
//console.log(tallCup)
//console.log(fruitBowl)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedCup = firePottery(cup, 2800)
let firedPlate = firePottery(plate, 2100)
let firedTallCup = firePottery(tallCup, 1500)
let firedFruitBowl = firePottery(fruitBowl, 2150)
console.log(firedMug)
console.log(firedCup)
console.log(firedPlate)
console.log(firedTallCup)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



