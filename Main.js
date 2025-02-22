// script.js
let currentFloor = 1;
const floors = {
    1: ["Room 101 - Computer Lab", "Room 102 - Conference Room", "Room 103 - Faculty Office"],
    2: ["Room 201 - Lecture Hall", "Room 202 - Study Area", "Room 203 - Library"]
};

function toggleFloor() {
    currentFloor = currentFloor === 1 ? 2 : 1;
    document.getElementById("floor-title").textContent = `Floor ${currentFloor}`;
    loadRooms();
}

function loadRooms() {
    const container = document.getElementById("room-container");
    container.innerHTML = "";
    floors[currentFloor].forEach(room => {
        let div = document.createElement("div");
        div.className = "room";
        div.textContent = room;
        div.onclick = () => alert(`${room} - Description coming soon!`);
        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", loadRooms);