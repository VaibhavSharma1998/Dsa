// 11th march 2024

// find the missing number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let missingNum = ()=>{
	for(let i =0;i<arr.length;i++){
  if(arr[i+1] -arr[i] >1 ){
  return  arr[i] +1
  }
  }
  return 'no missing value'
}

console.log(missingNum());

// note that you can not directly return from a for loop

// push the duplicates into a new array 

arr = [1,4,5,7,9,4,5]

let result =  () =>{
	let dupArr = []
	for(let i=0;i<arr.length;i++){
  	for(let j= i + 1;j<arr.length;j++){  
    if(arr[i] === arr[j] && !dupArr.includes(arr[i])){
     dupArr.push(arr[j])
    }
    }
  }
  return dupArr
}

console.log(result())

// note j = i +1 is the best approach not the j =1 

// Javascript star pattern questions
// there are 4 patterns like top right,top left, bottom right,bottom left

// (  https://www.geeksforgeeks.org/javascript-program-to-print-triangle-star-pattern/)


// number pattern questions  - https://www.tutorialstonight.com/number-pattern-programs-in-javascript

question
// Pattern = 
// "12345
// 1234
// 123
// 12
// 1"


Answer 
let string = ""
for(let i=1;i<=5;i++){
	for(let j=1;j<=6-i;j++){
  	string += j
  }
  string += "\n"
}

console.log(string)


questions 

// 54321
// 5432
// 543
// 54
// 5

Answer 

string = ""
let n= 5
for(let i=5;i>=1;i--){
for(let j=5;j>=6-i;j--){
string += j
}
string += "\n"
}

console.log(string) 

questions 

// 54321
// 4321
// 321
// 21
// 1

Answer 

string = ""
n= 5

for(let i=5;i>=1;i--){
for(let j=i;j>=1;j--){
string += j
}
string += "\n"
}

console.log(string) 