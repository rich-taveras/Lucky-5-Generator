// Assignment Code
const pickNumbers = document.querySelector("#lucky");

function pickNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const evenNumbers = [2, 4, 6, 8, 0];
  const oddNumbers = [1, 3, 5, 7, 9, 0];

  //function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  //function to check if a number is consecutive with the last picked number
  function isConsecutive(num) {
    if (numbers.length === 0) {
      return false;
    }
    return Math.abs(num - numbers[numbers.length - 1]) === 1;
  }
  while (numbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 36) + 1;

    // Skip if the number is consecutive with the last pick number
    if (isConsecutive(randomNumber)) {
      continue;
    }
    // Check if number is even or odd and add it to the corresponding array
    if (isEven(randomNumber)) {
      evenNumbers.push(randomNumber);
    } else {
      oddNumbers.push(randomNumber);
    }
    //Ensure that we have at least 2 even and 2 odd numbers
    if (evenNumbers.length >= 2 && oddNumbers.length >= 2) {
      //Pick the remaining numbers to get a total of 5 numbers
      while (numbers.length < 5) {
        if (evenNumbers.length >= 2) {
          numbers.push(evenNumbers.pop());
        } else {
          numbers.push(oddNumbers.pop());
        }
      }
    }
  }
  return numbers;
}
const pickdNumbersEl = pickNumbers();
console.log(pickNumbers);

// Add event listener to generate button
// document.addEventListener("click", pickNumbers);
