// From a given array find a pair that sums target number;
// If there is a pair return true, if not just return false;

const pairSumArray = [1, 2, 3, 4, 5];
const targetSum = 8;

let set = new Set();

function findingSumPair(array) {
  for (let number of array) {
    let pairSum = targetSum - number;
    if (set.has(pairSum)) {
      if (pairSum + number === targetSum) {
        return true;
      }
      break;
    }
    set.add(number);
    return false;
  }
}

console.log(findingSumPair(pairSumArray));

function findPair(inputs, target) {
  const seen = new Set();
  return inputs.some((element) => {
    const compliment = target - element;
    if (seen.has(compliment)) {
      console.log("Found", compliment);
      return true;
    }
    seen.add(element);
    return false;
  });
}

console.log(findPair(pairSumArray, targetSum));


// Find the character most used in a given string




function mostChar(str) {
    const obj = {};
    let checkNum = 0;
    let letter = '';

    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    for(let i = 0; i < str.length; i++ ) {
        if(obj[str[i]] > checkNum) {
            letter = str[i];
            checkNum = obj[str[i]];
        }
    }

    return letter;
}

console.log(mostChar('most used charachterc'));


// From a given array of strings and a given target word
// Return the strings that include the given target word
// It doesn't matter the order of the target word in the string

const arrayOfStrings = ['paul', 'laura', 'john', 'david', 'dvrgd', 'dividid', 'gaol']
const targetWord = 'no';

function findTargetWord(arr, target) {
    const arrOfTargetWord = target.split('');
    return arr.filter(word => {
        for(let i = 0; i < arrOfTargetWord.length; i++) {
            if(word.includes(arrOfTargetWord[i])) {
                return word;
            }
        }
    })
}

console.log(findTargetWord(arrayOfStrings, targetWord));


// Find subarrays within an array that sum up to zero

const inputsFindSumZero = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];



function findSumZero(array) {
    const seen = new Set();
    seen.add(0);
    let sum = 0;
    for(let element of array) {
        sum += element;
        if(seen.has(sum)){
           console.log(sum + " " + element);
           if(sum + element === 0) {
               console.log(sum + element);
           }
            return true;
        }
    }
    seen.add(sum);
    return false;

}

console.log(findSumZero(inputsFindSumZero));


function sumingNumbers(array) {
    let theSum = 0;
    for(item of array) {
        theSum += item;
    }
    return theSum;
}

console.log(sumingNumbers(pairSumArray));


