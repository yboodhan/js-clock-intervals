var clockDegree = 360
var degPerTick = 6 //since 360 degrees for 60 minutes
var degreesSec = 0
var degreesHr = 0
var degreesMin = 0

var sec = 1000
var min = 60000
var hr = 3600000

const calcTurnHr = (time) => {
    degreesHr += degPerTick
    document.getElementById('hour').style.transform = "rotate(" + degreesHr + "deg)"
}

const calcTurnMin = (time) => {
    degreesMin += degPerTick
    document.getElementById('minute').style.transform = "rotate(" + degreesMin + "deg)"

}

const calcTurnSec = (time) => {
    degreesSec += degPerTick
    document.getElementById('second').style.transform = "rotate(" + degreesSec + "deg)"

}

const runClock = () => {
    setInterval(function() { calcTurnSec(sec) }, sec)
    setInterval(function() { calcTurnMin(min) }, min)
    setInterval(function() { calcTurnHr(hr) }, hr)
}

document.addEventListener('DOMContentLoaded', () => {
    runClock()
})