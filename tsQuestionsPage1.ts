/**
 * Q1: define explicit example
 * 
   let firstname: string = "radhesh";
   console.log(firstname);
-------------------------------------------------------------------------
Q2:- use of unknown type and also as keyword
i) let str:unknown="radhesh"
console.log((str as string).toUpperCase())

ii) let obj: unknown = {
    firstname: "radhesh",
    data: () => {
        return "hello world"
    }
}

console.log((obj as { data: () => void }).data())
note:-unknown represent typescript does not known the type. 
 as represent we force say to typescript we know the type.
 (str as string) or (obj as {data:()=>void}) bind the expression in parenthesis for casting 
 */





