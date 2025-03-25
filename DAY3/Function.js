//function
console.log("1.Function intro")
function printMsg(){
	console.log("Hello JS")
}
printMsg()

console.log("2.Function Sum")
function sum()
{
	return 5+6
}
console.log(sum())

console.log("3.Function Sub")
function sub (a,b)
{
	return a-b
}
console.log(sub(5,3))

//write a boolean to find a given number is prime
console.log("4.Function Prime")
function isPrimeNum(num)
{
	isPrime = true
	
	if(num<=1)
	{
		isPrime = false;
	}
	else{
		for(let i = 2; i<=num/2; i++)
		{
			if(num%i==0)
			{
				isPrime = false;
				break;
			}
		}
	}
	return isPrime
}
console.log(isPrimeNum(2))
console.log(isPrimeNum(3))
console.log(isPrimeNum(4))
console.log(isPrimeNum(5))

//write recursive function to print numbers from 1 to n
console.log("5.Function Recursive")
function printNum(n)
{
	if(n==1)
	{
		console.log(n)
	}
	else{
		console.log(n)
		printNum(n-1)
	}
}
printNum(10)

//Arrow Function
console.log("6.Function Arrow")

const msg = ()=>
{return console.log("Hello JS")}
//console.log(msg)
msg()

//write an arrow function to sum 2 numbers
console.log("7.Function ArrowSum")
const summation = (a,b)=>
{return console.log(a+b)}
//console.log(msg)
summation(1,2)

//default parameter
console.log("8.Function ArrowDefaultParameter")
const mult = (a,b=2)=>
{return a*b}
console.log(mult(4,5))
console.log(mult(4))//here it will use default parameter for b

//Rest parameter:we can pass any number of parameters
console.log("9.Function ArrowRestParameter")
const mysum = (...n)=>
{
	console.log(n)
}
mysum(4,5,6,89,2)

//find the sum of the numbers usign rest parameter Function
console.log("10.Function ArrowRestParameter Sum")
const sumOfNum = (...n)=>
{
	let sum = 0
	n.forEach((i)=>
	{
		sum+=i
	})
	console.log(sum)
}
sumOfNum(4,5,6,89,2)


//find the sum of the numbers usign rest parameter Function 1
console.log("11.Function ArrowRestParameter Sum1")
const mysum1 = (...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum1(1,2,3,4,5))

//Callback Function
console.log("11.Function Callback")
const greet =(msg,fun)=>
{
	console.log("Hi.." + msg)
	fun()
}
greet("Good morning",()=>
{console.log("My name is Nafrin")})

const multwo = (n)=>n*3

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul (i)))
	
}
myarr(multwo,4,5,6,8,2)
