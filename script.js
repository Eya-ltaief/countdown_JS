const newYears = "01 Jan 2022";
const daysEl= document.getElementById('days')
const hoursEl= document.getElementById('hours')
const monsEl= document.getElementById('mins')
const secEl= document.getElementById('seconds')
function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate = new Date();
    const seconds =Math.floor((newYearsDate - currentDate)/1000);
    const mins= Math.floor(seconds/60)
    const hours = Math.floor(mins/60);
    const days = Math.floor(hours/24);
    console.log(newYearsDate - currentDate)
    console.log(currentDate)
    console.log(seconds)
    console.log(mins)
    console.log(hours)
    console.log(days)

     daysEl.innerHTML=days
     hoursEl.innerHTML=hours
     monsEl.innerHTML = mins
     secEl.innerHTML=seconds
}

countdown()
setInterval(countdown, 1000)