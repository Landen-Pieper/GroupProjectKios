document.addEventListener('DOMContentLoaded', () => {
    const floorImage = document.getElementById('floor-image');
    const overlay = document.getElementById('overlay');
    const prevButton = document.getElementById('prev-floor');
    const nextButton = document.getElementById('next-floor');

    const floors = ['images/CT101.jpg', 'images/CT2.jpg']; // Images are now in the same directory
    let currentFloor = 0;

    function loadFloor(floorIndex) {
        console.log("Loading floor:", floors[floorIndex]); // Debugging
        floorImage.src = floors[floorIndex];
        console.log("Image source set to:", floorImage.src); // Debugging
        currentFloor = floorIndex;

        // Clear overlay
        overlay.innerHTML = '';

        // Load room data (replace with your actual data)
        const rooms = getRoomsForFloor(currentFloor);
        drawRooms(rooms);
    }

    function getRoomsForFloor(floorIndex) {
        if (floorIndex === 0) {
            // Room data for floor 1
            return [
                { id: 'CT111', name: 'Drafting Lab', x: 400, y: 50, width: 300, height: 150 },
                // ... your floor 1 room data ...
            ];
        } else if (floorIndex === 1) {
            // Room data for floor 2
            return [
                { id: 'RoomA', name: 'Room A', x: 100, y: 100, width: 200, height: 100 },
                // ... your floor 2 room data ...
            ];
        }
        return [];
    }

    function drawRooms(rooms) {
        rooms.forEach(room => {
            const highlight = document.createElement('div');
            highlight.classList.add('room-highlight');
            highlight.style.left = room.x + 'px';
            highlight.style.top = room.y + 'px';
            highlight.style.width = room.width + 'px';
            highlight.style.height = room.height + 'px';

            const tooltip = document.createElement('div');
            tooltip.classList.add('room-tooltip');
            tooltip.textContent = room.name;
            tooltip.style.left = room.x + 'px';
            tooltip.style.top = room.y + room.height + 10 + 'px';

            overlay.appendChild(highlight);
            overlay.appendChild(tooltip);

            highlight.addEventListener('click', () => {
                alert(`You clicked on ${room.name} (${room.id})`);
            });

            highlight.addEventListener('mouseover', () => {
                tooltip.style.display = 'block';
            });

            highlight.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentFloor > 0) {
            loadFloor(currentFloor - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentFloor < floors.length - 1) {
            loadFloor(currentFloor + 1);
        }
    });

    // Load initial floor
    loadFloor(currentFloor);
});