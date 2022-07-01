//Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
/*let pottery = {
    height:"",
    shape: 1,
    weight: ,

}

*/


//Define function named makePottery.

//The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.
//Shape of the piece of pottery (e.g. "Mug", "Platter") string
//Weight of the piece (e.g. 1, 5) number
//Height of the piece (e.g. 3, 7) number
 let potteryId = 1
export const makePottery = (potteryString, weightNumber,heightNumber) => {
    const newPottery = {
    shape: potteryString,
    weight: weightNumber,
    height: heightNumber,
    id: potteryId
    }
potteryId++
    return newPottery
}


//The makePottery function must return an object with the following properties on it.
//shape
//weight
//height
//id

    