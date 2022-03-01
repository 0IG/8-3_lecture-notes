// Setup: You want to know whether the train or your car is a faster commute.
// You alternate transportation methods, recording your commute time in minutes every day.

const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];
const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];

// Challenge: write a program that determines which commute is faster ON AVERAGE.
// How will you know if you've succeeded?
//   -> Use node to execute this file. You should see output that logs out which commute is faster on average

// Hint: write a function that computes the average of an array of numbers.
//   Use this function to find the average commute time for the train and for your car.

function betterTravel(carCommuteTimes, trainCommuteTimes){
    let carSum = 0
    let carAvg = 0
    let trainSum = 0
    let trainAvg = 0
    for (i = 0; i < carCommuteTimes.length; i++){
        carSum += carCommuteTimes[i]
        carAvg = carSum / carCommuteTimes.length
    } for (i = 0; i < trainCommuteTimes.length; i++){
        trainSum += trainCommuteTimes[i]
        trainAvg = trainSum / trainCommuteTimes.length
    }
    if (trainAvg > carAvg){
        console.log("The car provides a faster commute.")
    } else {
        console.log("The train proivdes a faster commute")
    }
};

betterTravel(carCommuteTimes, trainCommuteTimes)