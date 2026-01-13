console.log("JS Loading...");

const myName = "Surya Dev";
const myPhone = "+91-9877528394";
const myEmail = "suryadev7056@gmail.com";
const myCV = "assets/cv.pdf";
const myRoles = [
  "Full Stack Web Developer",
  "WordPress frontend Developer",
  "React Developer",
  "Php Web Developer",
  "Php WordPress Developer",
];

const workExperience = [
  {
    role: "Frontend Developer",
    office: "Webriderz",
    location: "Ludhiana",
    startDate: "Dec, 2025",
    endDate: "Present",
  },

  {
    role: "Jr. Web Developer",
    office: "TagHash Media",
    location: "Mohali",
    startDate: "Feb, 2025",
    endDate: "Nov, 2025",
  },

  {
    role: "Web Developer",
    office: "SainSoft",
    location: "Ludhiana",
    startDate: "Apr, 2024",
    endDate: "Jan, 2025",
  },

  {
    role: "Full Stack Developer Trainee",
    office: "STEP-GNDEC",
    location: "Ludhiana",
    startDate: "Jan, 2024",
    endDate: "Jul-2024",
  },
];

const workSample = [
  {
    projectTitle: "Prytec Solutions",
    projectImg: "./assets/images/prytec.webp",
    projectLink: "https://prytec.com.au/",
  },

  {
    projectTitle: "ISTN",
    projectImg: "./assets/images/istn.webp",
    projectLink: "https://istn.com/",
  },

  {
    projectTitle: "Toga Travel",
    projectImg: "./assets/images/toga.webp",
    projectLink: "https://togatravel.in/",
  },

  {
    projectTitle: "Cadillac Uniform",
    projectImg: "./assets/images/cadd.webp",
    projectLink: "https://cadillacuniform.com/",
  },

  {
    projectTitle: "Aarons Custom Plumbing",
    projectImg: "./assets/images/arp.webp",
    projectLink: "https://aaronscustomplumbing.com/",
  },

  {
    projectTitle: "Circle of Life",
    projectImg: "./assets/images/col.webp",
    projectLink: "https://colhealth.com.au/",
  },
];

const copyRight = "© All rights reserved Surya Dev.";

const aboutME = `Hi, I’m Surya Dev, a passionate Web Developer skilled in building modern, responsive, and user-friendly websites. I specialize in frontend development using technologies like React, HTML, CSS, and JavaScript, and I’m also experienced with CMS platforms such as WordPress and Shopify.
<br>I enjoy turning ideas into functional and visually appealing digital experiences that help businesses grow and users engage effortlessly.`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".logos-row").forEach((el) => {
    myRoles.forEach((role) => {
      const roleH3 = document.createElement("h3");
      roleH3.textContent = role;
      el.append(roleH3);
    });
  });

  document.querySelectorAll(".about-me-txt").forEach((el) => {
    el.innerHTML = aboutME;
  });

  document.title = myName;

  document.querySelectorAll(".my-name").forEach((el) => {
    el.textContent = myName;
  });

  document.querySelectorAll(".my-email").forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = "mailto:" + myEmail;
      if (el.innerHTML === "") {
        el.textContent = myEmail;
      }
    } else if (el.tagName.toLowerCase() === "button") {
      el.textContent = myEmail;
      el.addEventListener("click", () => {
        window.location.href = myEmail;
      });
    } else {
      el.textContent = myEmail;
    }
  });

  document.querySelectorAll(".my-phone").forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = "tel:" + myPhone;
      if (el.innerHTML === "") {
        el.textContent = myPhone;
      }
    } else if (el.tagName.toLowerCase() === "button") {
      el.textContent = myEmail;
      el.addEventListener("click", () => {
        window.location.href = myPhone;
      });
    } else {
      el.textContent = myPhone;
    }
  });

  document.querySelectorAll(".my-cv").forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = myCV;
      if (el.innerHTML === "") {
        el.textContent = myCV;
      }
    } else if (el.tagName.toLowerCase() === "button") {
      el.textContent = myCV;
      el.addEventListener("click", () => {
        window.location.href = myPhone;
      });
    } else {
      // do nothing
    }
  });

  document.querySelectorAll(".text-copyright").forEach((el) => {
    el.textContent = copyRight;
  });

  const expListUL = document.querySelector("#exp-lst");
  if (expListUL) {
    workExperience.forEach((exp) => {
      // console.log(exp.endDate);
      const expListLI = document.createElement("li");
      expListLI.classList.add("li-abt-info");
      expListLI.innerHTML = `
              <span class="time-line">${exp.startDate} - ${exp.endDate}</span>
                <span class="compony-name">
                  ${exp.role} <br />
                  ${exp.office}, ${exp.location}
              </span>`;
      expListUL.append(expListLI);
    });
  }
  const workSampleUL = document.querySelector(
    "#completed-projects .project-list"
  );
  if (workSampleUL) {
    workSample.forEach((work, index) => {
      const workSingle = document.createElement("a");
      workSingle.classList.add("project-item");
      workSingle.href = work.projectLink;
      workSingle.target = "_blank";
      workSingle.rel = "noreferrer";

      workSingle.innerHTML = `<div class="proj-img-cont">
                <img src="${work.projectImg}" alt="Project ${++index}">
              </div>

              <div class="proj-desc">
                <h3>${work.projectTitle}</h3>
                <div class="proj-tags">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>`;

      workSampleUL.append(workSingle);
      // console.log(workSampleUL);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".about-content").forEach((el) => {
    observer.observe(el);
  });

  let expBtn = document.getElementById("exp-btn");
  let eduBtn = document.getElementById("edu-btn");

  expBtn.addEventListener("click", function () {
    document.getElementById("experience").style.display = "block";
    document.getElementById("education").style.display = "none";
    expBtn.classList.add("active-btn");
    eduBtn.classList.remove("active-btn");
  });

  eduBtn.addEventListener("click", function () {
    document.getElementById("education").style.display = "block";
    document.getElementById("experience").style.display = "none";
    eduBtn.classList.add("active-btn");
    expBtn.classList.remove("active-btn");
  });

  document.querySelectorAll(".cstm-icon").forEach((item) => {
    const progress = item.getAttribute("data-progress") + "%";

    item.style.background = `
        conic-gradient(
          from 0deg,
          #f5b754 0%,
          #f5b754 ${progress},
          transparent ${progress}
        )
      `;
  });

  const hmbrgIcon = document.getElementById("mob-menu-icn");
  const hmbrgCancl = document.getElementById("mob-menu-icn-can");
  const mobMnu = document.getElementById("mob-menu-link");

  hmbrgIcon.addEventListener("click", function () {
    mobMnu.classList.add("show-menu");
    hmbrgCancl.style.display = "block";
    hmbrgIcon.style.display = "none";
  });

  hmbrgCancl.addEventListener("click", function () {
    mobMnu.classList.remove("show-menu");
    hmbrgCancl.style.display = "none";
    hmbrgIcon.style.display = "block";
  });

  const hdr = document.getElementById("header").offsetHeight;
  document.getElementById("mob-menu-link").style.top = hdr + "px";
  // document.getElementById('banner-section').style.marginTop = hdr + 'px';

  document.querySelectorAll(".mob-menu-link a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelector(".mob-menu-link").classList.remove("show-menu");
      hmbrgCancl.style.display = "none";
      hmbrgIcon.style.display = "block";
    });
  });

  let lastScroll = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    let current = window.pageYOffset;

    // 1. Scroll UP → header fixed
    if (current > lastScroll) {
      header.classList.add("header-sticky");
    }

    // 3. If scroll = 0 → remove fixed (only at top)
    if (current <= 0) {
      header.classList.remove("header-sticky");
    }

    lastScroll = current;
  });

  const count = document.querySelectorAll("#experience .li-abt-info").length;
  if (count > 4) {
    document.getElementById("exp-lst").style.overflowY = "scroll";
    document.getElementById("exp-lst").style.maxHeight = "500px"; // aap height adjust kar sakte ho
  }
});

console.log("JS Fully Loaded");
