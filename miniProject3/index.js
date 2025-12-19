const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

toggleBtn.addEventListener("click", function () {
    if (isOn) {
        statusText.textContent = "OFF";
        isOn = false;
    } else {
        statusText.textContent = "ON";
        isOn = true;
    }
});
