//console.log(1)
// setTimeout(()=>{console.log(2)}, 2000)
// console.log(3)
// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// console.log(3)
var initailstate = 0;
var initailstateofmunites = 0;
setInterval(function () {
    console.log("sec:", initailstate, "munites:", initailstateofmunites, "hours");
    if (initailstate == 10) {
        initailstateofmunites++;
        console.log("minite:", initailstateofmunites);
    }
}, 1000);
