/*


Define and export a function named usePottery returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.
Checking Your Work
*/
const potteryToBeSold = [];
//Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.
//The toSellOrNotToSell function must accept a pottery object as input.

export const toSellOrNotToSell = (pieceOfPottery) => {
 
  if (pieceOfPottery.weight >= 6) {
    pieceOfPottery.price = 40;
  } else  {
    pieceOfPottery.price = 20;
  }
  if (pieceOfPottery.cracked === false) {
    potteryToBeSold.push(pieceOfPottery);
  }
};

//If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.
//If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.
//If the pottery is not cracked, add the object to the module-level array of items to be sold.

export const usePottery = () => {
  return potteryToBeSold.map((pots) => ({ ...pots }));
};
