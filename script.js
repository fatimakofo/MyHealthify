// let num = [0, 1,2,3,-5,6,-9,-7,8];
// let positiveNumbers = removeNegativeNumbers(num, (x) => x >= 0 );
// function removeNegativeNumbers(myNumber, callback){
//     myArray = []
//     for (const x of myNumber) {
//         if (callback(x)){
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }
// console.log(positiveNumbers);

// new promise 

// let myPromise = new Promise(function(onResolve, onReject){
//     let numbers= [ 1,2,3,-1,-2,-3]
//     for (const y of numbers) {
//         if(y<=0){
//             onResolve('hi');
//         }
//         else{
//             onReject('warning');
//         }
//     }
// });
// myPromise.then(
//     function (value){
//         console.log(value)
//     },
//     function (error){
//         console.error(error)
//     }
// );

// const total = async (a, b) => a + b;

//  let sum = async (a, b) =>{
//     let output = await total(5, 6);
//     console.log(output);
// }
// sum();

// let number = async (a, b) => a*b;
// let multiply = async () => {
//      let result = await number(2,5);
//      console.log(result)

//  }
// multiply();
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  sidebar.style.right = "0";
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  sidebar.style.right = "-100%";
  document.body.classList.remove("no-scroll");
});
