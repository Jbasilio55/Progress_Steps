const container = document.createElement("div");
container.classList.add("container");

const progressContainer = document.createElement("div");
progressContainer.classList.add("progress-container");

const progress = document.createElement("div");
progress.classList.add("progress");
progress.setAttribute("id", "progress");

const prevBtn = document.createElement("button");
prevBtn.classList.add("btn");
prevBtn.setAttribute("id", "prev");
prevBtn.disabled = true;
prevBtn.textContent = "Prev";

const nextBtn = document.createElement("button");
nextBtn.classList.add("btn");
nextBtn.setAttribute("id", "next");
nextBtn.textContent = "Next";

document.body.appendChild(container);
container.appendChild(progressContainer);
progressContainer.appendChild(progress);
container.appendChild(prevBtn);
container.appendChild(nextBtn);

let currentActive = 1;

function render() {
  let progressHtml = "";

  for (let i = 1; i < 5; i++) {
    if (i === 1) {
      progressHtml += `<div class="circle active">${i}</div>`;
    } else {
      progressHtml += `<div class="circle">${i}</div>`;
    }
  }

  progressContainer.innerHTML += progressHtml; // Use innerHTML instead of innerHTML +=
  update(); // Call update to set the progress width initially
}

function update() {
  const circles = document.querySelectorAll(".circle"); // Re-select circles after rendering

  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = (actives.length / circles.length) * 100 + "%";

  // Enable/disable buttons based on currentActive
  prevBtn.disabled = currentActive === 1;
  nextBtn.disabled = currentActive === circles.length;
}

nextBtn.addEventListener("click", function () {
  currentActive++;
  if (currentActive > 4) {
    currentActive = 4; // Prevent going beyond the last circle
    return;
  }
  update();
});

prevBtn.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1; // Prevent going below the first circle
    return;
  }
  update();
});

render(); // Initial render
