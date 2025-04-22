/**
 * here I write a basic js questions. this contain only  10 questions . 
 * if need I can create another files. 
 * all questions name given as in form of comment.
 */


// Q1:- Wap to cal. max. occ. of char. in a string. 

// let occ_Str= "rar"

// const OccStrFun=(str)=>{
//     let obj={}
// let temp= str.split("")
//  temp.forEach((el)=>{   // if we for loop then we write as obj[temp[i]]
// if(obj[el]){
//     console.log(obj[el])
//     obj[el]=obj[el]+1   
// }else{
//     obj[el]=1
// }
//  })
//  return obj

// }

// console.log(OccStrFun(occ_Str))

//-------------------------------------------------------------------------

//Q2:- Wap to create a Promise and only show resolve and reject.

// let promise =new Promise((res,rej)=>{

//     let x=10;

//     if(x<1){
//         res("Resolved")
//     }else{
//         rej("Rejected")
//     }
// })

// promise.then((response)=>{
//     console.log(response)
// },(response)=>{
//     console.log(response)
// })

//------------------------------------------------------------------------------

//Q3:- WAP to remove the duplicate elements from an array.

// let duplicate_Array=[1,2,34,5,5,5,6,79,8,7,7,6,5,4,4,3,3,3,2]

// const duplicate_Array_Fun=(arr)=>{
// return arr.filter((el,i)=>{return(arr.indexOf(el)===i)})
// }
// console.log(duplicate_Array_Fun(duplicate_Array))

//-------------------------------------------------------------------------------

//Q4:- Wap to find the max. element from an array. and Wap to sort an array using or without using higer order function.

// let max_Array=[8,9,7,6,8,0,1,2,33,4,5,677,89,8,88,76]

// const max_Array_Fun=(arr)=>{
// // return arr.sort((a,b)=>{return(b-a)})[0] // using sort method.
// for(let i=0;i<arr.length;i++){
//     for(let k=0;k<arr.length;k++){
//         if(arr[k]>arr[k+1]){
//             let temp=arr[k]
//             arr[k]=arr[k+1]
//             arr[k+1]=temp
//         }
//     }
// }
// return arr[arr.length-1] // using for loop.
// }
// console.log(max_Array_Fun(max_Array))

//---------------------------------------------------------------------------------

//Q5:- Wap to flat an array with or without higher order function.

// let flat_Array=[2,3,4,[6,5,4,[1,2,3,4,5]]]
// let temp=[]

// const flat_Array_Fun=(arr)=>{
// // return arr.flat(Infinity) // using flat method.

// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]==="number"){
//         temp.push(arr[i])
//     }else{
//         flat_Array_Fun(arr[i])
//     }
// }
// return temp // using for loop and recursion.

// }

// console.log(flat_Array_Fun(flat_Array))

//---------------------------------------------------------------------------------

// Q6:- Wap to find the string is palindrom or not. using and without using higher order function.


// let palindrom_String="rar"

// const palindrom_String_Fun=(str)=>{
// // return str.split("").reverse().join("")===str //using hof


// let acc=""
// for(let i=str.length-1;i>=0;i--){
// acc=acc+str[i]
// }
// return acc===str // using for loop.

// }

// console.log(palindrom_String_Fun(palindrom_String))

//---------------------------------------------------------------------------------

//Q7:- Waf to upgrade any charecter from a string to UpperCase.

// let upperCase_String="javascript"

// const upperCase_String_Fun=(str,val)=>{
//     if(!str.includes(val))
//         return val +" "+"is not present in string"
// let indexvalue=str.split("").indexOf(val)
// let uppervalue= str.charAt(indexvalue).toUpperCase()
// let total= str.slice(0,indexvalue)+uppervalue+str.slice(indexvalue+1)
// return total
// }

// console.log(upperCase_String_Fun(upperCase_String,"p"))

//---------------------------------------------------------------------------------

//Q8:- Wap to find the second largest element from an array with and without higher order function.

// let second_Array=[88,55,4,33,22,99,100,1,2,3,3,4,5,6,777,5443,32,22,12,3,5443]

// const second_Array_Fun=(arr)=>{

//     // let temp=arr.sort((a,b)=>{return(b-a)})
//     // return temp.filter((el,i)=>{return(temp.indexOf(el)===i)})[1] // using hof
//     let max1=arr[0]
//     let max2=arr[1]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max1){
//             max2=max1
//             max1=arr[i]
//         }else if(arr[i]>max2 && arr[i]<max1){
//             max2=arr[i]
//         }
//     }
//     return {max1,max2} // using for loop.
// }
// console.log(second_Array_Fun(second_Array))

//---------------------------------------------------------------------------------

//Q9:- Wap to reverse the string with and without hof.

// let reverse_String="javascript"

// const reverse_String_Fun=(str)=>{
// // return str.split("").reverse().join("") // using hof

// let temp=""
// for(let i=str.length-1;i>=0;i--){
//     temp=temp+str[i]
// }
// return temp // using for loop.

// }
// console.log(reverse_String_Fun(reverse_String))

//---------------------------------------------------------------------------------

//Q10:- Waf and find the desired charecter occurence.

// let char_Occ="javascript"

// const char_Occ_Fun=(str,val)=>{
//     let temp=0
// if(!str.includes(val))
//     return val + " "+ "is not present."
// for(let i=0;i<str.length;i++){
// if(val===str[i]){
//     temp=temp+1
// }
// }
// return temp
// }
// console.log(char_Occ_Fun(char_Occ,"j"))