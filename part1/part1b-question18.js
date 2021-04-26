var repeatTime = setInterval(eachSec, 1000);

function eachSec() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}