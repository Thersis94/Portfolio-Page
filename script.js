const projectSTORE = [
  {
    name: "What That Data Do",
    img: "https://raw.githubusercontent.com/Thersis94/Portfolio-Page/master/img/WTDD.PNG",
    liveLink: "https://wtdd-rust.now.sh/ ",
    github: "https://github.com/clipqq/nw6-capstone-server",
    description: "This is a data visualization app that I developed with a team of students. My role on the team was developing the database and node.js REFTful api.",
    tech: ['NodeJS', 'React', 'CSS', 'HTML']
  },
  {
    name: "AI Audio",
    img: "https://raw.githubusercontent.com/Thersis94/Portfolio-Page/master/img/AIAudioScreenShot.PNG",
    liveLink: "https://aiaudio.now.sh",
    github: "https://github.com/Thersis94/AudioMasteringClient",
    description: "An App that allows you to upload audio files and returns mastered audio!",
    tech: ['HTML', 'CSS', 'React', 'NodeJS']
  },
  {
    name: "Lazy Liquor Library",
    img: "https://raw.githubusercontent.com/Thersis94/Lazy-Liquor-Library/master/ScreenShot.PNG",
    liveLink: "https://thersis94.github.io/Lazy-Liquor-Library/",
    github: "https://github.com/Thersis94/Lazy-Liquor-Library",
    description: "An app I created to search for interesting cocktails! It uses The CocktailDB api to generate results.",
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    name: "90's Quiz App",
    img: "img/QuizApp.png",
    liveLink: "https://thersis94.github.io/quizapp/",
    github: "https://github.com/Thersis94/quizapp",
    description: "My first Webapp! This is a simple quiz app that I created to test your 90's music knowledge!",
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
    <a aria-label="${projectSTORE[i].name}" href="${projectSTORE[i].liveLink}" target="_blank">
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
          <a aria-label="Link to the ${projectSTORE[i].name} Github repository."  href="${projectSTORE[i].github}" target="_blank"><p class="github-link">Github Link</p></a>
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
            <a aria-label="Link to the ${projectSTORE[i].name} Github repository." href="${projectSTORE[i].github}" target="_blank"><p class="github-link">Github Link</p></a>
            <p class="project-tech-used">${renderTech()}</p>
          </span>
          <span class="accent-box">
          <a aria-label="${projectSTORE[i].name}" alt="link to ${projectSTORE[i].name} live page" href="${projectSTORE[i].liveLink}" target="_blank">
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
  <a aria-label="link to ${projectSTORE[i].name} live page" href="${projectSTORE[i].liveLink}">
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
        <a aria-label="Link to the ${projectSTORE[i].name} Github repository." href="${projectSTORE[i].github}"><p class="github-link">Github Link</p></a>
        <span class="project-tech-used">${renderTech()}</span>
      </span>
      </span>`)
  }
  $(".footer-links").append(
  `<a  target="_blank" aria-label="link to Justin Jeffrey's email." href="mailto:J.C.Jeffrey1994@gmail.com">
                <svg class="contact-svg-footer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 172 172" style=" fill:#000000;">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <path
                            d="M0,86c0,-47.49649 38.50351,-86 86,-86c47.49649,0 86,38.50351 86,86c0,47.49649 -38.50351,86 -86,86c-47.49649,0 -86,-38.50351 -86,-86zM86,137.6c28.49789,0 51.6,-23.10211 51.6,-51.6c0,-28.49789 -23.10211,-51.6 -51.6,-51.6c-28.49789,0 -51.6,23.10211 -51.6,51.6c0,28.49789 23.10211,51.6 51.6,51.6z"
                            fill="#000000"></path>
                        <g fill="#000000">
                            <path
                                d="M41.968,28.208c-7.59827,0 -13.76,6.16173 -13.76,13.76v88.064c0,7.59827 6.16173,13.76 13.76,13.76h88.064c7.59827,0 13.76,-6.16173 13.76,-13.76v-88.064c0,-7.59827 -6.16173,-13.76 -13.76,-13.76zM47.472,61.232h77.056v1.43512c-0.91808,0.73638 -7.45537,5.98038 -15.21125,12.21738c-8.28179,6.65991 -16.71595,13.44848 -18.2105,14.71137c-1.93968,1.63902 -3.99754,1.90812 -5.10625,1.90812c-1.11192,0 -3.16204,-0.26773 -5.10088,-1.90812c-1.50012,-1.26921 -9.93404,-8.05179 -18.21587,-14.71137c-7.75592,-6.2367 -14.29318,-11.48096 -15.21125,-12.21738zM47.472,69.71912c2.75637,2.21296 5.76639,4.63032 11.76588,9.45463c3.89673,3.13345 5.26118,4.25513 8.51937,6.88537l-20.28525,16.22713zM124.528,69.71912v32.56713l-20.29063,-16.22713c3.25908,-2.63003 4.62722,-3.75112 8.52475,-6.88537c5.99951,-4.82458 9.00951,-7.24175 11.76588,-9.45463zM72.14325,89.60125c1.3803,1.11922 4.89433,3.94126 5.19763,4.19787c3.17438,2.68575 6.62826,3.20888 8.65912,3.20888c2.03407,0 5.48021,-0.52726 8.65375,-3.20888c0.30484,-0.25759 3.81695,-3.07892 5.19763,-4.19787l24.67663,19.737v1.42975h-77.056v-1.42975z">
                            </path>
                        </g>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,141.04c-30.39775,0 -55.04,-24.64225 -55.04,-55.04v0c0,-30.39775 24.64225,-55.04 55.04,-55.04v0c30.39775,0 55.04,24.64225 55.04,55.04v0c0,30.39775 -24.64225,55.04 -55.04,55.04z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,144.48c-32.29761,0 -58.48,-26.18239 -58.48,-58.48v0c0,-32.29761 26.18239,-58.48 58.48,-58.48h0c32.29761,0 58.48,26.18239 58.48,58.48v0c0,32.29761 -26.18239,58.48 -58.48,58.48z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,141.04c-30.39775,0 -55.04,-24.64225 -55.04,-55.04v0c0,-30.39775 24.64225,-55.04 55.04,-55.04v0c30.39775,0 55.04,24.64225 55.04,55.04v0c0,30.39775 -24.64225,55.04 -55.04,55.04z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,141.04c-30.39775,0 -55.04,-24.64225 -55.04,-55.04v0c0,-30.39775 24.64225,-55.04 55.04,-55.04v0c30.39775,0 55.04,24.64225 55.04,55.04v0c0,30.39775 -24.64225,55.04 -55.04,55.04z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,144.48c-32.29761,0 -58.48,-26.18239 -58.48,-58.48v0c0,-32.29761 26.18239,-58.48 58.48,-58.48h0c32.29761,0 58.48,26.18239 58.48,58.48v0c0,32.29761 -26.18239,58.48 -58.48,58.48z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,141.04c-30.39775,0 -55.04,-24.64225 -55.04,-55.04v0c0,-30.39775 24.64225,-55.04 55.04,-55.04v0c30.39775,0 55.04,24.64225 55.04,55.04v0c0,30.39775 -24.64225,55.04 -55.04,55.04z"
                            fill="none"></path>
                        <path
                            d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z"
                            fill="none"></path>
                        <path
                            d="M86,137.6c-28.49789,0 -51.6,-23.10211 -51.6,-51.6v0c0,-28.49789 23.10211,-51.6 51.6,-51.6v0c28.49789,0 51.6,23.10211 51.6,51.6v0c0,28.49789 -23.10211,51.6 -51.6,51.6z"
                            fill="none"></path>
                    </g>
                </svg>
            </a>
            <a target="_blank" aria-label="link to Justin Jeffrey's Linkedin page."
                href="https://www.linkedin.com/in/justin-jeffrey-285697a5/">
                <svg class="contact-svg-footer" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
            </a>
            <a target="_blank" aria-label="link to Justin Jeffrey's Github repositories."
                href="https://github.com/Thersis94?tab=repositories">
                <svg class="contact-svg-footer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 172 172" style=" fill:#000000;">
                    <g transform="translate(-16.34,-16.34) scale(1.19,1.19)">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#000000">
                                <path
                                    d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-6.45 1.43333,-9.31667c0,-1.43333 1.43333,-2.15 2.15,-2.15h0.71667c3.58333,0.71667 10.75,2.86667 17.2,9.31667c4.3,-1.43333 9.31667,-2.15 14.33333,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c6.45,-6.45 14.33333,-8.6 17.91667,-9.31667h0.71667c1.43333,0 2.15,0.71667 2.86667,2.15c0,2.86667 0,6.45 0,9.31667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </span>
    </span>`)

}


function widthChange(mq) {
  document.location.reload()
  chooseRender()
}


function chooseRender() {
  const mq = window.matchMedia("(min-width: 1000px)")
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