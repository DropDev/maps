const ROT = 10 * 60 * 1000;

// 2026-06-27 06:00 Brisbane (+10)
// = 2026-06-26 20:00 UTC
const START = Date.UTC(2026, 5, 26, 20, 0, 0);

const maps = [
  "Avalon",
  "Verdansk"
];

const map = document.getElementById("map");
const timer = document.getElementById("timer");
const next = document.getElementById("next");


function update() {

  const now = Date.now();

  const elapsed = now - START;

  const cycle = Math.floor(elapsed / ROT);

  const index = ((cycle % maps.length) + maps.length) % maps.length;

  const remaining = ROT - (elapsed % ROT);


  const minutes = Math.floor(remaining / 60000);

  const seconds = Math.floor((remaining % 60000) / 1000);


  map.textContent = maps[index];

  timer.textContent =
    `${minutes}:${String(seconds).padStart(2, "0")}`;

  next.textContent =
    "Next: " + maps[(index + 1) % maps.length];

}


update();

setInterval(update, 1000);
