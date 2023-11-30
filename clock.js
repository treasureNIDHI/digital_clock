// const music = new Audio('tik_tok.wav');
// music.play();
// music.loop =true;
// music.playbackRate = 2;
// music.pause();qqazszdgfbgtyj


const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ap = document.getElementById("ap");

function Clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let ap = "AM";

    if(h > 12){
        h = h-12;
        ap.innerText = "PM";
    }

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    // ap.innerText = ap;
}

// Clock()
setInterval(Clock, 1000);

const music = new Audio("tik_tok.wav");
music.play();
music.loop = true;
music.playblackRate = 2;
// EventListener("onload", music.play().loop=true, music.playbackRate=2);
addEventListener('onload', music.play());



// const music = new Audio("tik_tok.wav");
// music.play();
// music.loop =true;
// music.playbackRate = 2;
// music.pause();qqazszdgfbgtyj
