function updateTimer(isodate, timerInfo) {
    const date = new Date(isodate);
    
    // setInterval(() => {
        const timeNow = date - Date.now();
        const seconds = Math.floor(timeNow / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        timerInfo.seconds = seconds % 60;
        timerInfo.minutes = minutes % 60;
        timerInfo.hours = hours;
    // }, 1000)
}

const timerInfo = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

updateTimer('2022-07-25T12:00:00-06:30', timerInfo)

console.log(timerInfo);
// console.log(timerInfo);
// console.log(timerInfo);
// console.log(timerInfo);
// console.log(timerInfo);
// console.log(timerInfo);