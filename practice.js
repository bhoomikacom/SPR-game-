// alert("me"); used for pop-up sound on screen
// console.log("something"); used for shown anything in the console of browser or to print in the screen
// variable null or undefined bhi hota hai 
// = ko assignmnent operator khte hai 
// bydefault agar variable ko declare krte hai let se toh undefined show hoga in the console , const m eroror aayega 
// data type dekhne k liye typeof x use hoga
//  console.log("a");
// a ="bhoomika";
// console.log(a);   null ka type object hota hai
// symbol aur bigInt bhi ek datatype hota hai isme 
// non-primitve datatype m object aata hai aur uske andar array aur functions aate hai 
// let y = Symbol("Hello");
// let x = BigInt("3865378483");
// console.log(x);
// const stu = {
//     name :"anna dose wala ",
//     age : 59,
//     appearence : "muche wali",
// };
// console.log(stu);
// in object for access any one keyvalue pair stu["name "] or stu.name 
// agar object m changes krane hai toh bahar stu["name "]= "anna chaiwali"; 
// a++ ; a=a+1 increment post increment
// == is for compares only values and === is used for comparing both values as well as datatype
// logical operators m bhi false ya true hi aata hai
// && operator m two expressions lete hai dono true honge tabhi true lega wrna false aayega 
// || agar ek bbhi true hota hai toh true de dega 
// ! joh answer aana chahiye tha uska ulta aayega 
// a+=4 //a=a+4
// const profile= {
//     name:"BHOOMIKA AGARWAL",
//     followers:37,
//     bio:"YOU ARE MY BUTTERCUP",
//    age:18,
//    isfollow:true,
// };
// console.log(profile);
// let a =3;
// let b = 2;
// console.log("a+b=",a+b);
// let a = 5;
// let b =7;
// cond1 = b>=a;
// cond2 = a<b;
// console.log("cond1&&cond2", cond1&&cond2);
// prompt agar number chahiye toh paresInt lgega




// conditional statement 
// let age = prompt("enter your age:") ;
// if (age>18){
//     console.log("can vote ");
// } else {
//     console.log("can't vote");
// }



// let mode ="light";
// let color;
// if (mode=="dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// let num=prompt("enter an number:");
// if(num%2==0){
//     console.log("number",num ," is even ");
// } else{
//     console.log("number is odd");
// }

// ternary operator
// condition ? true output ; false output

// switch statement
// const expr="strawberry";
// switch(expr){
//     case "oranges":
//         console.log("oranges are $0.59 a pound");
//         break;
//     case "mangoes":
//     case"papayas":
//          console.log("mangoes and papayas are $0.89 pound");
//          break;
//          default:
//             console.log("sorry , we are out of ${expr}.")
// }

// practice que
// let num = prompt("enter a number:");
// if(num%5==0){
//     console.log("multiple of 5");
// }else{
//     console.log("not a multiple of 5");}


// let score = prompt("enter you score:");
// let grade;
// if(80<= score <=100){
//   console.log(  grade = "A");
// }else if(70 <=score <= 89){
//     console.log("B");
// }else if(60 <=score <= 69 && grade==C){
//     console.log("B");
// }else{
//     console.log("E");
// }
// var i;
// for(let i=1;i<=6;i++){
//     console.log("i is ", i );
// }

// let sum=0;
// for(let i=1;i<=6;i++){
//     sum=sum+i;
// }
// console.log("sum is ", sum);

// let i=0;// initialising condition lgti hai
// while(i<=6){//while m stopping condition hi lgti hai
//       console.log("i is ", i);
//       i++ //updating condition yha lgti hai
// }

// let i=5;
// do{
//     console.log("bhoomika");
//     i++
// }while(i<=1);

// 2 aur loops hote hai for-of and for-in dono iteration m kam aate hai
// for-of hume strings aur arrays m lgane m help krta h  aur hume na hi apna initialisation likhna hia ur na hi kuch aur 
// for-in  hume objects aur arrays k liye help krega 
/// for-of loop
// let a="APPLES";
// for (let i of a){//i works as iterator aur uske character aa jayenge 
//     console.log(i);
// }

// let name="AMBIKA GUPTA";
// let size = 0;
// for(let i of name){
//     console.log(i);
//     size++;
// }
// console.log("size is ", size );

// for-in

// let stu={
//     name:"bhoomika",
//     age:18,
//     id:101,
//     ispass:true
// }
// for(let i in stu){
//     console.log(i, stu[i]);
// }
// print all even number
// let i;
// let size=0;
// for(i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("even number is ",i);
//         size++;
//     }
   
// }
// console.log("size of these number is ",size);


// let gamenumber=16;
// let number=parseInt(prompt("Enter your number:"));

// while(number!=gamenumber){
//     console.log("you lost!try again");
//     number=parseInt(prompt("enter your number:"));
// }
// console.log("you win this game !");
// escape character is \n is for line change and \t used for spacing tab

// let string=` Bhoomika agarwal   `;
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string.trim());//from ending and starting
// hum template literals ka use sirf isliye krte hai hume console.log m ya print krane m bar bar string ya variable alag alag na krna pade hum bas dollarsign lgayenge aur curly brackets aur andar =>string.key <= likh denge 


// let app="amazon and googles are worlwide networking companies";
// // console.log(app.length);
// // // console.log(app[2]);
// // console.log(app.slice(1,10));
// //strings are immutable in javascript 
// console.log(app.charAt(5));
// reduce() is used to sum all the marks in array
 

// str1="abc";
// str2="def";
// console.log(str1+str2);
// console.log(str1.replace("abc","pqr"));
// let name;

// let username=prompt("ENter you name:");
// name="@"+username+username.length;
// console.log(name);
// array mutable hota hai 

// let fruits=["apple","mango","banana","blueberry"];// array ka typeof object hota hai aur agar hum woh index identify krte hai joh identify hi nhi krta ya exist hi nhi krta uske liye undefined ans aata hai 
// // companies.shift();
// companies.slice(2,5);
// // // companies.splice(3,Uber,OLA);
// // companies.push('amazon');
// console.log(companies);

// let info=["bhoomika",18,"agra"];
// let marks=[67,94,58,86,47];
// Splice(1,3,"me ","you");
// console.log(marks);
// let sum=0;
// for(let val in marks){
//     sum += val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of is ${avg}`);

// let price_items =[250,645,300,900,50];
// // let i;
// // for (i=0;i<price_items.length;i++){
// //    let offer=price_items[0]/10;
// //    price_items[i] -= offer;
// // }
// console.log(price_items.toString());
// companies.shift();


// FUNCTIONS 
// Block of code that performs a specific task, can be invoked whenever needed

// function sum(x,y){ // function wali jgh k variable ko parameter khenge //
//    s=x*y;
//    return s;
// }
// let val=sum(4,5);
// console.log(val); // call krne ki jgh pr functon m argument aayenge 
// return statement k bad kuhc bhi likhoge woh execute hi nhi krega toh manlo yeh ek break keyword ki tarh ho gya kyuki isme ek bar kam ho jane k bad niche kuch bhi likha ho usse mtlb nhi h 
// function k parameter is like local variable aur yeh sirf uske block of code tk jinda hai


// ARROW FUNCTIONS 
// compact way of writing a function 
// const sum=(a,b)=> {
//     return a+b;
// }
// console.log(sum(3,6));
// const multiply=(a,b)=> {
//     return a*b;
// }
// console.log(multiply(3,6));
// let char;
// function vowel(s){
//    let count=0;
//     for (const char of s){
//         if(char ==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            
//             count++; 
//         }
        
       
//     }
//     console.log(char);
// }

// // function val = ("me as a good ")=>{
// //     return val
// // }
// const countvow = (str)=>{
//     let count=0;
//     for(const char of str){
//         if(
//             char ==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//         }
//     }
//     return countvow;
// };
// let arr=[4,7,9,5];
// // arr.forEach(function printVal(val){
// //     console.log(val);
// // });
// //          OR
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// })// phle array bnate hai aur use ek ek krke lane k liye foreach use krenge 
// is foreach m 3 parameters le skte hai value , index aur array bhi kr skte h yeh foreach sirf array m krenge 
// what is higher order function? foreach hote hai 
// In JavaScript, a higher-order function is a function that can use other functions as parameters or return a function. They are a fundamental concept in functional programming
// let arr=[2,4,6,8];
// arr.forEach((arr)=>{
    
//     console.log(arr*arr);
// });
// Iteration occurs when we want to execute code once for each item in a collection, usually elements in an array or properties of an object
// map method foreach jesa hi hai
// similarity hei ki dono ek ek krke valure return krta hai iteration hota hai aur difference yeh ki map m woh new string bnata hai aur foreach m whi string m changes hote hai 
// let num=[3,6,9,12];
// let newArr = num.filter((val)=>{
//     return val>6;
// });
// console.log(newArr);
//  The reduce() method in JavaScript is a higher-order function that reduces an array to a single value.
// let arr=[3,4,6,7,8,94];
// const count=0;
// const sumwithinit=arr.reduce(
//     (accumulator,currentValue)=> accumulator + currentValue,count,// 2 value jati accumulator as a result aur currentvalue as a new value joh aane wali hai 
// );
// console.log(sumwithinit);
// //or
// let arr=[3,4,6,7,8,94];
// const output=arr.reduce((res,curr)=>{
//    return res+curr; 
// });
// console.log(output);

// marks_stu=[45,97,59,98,80,95,39];
// let Arr = marks_stu.filter((val)=>{
//     return val>=90;
// });
// console.log(Arr);
// html ka sara code js access kr skta hai by console.dir() ya hum kh skte hai ki window m sab save hai ya toh aap window.console.log() krke sab kuch la skte hai ki is file m kya kya html use hua hai 
// console.log() => used for print the Message.
// console.dir()=> document open hoga jisme sare functions aur method use hue hai
// apni html ki file ko js m acess kr skte hai window m aur window m document hota hai usme iske fun aur methods wgera aate hai aur usi ko document object model khte ahi isme ek digaram sa hota hai usme har ek box ko node khte hai aur node ek object hai 
//  console.dir(document);
// you can change your page by javascript dynamically........... dom ka fayda hota hai dynamically changes krna in a webpage.
// agar hum script tag ko body se phle likh lete hai toh dom kam nhi krta ya hum dynamically changes wgera nhi la skte hai woh null dikhai dega 
// let val=document.getElementById("head");
// console.dir(val);//unique chez deta hai 
// let you=document.getElementsByClassName("men");
// console.dir(you); // yeh classname wala hume html collection detA HAI 
// //agar id wala element exist nhi krta toh null ata hai aur agar class exist nhi krti toh empty html collection aata hai 
// let para = document.getElementsByTagName("h");
// console.log(para);// yeh bhi html collection deta hai 
// // we can also acess elements by queryselector: queryselector m #,.lgana pdta hai 
// let v=document.querySelector("p");
// console.dir(v);// returns first element 
// let v=document.querySelectorAll("p"); // returns a node list 
// v.tagName;//tagname return ho jayega 
// text , elemnts aur comment nodes hoti hai 
// // agar hume changes krne hai append krna hai toh apni file m by using js toh phle element ko access kro tb property lgao .
// let val=document.getElementById("#h2");
// console.dir(val.innerText);

// val.innerText = val.innerText+"from APNA CLG student ";
// text ko append krne k liye innertext propety ka use krna hota hai  
// let para = document.getElementsByClassName("box");
// // console.log(para[1]);
// //or
// let i;
// let idx=0;
// for(i of para){
//     div.innerText = `new value of ${idx}`;
//     idx++;
// }
// console.log(i);

//attribute hota hai extra information joh hum kisi tag m dete hai . agar attribute ki value ko lena hai toh  attribute method lga skte hai 
// let div=document.querySelector("div");
// console.dir(div);
// let val=div.getAttribute("id");
// console.dir(val);

// let div=document.querySelector("div");
// console.log(div);
// // let p=div.getAttribute("src");
// // console.log(p);
// let p=div.setAttribute("src","yellow");
// console.log(p);
//agar hume style ki value change krni hai toh woh node.style ho jayega
// let div=document.querySelector("div");
//  console.log(div.style.backgroundColor="green"); 

// DOM manipulation 
// phle create kro joh bhi banana hai aur phri aces krenge phir add krlo
// let el=document.createElement("p");
// el.innerText="hiiii...it's me ";
// el.style.color="black";
// console.log(el);

// let val=document.querySelector("div");
// console.log(val.after(el));


// question :
// let el=document.createElement("button");
// el.innerText="click me !";
// console.log(el);
// let val=document.querySelector("div");
// console.log(val.append(el));
// agar aap setattribuute se changes kroge toh purani wali chezein hat jayengi isliye hum classlist ka use krte hai taki woh new chezein add krde
// events in js
// the changes in the code is known as Event.
// onclick attribuute ek event hota hai jab bhi button ko click kiya jaye toh yeh likhkr aaye 
// ondblclick for double clicking the node 
// jese hi mouse us jgh pr hover krega toh rpint hoga uske liye : onmouseover

// let p=document.querySelector("#me");
// p.onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);//for event type i.e. click 
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// these are handlers
// }
// p.onkeydown=() =>{
//     console.log("button is clicked");
// }

// agar inline or outline doni jgh event diya hai toh priority pr outline wala rhega 
// agar ek event likh diya toh dubara nhi kr skte ya agar kiya bhi ho sabse last wala event occur krega 
// event object e se sari properties aa ajti hai 
//The clientX property returns the horizontal client coordinate of the mouse pointer when a mouse event occurs. The clientX property is read-only. The client area is the current window

// event listener  : callback is also known as handler 
// JavaScript's event listener function allows you to create custom responses to events like mouse clicks, keyboard clicks, and window resizing. The programming paradigm of waiting and responding to real-time events is called event handling . 
// let p = document.querySelector("#me");
// // Node.addEventListener("event","function");
// p.addEventListener("mouseover",()=>{
//     console.log("i love you");
// })
// remove ko variable ki tarah pass krte hue delete krna hoga 
// toggling button ek jese phone m torch on krne jesa hahi kyuki isme aap apne acc cahnge kr rhe ho 
let p=document.querySelector("#mode");
let currmode="light";

p.addEventListener("click",()=>{
   if(currmode=== "light"){
    currmode='dark';
    document.querySelector("body").style.backgroundColor="black";
   }else{
    currmode="light";
    document.querySelector("body").style.backgroundColor="white";

   }
   console.log(currmode);
});
