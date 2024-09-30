let currentActive = 1;

function initialRender() {
  document.title = "Progress Steps";

  document.body.innerHTML = `  
      <div class="container">  
          <div class="progress-container">  
              <div class="progress" id="progress"></div>  
          </div>  
      </div>  
      `;

  const progressContainer = document.querySelector(".progress-container");
  const container = document.querySelector(".container");

  let progressHtml = "";

  for (let i = 1; i < 5; i++) {
    if (i === 1) {
      progressHtml += `<div class="circle active">${i}</div>`;
    } else {
      progressHtml += `<div class="circle">${i}</div>`;
    }
  }

  progressContainer.innerHTML += progressHtml;

  container.innerHTML += `
  <button class="btn" id="prev" disabled>Prev</button>
  <button class="btn" id="next">Next</button>
  `;

  const progress = document.getElementById("progress");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const circle = document.querySelectorAll(".circle");

  next.addEventListener("click", function () {
    currentActive++;

    if (currentActive > circle.length) {
      currentActive = circle.length;
    }
    update();
  });

  prev.addEventListener("click", function () {
    currentActive--;

    if (currentActive < 1) {
      currentActive = 1;
    }
    update();
  });
}

function update() {
  const circles = document.querySelectorAll(".circle");

  circles.forEach(function (circle, idx) {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

initialRender();
