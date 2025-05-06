const stripHTML = Array.from({length: 10}, (_, i) =>`<div class="digit">${i}</div>`).join("");

const strips = document.querySelectorAll('.digit-strip');

strips.forEach(strip => strip.innerHTML = stripHTML);

let count = 0;
function updateOdometer() {
    const str = count.toString().padStart(5, '0');
    str.split('').forEach((digit, i) => {
        const y = parseInt(digit) * 50;
        strips[i].style.transform = `translateY(-${y}px)`;
    });
    count = (count + 1) % 100000; // Reset to 0 after reaching 99999
}

setInterval(updateOdometer, 1000); // Update every 100ms
