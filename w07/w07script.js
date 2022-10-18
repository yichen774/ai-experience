//宣告五個變數上面四個是HTML的檔案
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minE1 = document.getElementById("mins");
const secondE1 = document.getElementById("seconds");

const newYear="1 jan 2023";

function countdown()
{
        const newYearDate = new Date(newYear);
        const currentDate = new Date();
        const second=(newYearDate-currentDate)/1000;
        const days=Math.floor(second/3600/24);
        const hours=Math.floor(second/3600)%24;
        const mins=Math.floor(second/60)%60;
        const secs=Math.floor(second%60);

        daysE1.innerHTML=formateTime(days);
        hoursE1.innerHTML=formateTime(hours);
        minE1.innerHTML=formateTime(mins);
        secondE1.innerHTML=formateTime(secs);
}

function formateTime(time)
{
    return time <10?`0${time}`:time;
}

countdown();
setInterval(countdown,1000);