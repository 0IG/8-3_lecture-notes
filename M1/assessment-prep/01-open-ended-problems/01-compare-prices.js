// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
const priceOfHouse = '€1.500.000';
const priceOfCar = '€20.000';
const ageOfCat = 20;
const ageOfDog = 5;

// if (priceOfHouse > priceOfCar) {
//   console.log("The house is more expensive");
// } else {
//   console.log("The car is more expensive");
// }

function stringConvert(priceOfCar, priceOfHouse){
  let newPriceOfCar = priceOfCar.replace("€", '')
  let newPriceOfHouse = priceOfHouse.replace("€", '')
  for (i = 0; i < newPriceOfCar.length; i++){
    if (newPriceOfCar[i] === "."){
      newPriceOfCar = newPriceOfCar.replace(".", '')
    }
  } for (i = 0; i < newPriceOfHouse.length; i++){
    if (newPriceOfHouse[i] === "."){
      newPriceOfHouse = newPriceOfHouse.replace(".", '')
    }
  } newPriceOfHouse = Number(newPriceOfHouse)
    newPriceOfCar = Number(newPriceOfCar)
  if (newPriceOfHouse > newPriceOfCar) {
    console.log("The house is more expensive");
  } else {
    console.log("The car is more expensive");
  } 
};

stringConvert(priceOfCar, priceOfHouse)
