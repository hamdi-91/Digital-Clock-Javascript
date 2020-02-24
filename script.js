function showTime() {
    let date = new Date();
    let hours = date.getHours();  //0__23
    let minutes = date.getMinutes();     //0__59
    let secondes = date.getSeconds();   //0__59

    let formatHours = convertFormat(hours)
    hours = checkTime(hours)

    hours = addZero(hours);
    minutes = addZero(minutes);
    secondes = addZero(secondes);
    document.getElementById('clock').innerHTML = `${hours}: ${minutes}: ${secondes}: ${formatHours}`;
}

function convertFormat(time) {
    let format = 'AM';
    if (format >= 12) {
        format = 'PM'
    }
    else {
        return format;
    }
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time;
}

function addZero(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}
showTime()
setInterval(showTime, 1000);