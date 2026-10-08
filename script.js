const temperature = document.querySelector(".temperature");
const roadStatus = document.querySelector(".safe");
const bars = document.querySelectorAll(".bar");
const alertMessage = document.querySelector(".alert");
const lastUpdated = document.querySelector("#lastUpdated");
const minTempDisplay = document.querySelector("#minTemp");
const maxTempDisplay = document.querySelector("#maxTemp");
const sensorStatus = document.querySelector("#sensorStatus");

let minTemp = Infinity;
let maxTemp = -Infinity;

function updateTemperature() {
    let temp = Math.floor(Math.random() * 16) + 25;

    // Update current temperature
    temperature.textContent = temp + "°C";

    // Update minimum temperature
    if (temp < minTemp) {
        minTemp = temp;
    }

    // Update maximum temperature
    if (temp > maxTemp) {
        maxTemp = temp;
    }

    minTempDisplay.textContent = minTemp + "°C";
    maxTempDisplay.textContent = maxTemp + "°C";

    // Update road status and alert
    if (temp >= 35) {
        roadStatus.textContent = "HIGH TEMP";
        roadStatus.style.color = "red";

        alertMessage.textContent = "⚠️ High road temperature detected!";
        alertMessage.style.background = "#ffd6d6";
        alertMessage.style.color = "red";
    } else {
        roadStatus.textContent = "SAFE";
        roadStatus.style.color = "green";

        alertMessage.textContent = "✅ No critical temperature alerts at present.";
        alertMessage.style.background = "#dff6e4";
        alertMessage.style.color = "#176b2c";
    }

    // Update temperature history
    bars.forEach((bar) => {
        let historyTemp = Math.floor(Math.random() * 16) + 25;

        bar.textContent = historyTemp + "°C";
        bar.style.height = ((historyTemp - 20) * 5) + "%";
    });

    // Update last updated time
    let now = new Date();
    lastUpdated.textContent = now.toLocaleTimeString();

    // Sensor status
    sensorStatus.textContent = "CONNECTED";
    sensorStatus.style.color = "green";
}

updateTemperature();

setInterval(updateTemperature, 5000);