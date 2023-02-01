let username = prompt("What's your name? ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${username} `

// let myImg = document.querySelector("#resimg")   
// myImg.src 

const myImg = document.querySelector("img")
myImg.src ="res.jpg";
document.body.appendChild(myImg);





// let clock = document.querySelector("#myClock")
// let currentTime = new Date().toLocaleTimeString()
// clock.innerHTML = `${currentTime}`

function currentTimeModule() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session  = "AM"
    var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  

    if (hh > 12 ) {
        session = "PM";
    }

    hh = (hh < 10 ) ? "0" + hh : hh;
    mm = ( mm < 10) ? "0" + mm : mm;
    ss = ( ss < 10 ) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session + " " + gunler[date.getDay()];

    document.getElementById("myClock").innerText = time; 
    var t = setTimeout(function() {currentTimeModule()},1000);

}


currentTimeModule();
