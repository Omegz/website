"use strict";

//  let age= 8
//let firstName = "Omar"
// console.log(age)
// console.log(person.firstName)
//  window.alert ('u a fag')
// window.alert('ahahahaha')
// This here below is how to accept user input ( window.prompt)
// window.prompt('whats your age?')
// document.getElementById("p1").innerHTML = "hello " + age + " years old";
// document.getElementById("p2").innerHTML = "Your are " + firstName ;
// document.getElementById("p3").innerHTML = "rich man alert " + firstName + " ballin since a youngin " + age;
// let username = window.prompt('whats your name?')
// console.log(username)
// This here below is how to accept user input another method
// let username;
// document.getElementById("mybutton").onclick = function (){
// username = document.getElementById("myText").value;
//console.log(username)
//document.getElementById("myLabel").innerHTML = "hello "+username
// }  insert the bottom 2 into html to activate above:  <Label id="myLabel"> Enter your name:</Label><br>
//  <input type = "text" id="myText"><br>
//  <button type="button" id="mybutton">submit</button>
// TOPIC: TYPE CONVERISON 2 examples :

/*
   let age = window.prompt("how old are you?")

   console.log (typeof age)
    age = Number(age)
   age += 1

   console.log("Happy Birthday! You are ", age , " Years Old")

   console.log(typeof age)
   */

/* 
   let x
   let y
   let z


   x= Number("3.14");
   y= String(3.14);
   z= Boolean("")
   console.log(x,typeof x)

   console.log(y,typeof y)
   console.log(z,typeof z)
   */
// Topic: Math 

/*
   let x= 3.14
   let y = 6.62
   let z= 8.67
   let f= 2.27
   let n= 8.67
   let s= 3.14
   let o= 4
   let t= 4
   let j= -4
   let p= Math.PI

   x= Math.round(x)
   y= Math.round(y)
   z= Math.round(z)
   f= Math.round(f)

   n= Math.floor (n)
   s= Math.ceil (s)
   o=Math.pow(o,2)
   t=Math.sqrt(16,2)
   j= Math.abs (j)

   maximum = Math.max (x,y,z)
   minimum = Math.min (x,y,z)

   console.log(x)
   console.log(y)
   console.log(z)
   console.log(f)
   console.log(n)
   console.log(s)
   console.log(o)
   console.log(t)
   console.log(j)
   console.log(maximum)
   console.log(minimum)
   console.log(p)
   */

/*
let box=document.getElementById('box1').value


let result= document.getElementById('myLabel')

let answer= Math.floor(box)

let restartBtn=document.getElementById('restartBtn')


clicked()

function clicked(){
 result.innerHTML= "Answer:" + answer
}
   
   */

/*
Pythagros first way
let a= window.prompt ("what is a")
 let b = window.prompt ("what is b")
 a= Number(a)
b=Number(b)
 a= Math.pow (a,2)
b=Math.pow (b,2)
 answer = a + b
 result = Math.sqrt(answer)
 console.log(result)
 DID IT ON MY OWN
  */

/*

    let a
    let b
    let c 

   document.getElementById("submitButton").onclick= function(){
       a=  document.getElementById("aTextBox").value ;
       a= Number(a);

       b=  document.getElementById("bTextBox").value ;
       b=Number(b)

       c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

       document.getElementById("cLabel").innerHTML= "Side C: " + c

   }

html file:

       <label id="aLabel"></label>Side A:<br>
    <input type="text" id="aTextBox"><br>
    <label id="bLabel"></label>Side B:<br>
    <input type="text" id="bTextBox"><br>
    <button type="button" id="submitButton">Submit</button><br>
    <label id="cLabel"></label><br>
  
   */
//Notes 
//<span> lets you color the words in html
// Creation of a counter program:

/*
let count= 0

document.getElementById("decreaseBtn").onclick = function(){
count-=1
document.getElementById("countLabel").innerHTML= count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0
document.getElementById("countLabel").innerHTML= count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1
document.getElementById("countLabel").innerHTML= count;
}

down here is the HTML working for it

    <label id="countLabel"><span style="color:olivedrab" >0</span></label><br>
    <button id="decreaseBtn">decrease</button>
    <button id="resetBtn">reset</button>
    <button id="increaseBtn">increase</button>

here is the css

#countLabel{
    display: block;
    text-align: center;
    font-size: 50px;
}
*/
// random number generator Between 1 and 6 ( 3 examples)

/*
let x= Math.floor(Math.random()*6)+1

console.log(x)
*/

/*
 let x= Math.floor(Math.random()*6)+1
let y= Math.floor(Math.random()*6)+1
 let z= Math.floor(Math.random()*6)+1

 console.log(x)
console.log(y)
console.log(z)
*/

/* example 3 
document.getElementById("myButton").onclick=function(){
   let x= Math.floor(Math.random()*6)+1
   let y= Math.floor(Math.random()*6)+1
   let z= Math.floor(Math.random()*6)+1 
   document.getElementById("xLabel").innerHTML=x
   document.getElementById("yLabel").innerHTML=y
   document.getElementById("zLabel").innerHTML=z
}

HTML:

   <label id = xLabel></label><br>
    <label id = yLabel></label><br>
    <label id = zLabel></label><br>
    <button id="myButton">roll</button>

    CSS:

    #xLabel{
    display: block;
    text-align: center;
    font-size: 10px;
    font-style: italic;
}

#yLabel{
    display: block;
    text-align: center;
    font-size: 20px;
    font-style: inherit;
}

#zLabel{
    display: block;
    text-align: center;
    font-size: 30px;
    font-style: unset;
}
#myButton{
    display: block;
    text-align: center;
    font-size: 40px;
    font-style: unset;
    
}

*/
// useful string methods
// let username = '   Mafia Boss    '
// let phonenumber = '+45 602345+64321'
// console.log (username.length)
// console.log (username.charAt(5))
//console.log (username.indexOf('B'))
//console.log (username.lastIndexOf('s'))
//username = username.trim()
// console.log(username)
// username=username.toUpperCase
// .tolowercase
// phonenumber=phonenumber.replaceAll('+','/')
// console.log(phonenumber)
// Topic : string slicing

/*
let fullName= 'Mafia Boss Soprano';
let firstName;
let lastName;

lastName= fullName.slice(10)

console.log(lastName.trim())

firstName= fullName.slice(0,6)
console.log(firstName)
*/
// method 2

/*
let fullName= 'Mafia Boss Soprano';
let firstName;
let lastName;

lastName=fullName.slice(fullName.indexOf (' ') +1 ) 

firstName=fullName.slice(0,fullName.indexOf(' '))

console.log(lastName)
console.log(firstName)

*/
// Topic : method chaining

/* 
let userName= 'mafia'

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter)
*/
// Topic : checked property

/* example 1

document.getElementById('submitBtn').onclick = function(){
   if (document.getElementById('inputBox').checked ){
      console.log ('You are a member')
   }
   else {
      console.log( 'You are a loser')
   }
}

In HTML

   <label id="firstLabel">Subscribe</label> 
    <input type="checkbox" id="inputBox"> </input><br>
    <button id="submitBtn">Submit</button>
  
*/

/* example 2
submitBtn.onclick= function(){

const inputBox= document.getElementById('inputBox');

const visaBtn= document.getElementById('visaBtn')
const MasterBtn= document.getElementById('MasterBtn')
const MbappeBtn= document.getElementById('MbappeBtn')
const submitBtn= document.getElementById('submitBtn')


if (inputBox.checked){
   console.log('You are a member')
}

else {
   console.log ('You are a loser')
}


if (visaBtn.checked)
{
console.log('Visa boy')
}

else if (MasterBtn.checked){
   console.log('Masterbaker')
}
else if (MbappeBtn.checked) {
   console.log ('Mbappe a moneychasing cunt bitch')
}
else {
   console.log ('you broke')
}
}

HTML needed :

   <label for="firstLabel">Subscribe</label> 
    <input type="checkbox" id="inputBox"> </input><br>


    <label for ='visaBtn' >Visa</label>
    <input type="radio" name ='card' id = visaBtn><br>
    <label for ='MasterBtn' >Mastercard</label>
    <input type="radio" name ='card' id = MasterBtn><br>
    <label for ='MbappeBtn' >Mbappe</label>
    <input type="radio" name ='card' id = MbappeBtn><br>
    <button id="submitBtn">Submit</button>
  
    <script src="index.js"> </script>

    */
// topic : switches

/* example 1

let grade = 'c'

switch(grade){
   case 'a':
      console.log('Noice')
      break;
   case 'b':
      console.log('haaa')
      break;
   case 'c':
      console.log('hmmmmm')
      break;
   case 'd':
      console.log('Loser')
      break;
    case 'f':
      console.log('AHAHHAAHHA')
      break;
          default:
         console.log ('not a grade')
}
*/

/* example 2
let grade = '-105'

switch(true){
   case grade >= 90:
      console.log('Noice')
      break;
   case grade >= 80:
      console.log('haaa')
      break;
   case grade >= 70:
      console.log('hmmmmm')
      break;
   case grade >= 60:
      console.log('Loser')
      break;
    case grade > 60:
      console.log('AHAHHAAHHA')
      break;

      default:
         console.log ('not a grade')
}
*/
// Topic : Logical operators

/*
let temp = 35

if (temp > 0 && temp < 30){
   console.log('Drop it like its hawt')
}
else{
   console.log('Is cold world Brudda')
}
*/

/*
let temp = 29

if (temp <= 0 || temp >= 30){
   console.log('Is cold world Brudda')
}
else{
   console.log('Drop it like its hawt')
}
*/

/*
let temp = 50
let sunny = true

if (temp > 0 && temp < 30 && sunny){
   console.log('Drop it like its hawt')
}
else{
   console.log('Is cold world Brudda')
}
*/
// Topic: non logical operator
// !
// Topic: do while loop

/*
for ( let i = 0; i <= 10 ; i++){
   if (i==5){
      break
   }
   console.log(i)
}
*/

/*
for ( let i = 0; i <= 10 ; i++){
   if (i==5){
      continue
   }
   console.log(i)
}
*/

/* Topic: Nested loop

let rows=window.prompt('enter rows')
let columns=window.prompt('enter columns')


for (let i=1; i<=rows; i++){
   for (let j=1; j<=columns; j++){
      document.getElementById('myTable').innerHTML += j
     
   }   
   document.getElementById('myTable').innerHTML += '<br>'
}

Html :
 <label id="myTable"></label>
*/
// topic : function

/*
function happyBirthday (){
   console.log ('Happy birthday 2 u');
     console.log ('Happy birthday 2 u');
   console.log ('Happy birthday 2 u');
   console.log ('Happy birthday dear u');
   console.log ('Happy birthday 2 u');
}

happyBirthday()
happyBirthday()
happyBirthday()
happyBirthday()
*/

/*
let area
let  width
let height

width=window.prompt('enter width')
height=window.prompt('enter height')

area= getArea(width, height)

function  getArea(width,height){
   let result= width * height
   return result  
}
console.log(area)
*/
// Topic: ternary operator

/*
let adult= checkAge(1)
console.log(adult)

function checkAge(age){
   return age >=18? true : false
}
*/

/*
checkWinner(true)

function checkWinner(win){
   win? console.log('u win'):console.log('u lose')
}
*/

/* Topic: template litterals
let username = "nigga";
let items=69;
let total = 6969; 

let text = 
`Hey ${username}<br>
You have ${items} items up ur ass<br>
the total will be $${total}`

document.getElementById("myLabel").innerHTML = text

Html:

 <label id = "myLabel"></label>
*/
// let myNum= 20
// myNum= myNum.toLocaleString('en-US')
// myNum= myNum.toLocaleString('hi-IN')
// myNum= myNum.toLocaleString('de-GR')
// myNum= myNum.toLocaleString('dk-DK')
// myNum= myNum.toLocaleString('en-US', {style: 'currency', currency:'USD'})
// myNum= myNum.toLocaleString('hi-IN', {style: 'currency', currency:'INR'})
// myNum= myNum.toLocaleString('de-GR', {style: 'currency', currency:'EUR'})
// myNum= myNum.toLocaleString(undefined, {style: 'percent'})
// myNum =myNum.toLocaleString(undefined,{style:'unit', unit: 'celsius' })
// console.log(myNum)

/*
Guess game 

const answer = Math.floor(Math.random()*10+1)

let guesses = 0

let guess = inputbox

document.getElementById('submitbtn').onclick= function (){
let guess = document.getElementById('inputbox').value
guesses += 1
if (guess == answer){
   alert (`${answer} is correct. on the ${guesses} to get it`)
}
else if (guess < answer){ 
   alert ('too small')

}
else {
   alert('too big')
}
}
HTML
 <h1 id="myTitle">Number Guessing Game</h1><br>
   <p id="pick">Pick a # between 1-10</p><br>
   <label id="inputlabel">Enter a guess </label> <input id="inputbox"></input><br>
   <button id="submitbtn">submit</button>

    <script src="index.js"> </script>
   
*/
// temp conversion program 1

/*

let temp = 32
temp = toFarenheit(temp);
console.log(temp)

function toCelsius(temp){
   return (temp-32) * (5/9);
}

function toFarenheit(temp){
   return temp * 9 / 5 + 32;
}
*/
// temp conversion program 2

/*
document.getElementById('btn').onclick=function(){
   let temp;
   if (document.getElementById('nikebox1').checked){
     temp=document.getElementById('inputbox').value ;
     temp = Number(temp);
     temp = toCelsius(temp)
     document.getElementById('result').innerHTML= temp + '°C'
   }
   else if (document.getElementById('nikebox2').checked){
    temp = document.getElementById('inputbox').value;
    temp = Number(temp)
    temp = toFarenheit(temp)
    document.getElementById('result').innerHTML = temp + '°F'

   }
   else {
      document.getElementById('result').innerHTML='select one dumbass'
   }
 
}



function toCelsius(temp){
   return (temp-32) * (5/9);
}

function toFarenheit(temp){
   return temp * 9 / 5 + 32;
}

HTML :

  <label id="text1">Enter a temperature:</label>
    <input type="text"  id="inputbox"></input>
    <p id="text2">Convert to:</p>
    <input type= "radio" id="nikebox1" name = 'unit'></input>
    <label>Celsius</label><br>
    <input type= "radio" id="nikebox2" name="unit"></input>
    <label>Farenheit</label><br><br>
    <button type="button" id="btn">Submit</button><br>
    <label id="result"></label>

   */
// Topic : Arrays

/*

let thotianas= ['Emily', 'Sara','Maggie']

// thotianas [0] = 'Bianca'

// thotianas.push('Lea')

// thotianas.pop()

// thotianas.unshift('Jimena') // adds elememet to begining

// thotianas.shift() // removes first element

let length = thotianas.length

let index= thotianas.indexOf('Maggie')

console.log (thotianas[1])
 console.log(thotianas[0])
 console.log(length)
 console.log(index)
 */
// Topic: iterate over an array 
// method 1 i alreay know 

/*
method 2
 let bitches = ['Maya','Maggie','Sara','Honney','Anne','Urmama']

 for ( let i of bitches){
    console.log(i)
 }

 */
// method 3

/*

 let bitches = ['Maya','Maggie','Sara','Honney','Anne','Urmama']

 for ( let thots of bitches){
    console.log (thots)
 }
 */

/* sort an array in order

 let bitches = ['Maya','Maggie','Sara','Honney','Anne','Urmama']

// bitches = bitches.sort()

bitches = bitches.sort().reverse()

 for ( let thots of bitches){
    console.log(thots)
 }
*/
// Topic : 2D Arrays

/*

let fruits=  ['apples','oranges','bananas']
let veggies= ['carrots','cucumbers','persille']
let meat=    ['beef','duck','fish']

let GroceryList = [fruits, veggies, meat];

GroceryList[2][2]= 'omak'

for (let list of GroceryList){
   for (let food of list){
      console.log(food)

   }
}
*/
// Topic: spread operator

/*
let number = [1,2,3,4,5,6,7,8,9];
console.log(...number)
console.log(number)
*/

/*
let class1= ['a','b','c']
let class2= ['d','e','f','b','e']

let school = [...class1,...class2]

class1.push(...class2)

console.log(...class1)
console.log (...school)
*/

/* rest parameters (sum )
let a= 1
let b= 2
let c= 3
let d= 4
let e= 5

console.log(sum(a,b,c,d))

function sum (... numbers){
   let total = 0
for (let number of numbers){
   total += number
}
return total
}

*/
// Callback

/*
sum (2,3,4,1,displaydom)

function sum (x,y,z,a,callback){
   let result = x+y+z+a;
   callback(result)
}

   function displayConsole (output){
      console.log(output)
   }

   function displaydom(output){
      document.getElementById('mylabel').innerHTML = output
   }
   */
// Topic : for each

/*
   let bitches = ['maggie','carly','johanne','mama']
   bitches.forEach(projectcapital)
   bitches.forEach(print)

   function projectcapital (elememet,index,array){
      array[index] = elememet[0].toUpperCase()+elememet.substring(1)
   }

   function print(elememet){
      console.log (elememet)
   }
   */
// Topic: array.map

/*
   let numbers = [1,2,3,4,5];

   let squares = numbers.map(square)

   squares.forEach(print)

   function square(element){
      return Math.pow(element,2)
   }

   function print(element){
      console.log(element)
   }
*/
// topic : array.filter

/*
   let ages = [16,18,21,13,12,19,45,102,3,0,-4]
   let ofAge=ages.filter(legal)
   
   ofAge.forEach(print)

   function legal(element){
      return element >= 18
   }

   function print(element){
      console.log(element)
   }
   
*/
// Topic : array.reduce

/*
let prices=[13,12,0.4,0.5,25,69,101]
let total= prices.reduce(sum)

console.log(total)

function sum(total,element){
   return  total+element
}
*/

/*
let prices=[13,12,0.4,0.5,25,69,101,1]
let total= prices.reduce(sum)

console.log(`The total is total: $${total}`)

function sum(total,element){
   return  total+element
}
*/

/*
let grades = [100, 40, 60, 90, 20, 80, 100, 30, 0]
grades = grades.sort(descending)
grades.forEach(print)

function descending(x,y){
  return y-x}

//function ascending(x,y){
  //  return x-y}

function print(element){
   console.log(element)
}
*/

/*
let count = 0

function increasecount(){
   count += 1;
   document.getElementById('mylabel').innerHTML = count;
}
function decreasecount(){
   count -=1;
   document.getElementById('mylabel').innerHTMl = count;
}

Html :

  <label id="mylabel">0</label><br>
  <button id="decreasebtn" onclick="decreasecount()">decrease</button>
  <button id="increasebtn" onclick="increasecount()">increase</button>
  <script src="index.js"> </script>
*/
// Topic: function expressions

/*
let count = 0

document.getElementById('increasebtn').onclick= function(){
   count +=1
   document.getElementById('mylabel').innerHTML = count;

}

document.getElementById('decreasebtn').onclick= function(){
   count -=1
   document.getElementById('mylabel').innerHTML = count;

}

Html:

  <label id="mylabel">0</label><br>
  <button id="decreasebtn" >decrease</button>
  <button id="increasebtn" >increase</button>
*/
// const greeting = (username) => console.log(`hello ${username}`);
// greeting ('Omar')

/*
const percent= function(x,y){
   return (x/y)*100
}

console.log(`${percent(80,150)}%`)
*/

/*
const percent= (x,y)=> (x/y)*100

console.log(`${percent(45,60)}%`)
*/
// Topic : arrow

/*
let grades= [100,50,90,60,80,70,0]
grades.sort(function (x,y){
   return y-x
})

grades.forEach(function(element){
   console.log (element)
})

*/

/*
let grades= [100,50,90,60,80,70,0]

grades.sort((x,y) => y-x)

grades.forEach((element) => console.log (element)
)
*/
// topic : shuffle

/*
let cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

shuffle (cards);
//console.log(cards[0])
//console.log(...cards)
cards.forEach(card => console.log(card))

function shuffle(array){
   let currentindex = array.length

   while (currentindex != 0){
      let randomindex= Math.floor(Math.random()*array.length)
      currentindex-=1;

      let temp = array [currentindex];
      array[currentindex]=array[randomindex];
      array[randomindex]= temp
      }
      return array
}
*/
// Topic: Nested Functions

/*
let username='Tony Soprano'

let inbox = 69
login()
function login(){
displayname()
displayibox()
function displayname(){
   console.log(`Top of the morning Skip. You are the great ${username}`)
}
function displayibox(){
   console.log(`You got ${inbox} new messages waiting you Mr.${username}`)
}

}
*/
// Topic: Map

/*
const store = new Map([
   ['t shirt',20],
   ['jeans',30],
   ['glasses',60],
   ['socks',90]

]);

store.forEach((value,key)=> console.log(`${key} $${value}`))

*/

/*
const store = new Map([
   ['t shirt',20],
   ['jeans',30],
   ['glasses',60],
   ['socks',90]

]);
//store.set('shoes',420);

// store.delete('jeans')

// console.log(store.has('drip'))

// console.log(store.size)

let cart=0
//cart+= store.get('t shirt')
//cart+= store.get('socks')
//console.log(cart)

store.forEach((value,key)=> console.log(`${key} $${value}`))

*/
// Topic : objects

/*
const car= {
model: 'Rari',
color: "red",
year: '202020',
owner:'Omar',

drive : function(){
   console.log('Damn Boiii')
},
brake : function(){
   console.log('Relaxx Guyy')
}
}

console.log(car.owner,car.color,car.model)
car.drive()
*/

/*
const price= new Map([
   ['weed',100],
   ['drops',60],
   ['juice',20],
   ['paper',5]

])

*/
// Topic : class

/*
class player{
   score = 0

   pause(){
      console.log('paused')
   }

   exit(){
      console.log('you have exited')
   }
}

const player1=new player()

player1.score+=1

console.log(player1.score)

player1.exit()
*/
// Topic : constructor

/*
class student {
   constructor(name, age, gpa){
       this.name = name;
       this.age = age;
       this.gpa = gpa;

   }
   study (){
      console.log(`${this.name} is fucking busy upping their ${this.gpa},nobody is ${this.age}forever dawg`)

   }
}

const student1= new student('Tony',23,4)
console.log (student1.age,student1.gpa,student1.name)

student1.study()

*/

/*
class car{
   numberofcars=0
   constructor(model){
      this.model = model
      this.numberofcars+=1
   }
}

const car1= new car ("Rari")
const car2= new car ("RR")
const car3= new car ("Lambo")

console.log(car.numberofcars)

*/

/*
class car{
   static numberofcars=0
   constructor(model,year){
      this.model = model
      this.year= year
      car.numberofcars+=1
   }
  static startrace(){
      console.log('3...2..1..Go')
   }
}

const car1= new car ("Rari",2015)
const car2= new car ("RR")
const car3= new car ("Lambo")
const car4=new car ('A.M')


console.log(car.numberofcars)
console.log(car1.year)
car.startrace()
*/
// topic: Inheritance

/*
class alive{
    alive = true;

    eat(){
       console.log(`This ${this.name} is eating`)
    }

    sleep(){
      console.log(`This ${this.name} is sleeping`)
   }
}

class rabbit extends alive{
   name= 'rabbit'

   run(){
      console.log(`This ${this.name} is running`)
   }
}

class fish extends alive{
   name= 'fish'

   swim(){
      console.log(`This ${this.name} is swimming`)
   }
}

class hawk extends alive{
   name= 'hawk'

   fly(){
      console.log(`This ${this.name} is flying`)
   }
}

const rabbit1= new rabbit
const hawk1 = new hawk
const fish1= new fish

fish1.swim()

console.log (rabbit1.alive)
*/
// Topic : super

/*
class alive{
   constructor (name,age){
      this.name=name
      this.age=age
   }
  

 
}

class rabbit extends alive{
   constructor(name,age,runspeed){

  super(name,age)
   this.runspeed = runspeed


}
}


class fish extends alive{
   constructor(name,age,swimspeed){
      super(name,age)
      this.swimspeed=swimspeed


   }
 
}


class hawk extends alive{
   constructor(name,age,flyspeed){
      super(name,age)
      this.flyspeed=flyspeed


}
}

const rabbit1= new rabbit ('Rabbit10',4,40)
const fish1= new fish ('Fish10',2,60)
const hawk1= new hawk ('Hawk10',6,80)

console.log(fish1.name)

*/
// Topic: Setters and Getters

/*
class car {
   constructor(power){
      this._power=power
      this._gas=69
   }

   get power(){
      return `${this._power}HP`
   }
   get gas(){
      return `${this._gas} gallons left ${this._gas/150*100}% left`
   }
   set gas(value){
      if (value>150){
         value=150;
      }
      else if (value<0){
         value = 0
      }
      this._gas= value
   }
}

let Rari1= new car(2000)

Rari1.gas=100000000

console.log(`The red Rari has a horspower of ${Rari1.power}, and has ${Rari1.gas}`)
*/
// Topic: objects and arguemnts 

/*
class car{
   constructor(model,year,color){
      this.model=model
      this.year=year
      this.color=color
   }
}

const Ferrari = new car('LaFerrari',2022,'bloodred')

changcolor(Ferrari,'pink')

function displayinfo (Car){
   console.log(`The model of this beautiful Ferrari is ${Car.model}, the year is ${Car.year} and the color is
   ofcourse nothing but the finest ${Car.color}.`)
}

displayinfo (Ferrari)

// extra 
function changcolor (Car,color){
   Car.color= color
}
*/
// Topic: array of objects

/*
class car{
   constructor(model,year,color){
      this.model=model
      this.year=year
      this.color=color
   }
   drive(){
      console.log(`You drive the ${this.model}`)
   }
}


const Ferrari = new car('LaFerrari',2022,'bloodred')

const Lamborgini= new car('Aventador',2024,'VitaminBPissYellow')

const Audi = new car ('R8',2030,'blaknYellow')

const cars= [Ferrari,Lamborgini,Audi]

// console.log(cars[1].model)

// cars[1].drive()

startrace(cars)

function startrace(cars){
   for (const car of cars){
      car.drive()
   
   }
}
*/
// TOPIC : anonymous objects
//example 0

/*
class card{
   constructor(value, suit){
      this.value=value
      this.suit=suit

   }
}


const Aspade = new card('A','spades')

const Qhearts= new card ('Q','Hearts')

const Ahearts = new card('A','Hearts')

const card4 = new card('A','Diamonds')

const card5= new card ('Q','Spades')

const card6 = new card('A','Clubs')

const card7 = new card('8','Diamonds')

const card8= new card ('8','Spades')

const card9 = new card('8','Clubs')

let cards =[Aspade,Qhearts,Ahearts,card4,card5,card6,card7,card8,card9]

console.log(card7.value,card7.suit)

console.log(cards[0].value+cards[0].suit)

*/
// exmpl: 2

/*
class card{
   constructor(value, suit){
      this.value=value
      this.suit=suit

   }
}


let cards =[new card('A','spades'), new card ('Q','Hearts'),new card('A','Hearts')
,new card('A','Diamonds'),new card ('Q','Spades'),new card('A','Clubs'),
new card('8','Diamonds'),new card ('8','Spades'),new card('8','Clubs')]

console.log(cards[8].value+cards[8].suit)

cards.forEach(card=> console.log(`${card.value} of ${card.suit}`))
*/
// Topic : error

/*
try{
   let x= window.prompt('enter a number bitch')
   x=Number(x)
   if(isNaN(x)) throw 'Thats not a number dumb bitch'
   if (x=="") throw 'I said enter a number bitch'

   console.log(`${x} is indeed a number`)

}

catch (error){
   console.log(error)
}

finally {
   console.log('no matter what u a hoe')
}
*/
// Topic: setTimeout()

/*
let item= 'cryptocurrency'
let price= 420.69

let timer1= setTimeout(firstmessage,3000,item,price)
let timer2= setTimeout(secondmessage,6000)
let timer3= setTimeout(thirdmessage,9000)

function firstmessage(item,price){
   alert(`Buy this ${item} for ${price} dollars`)
}

function secondmessage(){
   alert(`Not a scam`)
}

function thirdmessage(){
   alert(`DO IT BITCH`)
}

document.getElementById('myButton').onclick= function(){
   clearTimeout(timer1)
   clearTimeout(timer2)
   clearTimeout(timer3)
   alert(`GRACIAS HERMANO`)
}
*/

/*
let count = 0 

let max = window.prompt('Count up to what number')

max= Number(max);

const mytimer= setInterval(countUp,1000)

function countUp(){
   count += 1
   console.log(count)
   if (count >= max){
      clearInterval(mytimer)
   }
}
*/

/*
let date = new Date()
//let date = new Date(1000)
// let date = new Date(2000,2,27,8,8,8)
 let date = new Date('27 March, 2000 06:06:06')


let year=date.getFullYear()
let day = date.getDay()
let dayofmonth= date.getDate()
let month= date.getMonth()

*/
//date.setFullYear(2026)
//date.setHours(15)
// date= date.toLocaleString()

/*
console.log(formatDate(date))
document.getElementById('mylabel').innerHTML= formatDate(date)

function formatDate(date){
   let year = date.getFullYear()
   let month = date.getMonth()+1
   let day= date.getDate()
   return `${day}/${month}/${year}`

}

function formatTime(date){
   let hour= date.getHours()
   let minutes= date.getMinutes()
   let seconds = date.getSeconds()
   let ampm = hour >= 12 ? 'pm' : 'Am' 
   hour= (hour%12)|| 12
   return `${hour}:${minutes}:${seconds} ${ampm}`
}

console.log(formatTime(date))
*/

/*
const mylabel= document.getElementById('mylabel')
setInterval(update,1000)

function update(){
   let date = new Date()
   mylabel.innerHTML= format(date)

   function format(){
      let hours=date.getHours()
      let minutess=date.getMinutes()
      let seconds=date.getSeconds()
      let ampm= hours >= 12 ? 'Pm':' Am'
      hours= (hours%12)|| 12

      hours=add0(hours)
      minutess=add0 (minutess)
      seconds = add0 (seconds)
      
      return `${hours}:${minutess}:${seconds} ${ampm}`

   }
   function add0(time){
      time=time.toString()
      return time.length < 2 ? '0'+time : time

   }
}

update()

*/

/*

console.time('response')

alert('bitch')

console.timeEnd('response')
*/

/*
const promise = new Promise((resolve,reject) => {
   let fileloaded = false

   if (fileloaded){
      resolve('success')
   }
   else {
      reject ('fail')
   }
}

)

promise.then(value=> console.log(value)).catch (error=>console.log(error))
*/
// topic promises

/*
const promise= new Promise(resolve =>{
   setTimeout(resolve,5000)

}
)
promise.then(()=> console.log('Thanks'))
*/

/*
const wait= time => new Promise(resolve =>{
   setTimeout(resolve,time)

}
)
wait(3000).then(()=> console.log('Thanks'))
*/

/*
async function loadfile(){
   let fileloaded = true

   if (fileloaded){
      return'success'
   }
   else {
      throw 'fail'
   }
}

loadfile().then(value => console.log(value)).catch(other=> console.log(other))
*/

/*
function loadfile(){
   let fileloaded = false

   if (fileloaded){
      return Promise.resolve("Success")
   }
   else {
      return Promise.reject('fail')
   }
}

loadfile().then(value => console.log(value)).catch(other=> console.log(other))
*/

/*
async function loadfile(){
   let fileloaded = false

   if (fileloaded){
      return'success'
   }
   else {
      throw 'fail'
   }
}

async function startprocess(){
try{
let message= await loadfile();
console.log(message)
}
catch(error){
console.log(error)
}}

startprocess()
*/
// change HTML elements

/*
const nametag= document.createElement('h1')
 
nametag.innerHTML= 'bimbo'
document.body.append(nametag)
*/

/*
const nametag= document.createElement('h1')
 
nametag.innerHTML= window.prompt('enter your name')
document.body.append(nametag)

nametag.style.backgroundColor= 'lightgreen'
*/

/*
const list= document.querySelector('#fruit');

const item=document.createElement('li')

item.textContent='Mango'

// list.append(item)
// list.prepend(item)

list.insertBefore(item,list.getElementsByTagName('li')[1])


Html:
 <ul id="fruit">
     <li>apple</li>
     <li>orange</li>
     <li>banana</li>
 </ul>

  
  <script  src="index.js"> </script>
   
*/
// add title in html then change its propeperties

/*
const title=document.getElementById('myTitle');

// title.style.backgroundColor = 'rgb(50,200,250'

// title.style.backgroundColor = '#935238'

// title.style.color='rgb(50,200,500)'

title.style.fontFamily = 'Arial'

title.style.textAlign='center'

title.style.border = '9px solid'

title.style.display= 'block'

*/
// const element= document.getElementById('myButton')
// element.onclick = didClick

/*
const element= document.getElementById('myDiv')

//element.onload= didClick

//element.onmouseover= didClick
//element.onmouseout = leftBox

element.onmousedown =didClick

element.onmouseup=leftBox

//element.onchange= didClick

function didClick(){
   element.style.backgroundColor='green'
}
 
function leftBox (){
   element.style.backgroundColor='aquamarine'
}

html:

  <button id="myButton"> Button </button>
  <input id="myTextbox">
  <div id="myDiv"></div>

  css:

  #myDiv{
    background-color: aquamarine;
    width: 100px;
    height: 100px;
}

*/

/*
const innerDiv= document.getElementById('innerDiv')


innerDiv.addEventListener('mouseover',changeBlue)
innerDiv.addEventListener('mouseout',changeBack)

function changeBlue (){
   innerDiv.style.backgroundColor= 'blue'
}

function changeBack (){
   innerDiv.style.backgroundColor='aquamarine'
}


<div id="innerDiv"></div>
</div>

#innerDiv{
    background-color: aquamarine;
    width: 100px;
    height: 100px;
    border: 1px solid;
}
*/

/*
const innerDiv= document.getElementById('innerDiv')
const outerDiv= document.getElementById('outerDiv')

innerDiv.addEventListener('click',changeBlue)
outerDiv.addEventListener('click',changeBlue)

function changeBlue (){
   this.style.backgroundColor= 'blue'
}

function changeBack (){
   innerDiv.style.backgroundColor='aquamarine'
}


<div id="outerDiv">
  <div id="innerDiv"></div>
</div>

#innerDiv{
    background-color: aquamarine;
    width: 100px;
    height: 100px;
    border: 1px solid;
}

#outerDiv{
    background-color: crimson;
    width: 200px;
    height: 200px;
}

*/

/*
const myButton = document.querySelector('#myButton')

const myImg = document.querySelector('#myImg')

myButton.addEventListener('click',()=>{
   if(myImg.style.display== 'none'){
      myImg.style.display= 'block'
   }
   else{
      myImg.style.display='none'
   }
})

<button id="myButton">toggle</button><br>
<image id="myImg" src="BudaBike.jpeg" style="display: none"></image>
<p>Press the button...</p>


#myImg{
    width: 400px;
}
*/

/*
window.addEventListener('keydown',event=> console.log(event.key))

const myDiv=document.getElementById('myDiv');
let x=0
let y=0
window.addEventListener('keydown',move)

function move(event){
   switch(event.key){
      case 'ArrowDown':
         y+=5;
         myDiv.style.top= y+'px';
         break
   
      case 'ArrowUp':
         y-=5;
         myDiv.style.top= y+'px';
         break
      case 'ArrowRight':
         x+=5;
         myDiv.style.left= x+'px';
         break
         case 'ArrowLeft':
            x-=5;
            myDiv.style.left= x+'px';
            break
            default:
               break
   }
   }

   <div id="myDiv"></div>

   #myDiv{
    background-color: aquamarine;
    width: 100px;
    height: 100px;
    border:1px solid;
    position: relative;
}

*/

/*
const myButton=document.getElementById('myButton')
const myBox=document.getElementById('myDiv')

myButton.addEventListener('click',begin)

function begin(){
   let timerId=null;
   let x=0
   let y=0
   let degrees=0

   timerId= setInterval (frame,5)
   function frame(){
      if(x>=200 || y>=200 || degrees>=360){
         clearInterval(timerId)
      } else{
         degrees+=1
         y+=1
         x+=1;
         myBox.style.left=x+ 'px'
         myBox.style.top=y+ 'px'
         myBox.style.transform= 'rotateZ('+degrees+'deg)'
      }
   }
}
*/

/*

const myButton=document.getElementById('myButton')
const myBox=document.getElementById('myDiv')

myButton.addEventListener('click',begin)

function begin(){
   let timerId=null;
   let ScaleX=1
   let ScaleY=1
   
   timerId= setInterval (frame,5)

   function frame(){
      if(ScaleX>=3 || ScaleY>=3){
         clearInterval(timerId)
      } else{
         
         ScaleX+=0.01
         ScaleY+=0.01;
  
         myBox.style.transform= 'scale('+ScaleX+','+ScaleY+')'
      }
   }
}
*/

/*
let canvas=document.getElementById('myCanvas');
let context= canvas.getContext('2d')

/*
context.lineWidth=10
context.strokeStyle= 'purple'
context.beginPath();
context.moveTo (0,0)
context.lineTo (500,500)
context.stroke()

context.beginPath()

context.arc(200,200,100,0, 2* Math.PI)
context.stroke()
context.fillStyle='blue'
context.fill()

*/

/*
console.log(window.innerWidth)
console.log(window.innerHeight)

console.log(window.scrollX)
console.log(window.scrollY)
*/
//console.log(window.location.href)
//window.location.href= 'https:google.com'
//console.log(window.location.hostname)

/*
myButton=document.querySelector('#myButton');

myButton.addEventListener('click',() => window.open())
*/
//indow.confirm('bitch')

/*
let age=window.prompt('enter your age')

if (age<18){
      window.alert('Go for it')
      window.open()
   }
*/
// console.log(navigator.cookieEnabled)
// document.cookie='firstName=OGKush; expires= Sun, 27 March 2030 12:00:00 UTC; path=/'
// console.log(document.cookie)

/*
setCookie('email','malakshfi@gmail.com','365')
console.log(document.cookie)
*/

/*
setCookie('fornavn','Omar','365')
setCookie('efternavn','Legend','365')


function setCookie(name,value,daysToLive){
   const date= new Date();
   date.setTime(date.getTime()+daysToLive*24*60*60*1000)
   let expires = 'expires='+date.toUTCString;
   document.cookie= `${name}=${value};${expires};path=/`
}

function deleteCookie(name){
   setCookie(name,null,null)
}

function getCookie(name){
   let cDecoded=decodeURIComponent(document.cookie)
   // console.log(cDecoded)
   const cArray=cDecoded.split(';')
   console.log(cArray)
}

getCookie('fornavn')
*/
// come back to cookies in the future mnaybe

/*
const timeDisplay= document.querySelector('#timeDisplay')
const startBtn= document.querySelector('#startBtn')
const pauseBtn= document.querySelector('#pauseBtn')
const resetBtn= document.querySelector('#resetBtn')

let startTime=0

let elapsedTime=0

let currentTime=0

let paused= true

let intervalId;

let hrs=0

let mins = 0

let secs=0

startBtn.addEventListener("click",() => {
   if (paused){
      paused=false
      startTime=Date.now()-elapsedTime
      intervalId=setInterval(updateTime,1000)
   }
})

pauseBtn.addEventListener("click", () =>{
   if (!paused){
      paused=true
      elapsedTime= Date.now()-startTime
      clearInterval(intervalId)
   }
})

resetBtn.addEventListener('click', ()=>{
   paused=true;
   clearInterval(intervalId)
   startTime=0
   elapsedTime=0
   currentTime=0
   hrs=0
   mins=0
   secs=0
timeDisplay.textContent='00:00:00'
})

function updateTime(){
   elapsedTime=Date.now()-startTime
secs= Math.floor((elapsedTime/1000)%60)
mins= Math.floor((elapsedTime/(1000*60))%60)
hrs= Math.floor((elapsedTime/(1000*60*60))%60)


hrs=pad(hrs)
secs=pad(secs)
mins=pad(mins)

timeDisplay.textContent=`${hrs}:${mins}:${secs}`

function pad(unit){
   return(('0')+unit).length >2 ? unit : '0'+unit
}

}



html:

<div id="timeContainer">
  <div id="timeDisplay">00:00:00</div>
  <button id="startBtn" class="timerBtn">Start</button>
  <button id="pauseBtn" class="timerBtn">Pause</button>
  <button id="resetBtn" class="timerBtn">Reset</button>
</div>

css:

.timerBtn{
    width: 80px;
    height: 30px;
    border: 3px solid;
    border-radius: 200px;
    background-color: #561663;
    color: white;
    cursor: pointer;
    font-family: consolas, monospace;

}

#timeDisplay{
    font-size: 50px;
    color: darkgreen;
    font-family: consolas, monospace;
    

}

#timeContainer{
    text-align: center;
    border: 1px solid;
    border-radius: 20px;
    background-color: blanchedalmond;
}

*/

/*
const playerText=document.querySelector('#playerText')
const computerText=document.querySelector('#computerText')
const resultText=document.querySelector('#resultText')

const choiceBtns= document.querySelectorAll(".choiceBtn")

let player

let computer

let result

choiceBtns.forEach(button => button.addEventListener('click',() => {

   player=button.textContent;
   computerTurn()
   playerText.textContent= `Player:${player}`
   computerText.textContent= ` Computer: ${computer}`
   resultText.textContent= checkWinner()
}))


function computerTurn(){
   const randNum= Math.floor(Math.random()*3)+1

   switch(randNum){
      case 1:
         computer = 'Rock'
         break;
      case 2:
         computer='Paper'
         break;
      case 3:
        computer='Scissors'
        break;
      
   }
}

function checkWinner(){
   if(player==computer){
   return 'draw';
 }
   else if (computer=='Rock'){
      return(player== 'Paper') ? 'You Win':'    You Lose'
   }
   else if(computer=='Paper'){
      return(player=='Scissors') ? 'You Win':'    You Lose'
   }
   else if(computer=='Scissors'){
      return(player=='Rock') ? 'You Win':' You Lose'
   }

}

html:

<div id="gameDiv">
<h1 class="gameText" id="playerText"> Player: </h1>
<h1 class="gameText" id="computerText"> Computer: </h1>
<h1 class="gameText" id="resultText"> Result: </h1>

<button class="choiceBtn"> Rock</button>
<button class="choiceBtn">Paper</button>
<button class="choiceBtn">Scissors</button>

</div>

css:

.choiceBtn{
    color: blue;
    background: burlywood;
    border: 2000px;
    border-color: black;
    line-height: 20px;
    width: 60px;
}

#gameDiv{
    background-color:thistle;
    width: 250px;
    height: 265px;
    font-family: 'Brush Script MT', cursive;
    border: 1px solid;
    border-radius: 30px;
    text-align: center;

}

.gameText{
    color: brown;
}

#playerText{
    color: blueviolet;
}

*/

/*
const gameContainer=document.querySelector('#gameContainer')
const statusText=document.querySelector('#statusText')
const restartBtn=document.querySelector('#restartBtn')
const cells= document.querySelectorAll('.cell')

const winConditions=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

let options= ["","","","","","","","",""];
let currentPlayer='X';
let running=false;

initializeGame()


function initializeGame(){
cells.forEach(cell => cell.addEventListener('click',cellClicked))
   restartBtn.addEventListener('click',restartGame)
 statusText.textContent= `${currentPlayer}'s turn`
 running=true

}

function cellClicked(){
const cellIndex=this.getAttribute('cellIndex')
if (options [cellIndex]== !""|| !running){
   return;
}
updateCell(this,cellIndex);

checkWinner()

}

function updateCell(cell,index){
options[index]=currentPlayer;
cell.textContent=currentPlayer
}

function changePlayer(){
currentPlayer=(currentPlayer== 'X') ? 'O' : 'X';
statusText.textContent=`${currentPlayer}'s turn`

}

function checkWinner(){
let roundWon=false;


for (let i=0;i<winConditions.length;i++){
   const condition= winConditions[i];
const cellA= options [condition[0]];
const cellB= options [condition[1]];
const cellC= options [condition[2]];

if(cellA==""||cellB ==""||cellC ==""){
continue;
}
if(cellA==cellB && cellB==cellC){
   roundWon=true
   break;
}
}
if(roundWon){
   statusText.textContent= `${currentPlayer} Wins`;
   running=false;

}
else if(!options.includes("")){
   statusText.textContent='Draw';
   running=false;
}
else{
   changePlayer()
}
}


function restartGame(){
currentPlayer='X'
options= ["","","","","","","","",""]
statusText.textContent= `${currentPlayer}'s turn`
cells.forEach(cell=>cell.textContent="")
running=true
}

HTML:

<div id="gameContainer">
  <h1>Tic Tac Toe</h1>
  <div id="cellContainer">
    <div cellIndex="0" class="cell"></div>
    <div cellIndex="1" class="cell"></div>
    <div cellIndex="2" class="cell"></div>
    <div cellIndex="3" class="cell"></div>
    <div cellIndex="4" class="cell"></div>
    <div cellIndex="5" class="cell"></div>
    <div cellIndex="6" class="cell"></div>
    <div cellIndex="7" class="cell"></div>
    <div cellIndex="8" class="cell"></div>
  </div>
  <h2 id="statusText"></h2>
  <button id="restartBtn">Restart</button> <br>
</div>

CSS:

.cell{
    width: 75px;
    height: 75px;
    border: 2px solid;
    box-shadow: 0 0 0 2px;
    line-height: 75px;
    font-size: 90px;
    text-align: center;
    cursor: pointer;
}
#gameContainer{
    font-family: 'Permanent Marker','Courier New', Courier, monospace;
    text-align: center;
}

#cellContainer{
    display: grid;
    grid-template-columns: repeat(3,auto);
    width: 50px;
    margin: 30px;

}

*/

/*

const gameBoard=document.querySelector('#gameBoard');
// N to paint on a canvas we have to get the context

const ctx= gameBoard.getContext("2d")

const scoreText=document.querySelector("#scoreText")
const resetBtn=document.querySelector("#resetBtn")
const gameWidth=gameBoard.width
const gameHeight=gameBoard.height
const boardBackground="white";
const snakeColor="violet";
const snakeBorder="black";
const foodColor="green";
const unitSize= 25;

let running= false;
let xVelocity= unitSize;
let yVelocity= 0;
let foodX;
let foodY;
let score=0;
let snake= [
   {x:unitSize*4,y:0},
   {x:unitSize*3,y:0},
   {x:unitSize*2,y:0},
   {x:unitSize,y:0},
   {x:0,y:0}
];

window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener("click",resetGame);

gameStart();
createFood();

function gameStart(){
   running=true;
   scoreText.textContent=score;
   createFood();
   drawFood();
   nextTick();
};
function nextTick(){
   if (running){
      setTimeout(()=>{
         clearBoard();
         drawFood();
         moveSnake();
         drawSnake();
         checkGameOver();
         nextTick();  
      },75);
   }   
   else{
      displayGameOver();
   }
};
function clearBoard(){
   ctx.fillStyle= boardBackground;
   ctx.fillRect(0,0,gameWidth,gameHeight)
};
function createFood(){
   function randomFood(min,max){
      const randNum= Math.round((Math.random()*(max-min)+min)/unitSize)*unitSize
      return randNum;
   }
   foodX=randomFood(0,gameWidth-unitSize)
   foodY=randomFood(0,gameWidth-unitSize)
};
function drawFood(){
   ctx.fillStyle = foodColor;
   ctx.fillRect(foodX,foodY,unitSize,unitSize)
};
function moveSnake(){
  const head={x: snake[0].x+ xVelocity,
               y: snake[0].y+ yVelocity};

   snake.unshift(head);
   // if food is eaten
   if(snake[0].x== foodX && snake[0].y==foodY){
     score+=1;
     scoreText.textContent=score;
     createFood()
   }
else{
   snake.pop()
}
};
function drawSnake(){
   ctx.fillStyle= snakeColor;
   ctx.strokeStyle=snakeBorder;
   snake.forEach(snakePart=> {
      ctx.fillRect(snakePart.x,snakePart.y,unitSize,unitSize);
      ctx.strokeRect(snakePart.x,snakePart.y,unitSize,unitSize);
   })

}
function changeDirection(event){
   const keyPressed= event.keyCode;
   const LEFT= 37;
   const UP= 38;
   const RIGHT=39;
   const DOWN=40;
   const goingUP=(yVelocity==-unitSize)
   const goingDOWN=(yVelocity== unitSize)
   const goingRIGHT=(xVelocity==unitSize)
   const goingLEFT=(xVelocity==-unitSize)

 switch(true){
   case(keyPressed==LEFT &&!goingRIGHT):
      xVelocity=-unitSize;
      yVelocity=0
      break;
   case(keyPressed==UP &&!goingDOWN):
      xVelocity=0;
      yVelocity=-unitSize
      break;
   case(keyPressed==RIGHT &&!goingLEFT):
      xVelocity=unitSize;
      yVelocity=0
      break;
   case(keyPressed==DOWN &&!goingUP):
      xVelocity=0;
      yVelocity=unitSize
      break;
   }
}
function checkGameOver(){
switch(true){
   case(snake[0].x<0):
      running=false;
      break;
   case(snake[0].x>=gameWidth):
      running=false;
      break;
    case (snake[0].y>=gameHeight):
      running=false;
      break;
    case (snake[0].y<0):
         running=false;
         break;
    }
for(let i=1;i<snake.length; i++){
   if(snake[i].x == snake [0].x && snake[i].y == snake [0].y ){
      running=false
   }
}
};
function displayGameOver(){
ctx.font="50px MV Boli";
ctx.fillStyle="black";
ctx.textAlign= "center"
ctx.fillText("GameOver  Pray 4 Issac",gameWidth/2,gameHeight/2)
running=false
};
function resetGame(){
   score=0
   xVelocity=unitSize;
   yVelocity=0;
   snake= [
      {x:unitSize*4,y:0},
      {x:unitSize*3,y:0},
      {x:unitSize*2,y:0},
      {x:unitSize,y:0},
      {x:0,y:0}
   ];
gameStart()
};

HTML:

<div id="gameContainer">
<canvas id="gameBoard" width="500px" height="500px"></canvas>
<div id="scoreText">0</div>
<button id="resetBtn">Reset</button>
</div>

CSS:

#gameContainer{
    text-align: center;

}
#gameBoard{
    border: 3px solid;
}

#scoreText{
    font-family: 'Courier New', Courier, monospace;
    font-size: 100px;
}

#resetBtn{
    font-size: 17px;
    font-family:'Courier New', Courier, monospace;
    width: 70px;
    height: 50px;
    border: 4px solid;
    border-radius: 15px;
    cursor: pointer;
}

*/

/*
const gameBoard=document.querySelector("#gameBoard");
const ctx=gameBoard.getContext("2d");
const scoreText=document.querySelector("#scoreText");
const resetBtn=document.querySelector("#resetBtn");
const gameWidth=gameBoard.width;
const gameHeight=gameBoard.height;
const boardBackground="navy";
const paddle1Color="violet";
const paddle2Color="red";
const paddleBorder="black";
const ballColor="forestgreen"
const ballBorderColor="black"
const ballRadius= 12.5;
const paddleSpeed= 50;
// can think of paddlespeed like distance
let intervalId;
let ballSpeed=1;
let ballX= gameWidth/2;
let ballY= gameHeight/2;
let ballXDirection=0;
let ballYDirection=0;
let player1Score=0;
let player2Score=0;

let paddle1 = {
   width: 25,
   height: 100,
   x: 0,
   y: 0
}

let paddle2 = {
   width: 25,
   height: 100,
   x: gameWidth-25,
   y: gameHeight-100
};

window.addEventListener("keydown",changeDirection);

resetBtn.addEventListener("click",resetGame)


gameStart()

function gameStart(){
createBall()
nextTick()
}
function nextTick(){
   intervalId=setTimeout(()=>{
      clearBoard();
      drawPaddles();
      moveBall();
      drawBall(ballX,ballY);
      checkColliosion();
      nextTick()
   },10)
};
function clearBoard(){
   ctx.fillStyle=boardBackground;
   ctx.fillRect(0,0,gameWidth,gameHeight)
}
function drawPaddles(){
   ctx.strokeStyle=paddleBorder;
   ctx.fillStyle=paddle1Color;
   ctx.fillRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);

   ctx.strokeStyle=paddleBorder;
   ctx.fillStyle=paddle2Color;
   ctx.fillRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);
};
function createBall(){
   ballSpeed=1;
if(Math.round(Math.random())==1){
      ballXDirection= 1;
   }
   else {
      ballXDirection=-1
   }
 if(Math.round(Math.random())==1){
      ballYDirection= 1;
   }
   else {
      ballYDirection=-1
   }
   ballX=gameWidth/2;
   ballY=gameHeight/2
};

function moveBall(){
   ballX+= (ballSpeed*ballXDirection)
   ballY+= (ballSpeed*ballYDirection)
};
function drawBall(){
   ctx.fillStyle=ballColor;
   ctx.strokeStyle=ballBorderColor;
   ctx.lineWidth= 2;
   ctx.beginPath();
   ctx.arc(ballX,ballY,ballRadius,0,2*Math.PI)
   ctx.stroke();
   ctx.fill();
};
function checkColliosion(){
   if(ballY<=0+ ballRadius){
      ballYDirection *= -1
   }
   if(ballY>=gameHeight-ballRadius){
      ballYDirection *= -1
   }
   if(ballX<=0){
      player2Score+=1;
      updateScore()
      createBall()
      return;
   }
   if(ballX>= gameWidth-ballRadius){
      player1Score+=1;
      updateScore()
      createBall()
      return;
   } 
   if(ballX<=(paddle1.x+paddle1.width+ballRadius)){
      if(ballY>paddle1.y && ballY < paddle1.y+paddle1.height){
         ballX=(paddle1.x + paddle1.width)+ballRadius // for when ball gets stuck
         ballXDirection *= -1;
         ballSpeed += 1;
  
          }   
          }
    if(ballX>=(paddle2.x-ballRadius)){
            if(ballY>paddle2.y && ballY < paddle2.y+paddle2.height){
               ballX=paddle2.x-ballRadius // when ball gets stuck
               ballXDirection *= -1;
               ballSpeed += 1;
        
                } 
               
               }
};
function changeDirection(event){
   const keyPressed=event.keyCode;
   const paddle2Up=38
   const paddle2Down= 40
   const paddle1Down=83 
   const paddle1Up=87

 switch(keyPressed){
   case(paddle1Up):
   if(paddle1.y>0){
      paddle1.y -= paddleSpeed
   }
      break;

   case(paddle1Down):
   if(paddle1.y<gameHeight-paddle1.height){
      paddle1.y += paddleSpeed
   }
      break;
    case(paddle2Up):
    if (paddle2.y>0){
      paddle2.y -= paddleSpeed
    }
      break;

   case(paddle2Down):
   if (paddle2.y<gameHeight-paddle2.height)
      paddle2.y += paddleSpeed
      break;   
   }
};
function updateScore(){
   scoreText.textContent=`${player1Score} : ${player2Score}`
};
function resetGame(){
player1Score=0
player2Score=0
paddle1 = {
   width: 25,
   height: 100,
   x: 0,
   y: 0
}

paddle2 = {
   width: 25,
   height: 100,
   x: gameWidth-25,
   y: gameHeight-100
}
ballSpeed=1;
ballX=0;
ballY=0;
ballXDirection=0;
ballYDirection=0;
updateScore();
clearInterval(intervalId);
gameStart()
};


HTML:
  <div id="gameContainer">
    <canvas id="gameBoard" width="500" height="500"></canvas>
    <div id="scoreText">0  :  0</div>
    <button id="resetBtn"> Reset </button>
  </div>

  CSS:


#gameContainer{
    text-align: center;
    }
    
#gameBoard{
    border: 3px solid;
}

#scoreText{
    font-family: 'Courier New', Courier, monospace;
    font-size: 100px;
}

#resetBtn{
    font-family:'Times New Roman', Times, serif;
    font-size: 22px;
    height: 50px;
    border: 4px solid;
    border-radius: 15px;
    cursor: pointer;
}


*/
console.log('ok');