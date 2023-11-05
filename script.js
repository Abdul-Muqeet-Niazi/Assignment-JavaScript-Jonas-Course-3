// In this folder we want to show how to build editor setup as pro:
// First Install Prettier;
// Then go to file => Preferences => Setting => Search => Default Formatter => Choose Prettier;
// Then go to again on Search command and simply type Format on Save and check the box;
// If you want to manually change something that you dont like what prettier does so;
// create file .pettierrc but before creating file go to prettier web and click on docs,then go on to options of Configure prettier section where more understandable things and commands/code were written that you have to use in .prettierrc file
// in file make curly brackets and wrote docs API override with key in double quotes. and last wrote value.
"use strict";
// Now for manually creating shortcuts like as for log we simply use snippets;
// Which available through file => Preferences => Configure User Snippet => and uncomment the code of example there you will understand.
const xyz = 999;
console.log(xyz); // if suggestion dont show then simply tap ctrl+spacebar.
console.log("555");

// VIDEO FIXME BUG TODO Now you might think how I do it so it is easy first download extension of "Todo highlight" then simply go to file => Preferences => Setting => Go to Top right corner on file (Hover: Open setting JSON ) then go to simply write the code
// Now Professional developer dont manually reload the page of web it automatically does so how we can do that?
// Simply download node.js then go to terminal of vs code or command prompt(better)
// then write "npm install live server -g"
// then type "live-server"

// How to learn the code and solve the problem, error like a pro! Watch the video of Jonas Schemmedtmann
// PROBLEM 1:
// Build a Thermometer that can find the value of amplitude.
// - First Understand the problem;
// - Divide the problem into sub-problem ;
// - Then if you have been stuck in the problem then research from MDN, Stack Overflow, feel free to use it dont be Ashamed

// What is amplitude? Ans: The average of min and max.
// Find max and min value.
// Find Amplitude.

const calcAverageThermometer = function (temps, temps2) {
  let max = temps[0];
  let min = temps[0];
  let merge = temps.concat(temps2); // Where concat function does as concat or merge two arrays.
  console.log(merge);

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const test = calcAverageThermometer([3, 8, 2], [5, 4, 3]);
const amplitude = console.log(test);

// What is BUG ?
// A bug is an error, flaw or fault in a software program that causes it to produce unexpected or incorrect results.As it is made by a programmer(Beginner and Expert Both)
// As it comes most of times after the development when we launch Product or Website experienced by User so,
// How can we solve it or get rid of it?
// -Find The Bug.
// -Analyze the bug.
// -Solve the bug.
// -Avoid in the future.

const measureKelvin = function () {
  let obj = {
    Type: "Celsuis",
    Change: "Kelvin",
    Amount: +prompt(`Degree Celsuis:`),
  };
  console.table(obj); // Where it can log/show the key and values in table. (It works as log)

  const kelvin = obj.Amount + 273;
  return kelvin;
};
console.log(measureKelvin());
// Now its concating the answer as 10273. But we want to add so;
// -Identify.
// -Analyze.
// -Solve.

// So first show the properties of obj.
// Here we find that amount is in string.
// We add + to add numbers as number to not behave as string.
// Finally answer we get as 283.
// ----------------------------------------------------------------------------------------------------------------- //

// Another way of finding the bug.
// Go to inspect => Sources => then add a breakpoint just click on number of lines(left hand side) => then click on right top to resume -> stop -> to find, analyze the bug.

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const printForecast = function (test, test2) {
  let max = test[0];
  let min = test2[0];

  for (let i = 0; i < test.length; i++) {
    if (test[i] >= max) {
      max = test[i];
      console.log(`There will be ${test[i]} on ${i + 1}`);
    }
  }
  for (let i = 0; i < test2.length; i++) {
    if (test2[i] <= min || test2[i] >= min) {
      min = test2[i];
      console.log(`There will be ${test2[i]} on ${i + 1}`);
    }
  }
};
console.log(printForecast(arr, arr2));
