/**
 * Q1:- Wap to convert array(have not in key value pair) into object.
 * 
const arr = [1, 2, 3, 4];
console.log(typeof arr);
const obj = Object.assign({}, arr);
console.log(obj);

-------------------------------------------------------------------------

Q2:- Program to find longest word in a given sentence

let sen="i Love my hindustan india"

function check(sen){
    let str=''
  const temp=sen.toLowerCase().split(" ")
  for(let i=0;i<temp.length;i++){
      if(str.length<temp[i].length){
          str=temp[i]
      }
  }
  return str
}

console.log(check(sen))


-------------------------------------------------------------------------

Q3:- Find the max count of consecutive 1’s in an array


let arr = [1, 1,3, 2, 3, 1, 1, 1,8,7,6,1];

function check(arr){
    temp=[];
    count=0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==1){
            // console.log("==")
           
            count=count+1
            // console.log("==",count)
        }else{
            // console.log("--")
           
            if(count>0){
                temp.push(count)
                count=0
            }
        }
    }
         return Math.max(...temp) //also we use this
    return temp.sort((a,b)=>{return(b-a)})[0]
}

console.log(check(arr))

-------------------------------------------------------------------------

Q4:-Find the factorial of given number

let num=5
let temp=1
function check(num){
   if(num>0){
       temp=temp*num
       num--
       check(num)
   } 
   return temp
}

console.log(check(num))

-------------------------------------------------------------------------

Q5:- Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]

let arr1=[0,3,4,31]
let arr2=[4,6,30]

function check(arr1,arr2){
  return [...arr1,...arr2].sort((a,b)=>{return(a-b)})
}

console.log(check(arr1,arr2))

-------------------------------------------------------------------------

Q6:- . Create a function which will accepts two arrays arr1 and arr2.
 The function should return true if every value in arr1 has its corresponding value squared in array2. 
 The frequency of values must be same.
 
 let arr1=[2,3,4,2]
let arr2=[9,4,16,4]

function check(arr1,arr2){
    if(arr1.length !=arr2.length){
        return false
    }
    
    let temp1=[]
    let temp2=[]
    count=0
    temp1=arr1.map((el)=>{return(el*el)}).sort((a,b)=>{return(a-b)})
    
    temp2=arr2.sort((a,b)=>{return(a-b)})
    
    for(let i=0;i<temp2.length;i++){
        if(temp1[i]!=temp2[i]){
            count=count+1
        }
    }
    
    if(count>0){
        return false
    }else{
        return true
    }
    
    
}

console.log(check(arr1,arr2))

-------------------------------------------------------------------------

Q7:-Given two strings.
 Find if one string can be formed by rearranging the letters of other string.

let str1="hello"
let str2="leloh"

function check(str1,str2){
   const temp1=str2.split("").sort().join("")
   const temp2=str1.split("").sort().join("")
   
   return temp2===temp1
}

console.log(check(str1,str2))

-------------------------------------------------------------------------





 *
 */


