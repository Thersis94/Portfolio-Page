const projectSTORE = [
  {
    name: "90's Quiz App",
    img: "img/QuizApp.png",
    liveLink: "https://thersis94.github.io/quizapp/",
    github: "https://github.com/Thersis94/quizapp",
    description: "This is a simple quiz app that I created to test your 90's music knowledge!",
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    name: "90's Quiz App",
    img: "img/QuizApp.png",
    liveLink: "https://thersis94.github.io/quizapp/",
    github: "https://github.com/Thersis94/quizapp",
    description: "This is a simple quiz app that I created to test your 90's music knowledge!",
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    name: "90's Quiz App",
    img: "img/QuizApp.png",
    liveLink: "https://thersis94.github.io/quizapp/",
    github: "https://github.com/Thersis94/quizapp",
    description: "This is a simple quiz app that I created to test your 90's music knowledge!",
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    name: "90's Quiz App",
    img: "img/QuizApp.png",
    liveLink: "https://thersis94.github.io/quizapp/",
    github: "https://github.com/Thersis94/quizapp",
    description: "This is a simple quiz app that I created to test your 90's music knowledge!",
    tech: ['HTML', 'CSS', 'JS'],
  },
]

function renderFullProjects() {
  $('.project').remove()
  for (let i = 0; i < projectSTORE.length; i++) {
    function renderTech() {
      let techList = []
      for (let x = 0; x < projectSTORE[i].tech.length; x++) {
        techList.push(`<p class="tech">${projectSTORE[i].tech[x]}</p>`)
      }
      return techList.join('')
    }
    if (i % 2 === 0) {
      $(".all-projects").append(
        `<span class="project">
    <span class="accent-box">
    <a alt="link to ${projectSTORE[i].name} live page" href="${projectSTORE[i].liveLink}">
    <div class="content">
    <div class="content-overlay"></div>
      <img alt="Screen shot of ${projectSTORE[i].name} webpage" class="project-img" src="${projectSTORE[i].img}">
      <div class="content-details fadeIn-bottom">
      <h3 class="content-title">${projectSTORE[i].name}</h3>
      <p class="content-text">Click for the live page.</p>
      </div>
      </a>
      </div>
      </span>
        <span class="project-text">
          <h2 class="project-name">${projectSTORE[i].name}</h2>
          <p class="project-description">${projectSTORE[i].description}</p>
          <a alt="Link to the ${projectSTORE[i].name} Github repository."  href="${projectSTORE[i].github}"><p class="github-link">Github Link</p></a>
          <span class="project-tech-used">${renderTech()}</span>
        </span>
</span>`
      )
    }
    else {
      $(".all-projects").append(
        `<span class="project">
          <span class="project-text">
            <h2 class="project-name">${projectSTORE[i].name}</h2>
            <p class="project-description">${projectSTORE[i].description}</p>
            <a alt="Link to the ${projectSTORE[i].name} Github repository." href="${projectSTORE[i].github}"><p class="github-link">Github Link</p></a>
            <p class="project-tech-used">${renderTech()}</p>
          </span>
          <span class="accent-box">
          <a alt="link to ${projectSTORE[i].name} live page" href="${projectSTORE[i].liveLink}">
          <div class="content">
          <div class="content-overlay"></div>
            <img alt="Screen shot of ${projectSTORE[i].name} webpage" class="project-img" src="${projectSTORE[i].img}">
            <div class="content-details fadeIn-bottom">
            <h3 class="content-title">${projectSTORE[i].name}</h3>
            <p class="content-text">Click for the live page.</p>
            </div>
            </a>
            </div>
      </a>
          </span>
  </span>`
      )
    }

  }
}


function renderMobileProjects() {
  $('.project').remove()
  for (let i = 0; i < projectSTORE.length; i++) {
    function renderTech() {
      let techList = []
      for (let x = 0; x < projectSTORE[i].tech.length; x++) {
        techList.push(`<p class="tech">${projectSTORE[i].tech[x]}</p>`)
      }
      return techList.join('')
    }
    $(".all-projects").append(
      `<span class="project">
  <span class="accent-box">
  <a alt="link to ${projectSTORE[i].name} live page" href="${projectSTORE[i].liveLink}">
  <div class="content">
  <div class="content-overlay"></div>
    <img alt="Screen shot of ${projectSTORE[i].name} webpage" class="project-img" src="${projectSTORE[i].img}">
    <div class="content-details fadeIn-bottom">
    <h3 class="content-title">${projectSTORE[i].name}</h3>
    <p class="content-text">Click for the live page.</p>
    </div>
    </a>
    </div>
  </a>
      </span>
      <span class="project-text">
        <h2 class="project-name">${projectSTORE[i].name}</h2>
        <p class="project-description">${projectSTORE[i].description}</p>
        <a alt="Link to the ${projectSTORE[i].name} Github repository." href="${projectSTORE[i].github}"><p class="github-link">Github Link</p></a>
        <span class="project-tech-used">${renderTech()}</span>
      </span>
      </span>`)
  }

}


function widthChange(mq) {
  document.location.reload()
  chooseRender()
}


function chooseRender() {
  const mq = window.matchMedia("(min-width: 800px)")
  mq.addListener(widthChange)
  if (mq.matches) {
    renderFullProjects()
  }
  else {
    renderMobileProjects()
  }
}


$(function () {
  chooseRender()
})