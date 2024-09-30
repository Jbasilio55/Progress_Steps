let currentActive = 1;

function initialRender() {
  document.body.innerHTML = `  
      <div class="container">  
          <div class="progress-container">  
              <div class="progress" id="progress"></div>  
          </div>  
      </div>  
      `;

  const progressContainer = document.querySelector(".progress-container");

  let progressHtml = "";

  for (let i = 1; i < 5; i++) {
    if (i === 1) {
      progressHtml += `<div class="circle active">${i}</div>`;
    } else {
      progressHtml += `<div class="circle">${i}</div>`;
    }
  }

  progressContainer.innerHTML += progressHtml;
}

initialRender();
