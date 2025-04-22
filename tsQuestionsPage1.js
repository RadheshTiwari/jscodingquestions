/**
 * Q1: define explicit example
 *
   let firstname: string = "radhesh";
   console.log(firstname);
-------------------------------------------------------------------------
Q2:- use of unknown type and also as keyword
i) let str:unknown="radhesh"
console.log((str as string).toUpperCase())

ii)
 */
var obj = {
    firstname: "radhesh",
    data: function () {
        return "hello world";
    }
};
console.log(obj.data());
