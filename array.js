// Question : how to remove dublicate value from an array
// count number of dublicates elements in the array
// not undersatnd - why use emptyObject[items] rather than  emptyObject.items
// understood - In JavaScript, when you want to access the
// value of an object's property using a variable or dynamic key,
//  you should use bracket notation (obj[key]).
//  You cannot use dot notation (obj.key or obj['key'])
// to access properties using dynamic keys because dot notation expects a
// literal property name, not a variable.
// Tomorrow 10th oct firstly look at all the loops and then look at this

let arr = [1, 3, 5, 7, 3, 5, 1, 1, 1, 1];

let uniquValue = [...new Set(arr)];

let result = () => {
  let emptyObject = {};
  for (let items of arr) {
    console.log(items);
    if (emptyObject[items]) {
      emptyObject[items]++;
    } else {
      emptyObject[items] = 1;
    }
  }
  let storedArr = [];

  for (let key in emptyObject) {
    if (emptyObject[key] > 1) {
      storedArr.push(key, emptyObject[key]);
    }
  }
  return storedArr;
};

console.log(result());

// question: how to remove falsy value from an array

const originalArray = [0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5];
const filteredArray = originalArray.filter((value) => value); // Removes falsy values

// tomorrow 11th oct :firstly do quick sort and then prime number question and 
// then do basic and intermediate question on array, and if time then do basic and 
// intermediate question on number
