//Write a function that accepts two numbers as parameters, and returns the sum.

function sum(num1, num2){
    return num1 + num2
}

var result = sum(100, 1)
    console.log(result)

var result = sum(50, 45)
    console.log(result)

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function bigNum(num1, num2, num3){
    return Math.max(num1, num2, num3)
}

var maxresult = bigNum(250, 55, 63)
    console.log(maxresult)


//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function OddEven(num){
    if(num % 2 === 0){return "EVEN"}
    else{return "ODD"}
}

var OddEven = OddEven(22)
    console.log(OddEven)


//Optional Challenges

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. You will need to use a string method or two:


function strings(string){
    if(string.length > 20){return string.slice(0, string.length/2)}
    else if(string.length <= 20){return string.concat(string, string)}
}

var string = strings("Functions are fun, but also confusing, all of this is hard for me")
    console.log(string)

var string = strings("Shorty String!!")
    console.log(string)