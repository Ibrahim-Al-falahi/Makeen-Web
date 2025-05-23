// var x="ahmed";
// var x=22;

// let y=2;
// y=true;

// console.log(x);
// console.log(y);

let x = document.getElementsByClassName("first-content");
x[0].getElementsByTagName("h1")[0].textContent = "Peace Maker";

const nav = document.getElementsByClassName("nav");
const head = x[0].getElementsByTagName("h1");

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

const colors = ['#ff0000', '#ff9900', '#33cc33', '#3399ff', '#cc33ff', '#ff3399'];
let colorIndex = 0;
let intervalStarted = false;

head[0].addEventListener("click", () => {
  if (intervalStarted) return; // Prevent multiple intervals if header is clicked again
  intervalStarted = true;

  setInterval(() => {
    nav[0].style.boxShadow = `0 0 100px  ${colors[colorIndex]}`;
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1000); // Change every 1 second
});

// async function change(){
//     for (let index = 0; index < 255; index++) {
//             nav[0].style.boxShadow  = `0 0 100px rgb(1, 1, ${index})`;
//             await sleep(1000);
//         }
// }
// console.log(x);
