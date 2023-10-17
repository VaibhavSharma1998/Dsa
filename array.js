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


// Question : how to sort an array without apply sort method?

// Answer: Quick Sort

// not fully understand 

let sortArr = [-8,-3,2,8,8,3,2]

let sortArrResult = ()=>{
 let pivot = sortArr[sortArr.length-1]
 let left = []
 let right = []
 for(let i=0;i<sortArr.length;i++){
  if(sortArr[i]<pivot){
  left.push(sortArr[i])
  }else{
  right.push(sortArr[i])
  }
 }
 return [...left,pivot,...right]
}

console.log(sortArrResult())


// Question: check if a number is prime or not ?

const checkNum = (n)=>{
	if(n<2){
  return false
  }
  for(let i=2; i<n ;i++){
  	if(n%i === 0){
    	return false
    }
  }
  return true
}

console.log(checkNum(8))

// Question: find the prime number between 1 and 100

const primeNum = (n) => {
  let result = [];
   
   
   for(let i=2;i<n;i++){
   	let isPrime = true
    
    for(let j=2;j<i;j++){
    	if(i%j === 0){
      isPrime = false 
      break
      }
      
      }
      if(isPrime){
      result.push(i)
    }
   }
  
  return result;
}

console.log(primeNum(100));

// in this example i am checking that a number n is not 
// divisible between 2 to n-1 then that is a prime number

// Tomorrow  12th oct first read about recursion and then ask 
// for karam about the dsa questions that may be asked
// and solve basic questions of array from gfg 
// also learn about basic questions of mern stack except react
// good luckluck😊😍


// 13th october -dsa question

// print true if the array has dublicate value 

let isDublicate = [1,2,3]

// method 1 - by checking length
let resultIsDublicate1 = ()=>{
for(let i=0;i<isDublicate.length;i++){
  for(let j=i+1; j<isDublicate.length;j++){
     if(isDublicate[i] ===isDublicate[j]){
      return true
    }
  }
}
return false
}
 
// method 1 - by nested loop
let resultIsDublicate = ()=>{
let length1 = isDublicate.length
let  onlyDublicate = [...new Set(isDublicate)].length
if(length1 !== onlyDublicate){
return true
}else{
return false
}
	
}
console.log(resultIsDublicate())


// Question:find the missing number ihe array [0,1,2,3,4,6]

let missingArr = [0,1,2,3,4,6]

let missingNum = ()=>{
let length = missingArr.length
// This method works if the array has 0 else it fails
let expectedSum =((length)*(length+1))/2



// This method works everywhere except when the array has 0

let expectedSum1 =((length+1)*(length+2))/2

let realSumm = missingArr.reduce((acc,value) => acc + value)

/* console.log(expectedSum,realSumm) */
let result = expectedSum-realSumm
return result
}

console.log(missingNum())

// Tomorrow 18th oct, 2023 
// in moring from study from 5:15 to 7:15 node interview questions
//  then 7:15 to 8:00 - running
// 8 to 9 - ready
//  9 to 2 - apply on linkedin and looking for company that are opened within 6 months 
//  2 to 3 - rest
//  3 to 5 - dsa
//  5 to 8 - library dsa and interview 
//  9 to 11 - coading
// this  time our priority is to learn interview questions and dsa 
// and then start making portfolio
// best of luck tomorrow complete all array questions.
 