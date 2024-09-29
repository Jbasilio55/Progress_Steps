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

function render() {
  let progressHtml = "";

  for (let i = 1; i < 5; i++) {
    if (i === 1) {
      progressHtml += `<div class="circle active">${i}</div>`;
    } else {
      progressHtml += `<div class="circle">${i}</div>`;
    }
  }

  progressContainer.innerHTML += progressHtml;
  container.appendChild(prevBtn);
  container.appendChild(nextBtn);
}

render();
