let timer = document.getElementById("time");


let counter = 60;

let cpmte = setInterval(function () {
    timer.innerText = counter;
    counter = counter-1;
    if (counter === 0) {
        timer.innerText = "finish";
        clearInterval(cpmte);
    }
},1000);

