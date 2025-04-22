//Q1:- Wap to print a number from 1 to 10 without using any loop.

// let x=1
// const print_Num_WithoutLoop=()=>{
//  if(x<=10){
//     console.log(x)
//     x=x+1
//     print_Num_WithoutLoop(x) // using recursion.
//  }

// }
// print_Num_WithoutLoop()

//---------------------------------------------------------------------------------

//Q2:- Wap to find the prime number.

// const prime_Number_Fun=(num)=>{
//     if(num<=0)
//         return `${num} is not valid number.`
//     let temp=0
//     if(num==1)
//         return `${num} is prime number.` 
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             temp=temp+1
//         }
//     }
//     if(temp>0){
//         return `${num} is not prime number.` 
//     }else{
//        return `${num} is prime number.` 
//     }

// }

// console.log(prime_Number_Fun(5))

//---------------------------------------------------------------------------------

//Q3:- Wap, input=[1,3,5,7] and output=[1,4,9,16]

// let input_Array=[1,3,5,7]

// const _Array_Fun=(arr)=>{
//     let temp=[]
// for(let i=0;i<arr.length;i++){
//     if(temp.length==0){
//         temp.push(0+arr[i])
//     }else{
//         temp.push(temp[i-1]+arr[i])
//     }

// }
// return temp

// }
// console.log(_Array_Fun(input_Array))

//---------------------------------------------------------------------------------

//Q4:- Wap to find the unique vowels from string.
//method-1
// let unique_Vowel_String="javascript"

// const unique_Vowel_String_Fun=(str)=>{

// let temp={}
// unique=[]
// for(let i=0;i<str.length;i++){
//     if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//         if(temp[str[i]]){
//             temp[str[i]]=temp[str[i]]+1
//         }else{
//             temp[str[i]]=1
//         }
//     }
// }
// Object.entries(temp).map(([key,value])=>{

// if(value==1){
//     unique.push(key)
// }
// })

// return unique



// }

// console.log(unique_Vowel_String_Fun(unique_Vowel_String))

/**
 * method-2
 * 
 * let str="javascript"

function check(str){
let temp= str.split("").map((item,index)=>{
    
    if(item==="a"||item==="e"||item==="i"||item==="o"||item==="u"){
        return item
    }
    
    })
    return temp.filter((el,i)=>{return(el!=undefined&&temp.indexOf(el)===i)})
}

console.log(check(str))
 */

//---------------------------------------------------------------------------------

//Q5:- Wap to uppercase of first charecter of word in sentence.


// let uppercase="hello world"

// const uppercase_Word_Fun=(str)=>{
// let temp=str.split(" ")
// let sum=""
// for(let i=0;i<temp.length;i++){
//    sum=sum+" "+temp[i].slice(0,1).toUpperCase()+temp[i].slice(1)
// }
// return sum


// }
// console.log(uppercase_Word_Fun(uppercase))

//---------------------------------------------------------------------------------

//Q6:-Wap to find the kth largest element from an array.

// const kth_Array_Fun=(arr,index)=>{
// let temp=arr.filter((el,i)=>{return(arr.indexOf(el)===i)})
// let sorted_Array=temp.sort((a,b)=>{return(a-b)})
// return sorted_Array[sorted_Array.length-index]
// }
// console.log(kth_Array_Fun([6,7,8,1,2,8,5,4,3],3)) // passing array and kth element 

//---------------------------------------------------------------------------------

//Q7:- Wap to remove the duplicate the element.

// const duplicate_Array_Fun=(arr,n)=>{
//     return arr.filter((el)=>{return(n!==el)})

// }
// console.log(duplicate_Array_Fun([3,2,2,3,1],3))

//---------------------------------------------------------------------------------







