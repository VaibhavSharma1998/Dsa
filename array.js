// Question : count number of dublicates elements in the array
// not undersatnd - why use emptyObject[items] rather than  emptyObject.items
// Tomorrow 10th oct firstly look at all the loops and then look at this

let arr = [1,3,5,7,3,5,1,1,1,1,]

let result = () =>{
 let emptyObject = {}
 for(let items of arr){
   if(emptyObject[items]){
    emptyObject[items] ++
   }else{
    emptyObject[items] = 1
   }
 }
 let storedArr = []
 
 for (let key in emptyObject){
   if(emptyObject[key] >1){
   storedArr.push(key,emptyObject[key])
   }
 }
 return storedArr
}

 
console.log(result())