import logo from './logo.svg';

import { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import logo1 from './assets/images/lg11.webp';
import logo2 from './assets/images/lg2.webp';
import logo3 from './assets/images/lg3.webp';
import logo4 from './assets/images/logo-img.webp';
import logo5 from './assets/images/lg5.webp';

import aboutImg from './assets/images/abt1.webp';
import expImg from './assets/images/about2.webp';

import pryTec from './assets/images/prytec.webp';
import isTn from './assets/images/istn.webp';
import togaTravel from './assets/images/toga.webp';
import cadd from './assets/images/cadd.webp';
import arcp from './assets/images/arp.webp';
import col from './assets/images/col.webp';
import abotImg from './assets/images/abt-img1.webp';
import cvDownload from '../src/assets/cv.pdf';

function App() {

  useEffect(() => {
    document.querySelectorAll('.cstm-icon').forEach(item => {
      const progress = item.getAttribute('data-progress') + '%';
      
      item.style.background = `
        conic-gradient(
          from 0deg,
          #f5b754 0%,
          #f5b754 ${progress},
          transparent ${progress}
        )
      `;
    });

    const hmbrgIcon = document.getElementById('mob-menu-icn');
    const hmbrgCancl = document.getElementById('mob-menu-icn-can');
    const mobMnu = document.getElementById('mob-menu-link');

    hmbrgIcon.addEventListener('click', function () {
      mobMnu.classList.add('show-menu');
      hmbrgCancl.style.display = 'block';
      hmbrgIcon.style.display = 'none';
    });

    hmbrgCancl.addEventListener('click', function () {
      mobMnu.classList.remove('show-menu');
      hmbrgCancl.style.display = 'none';
      hmbrgIcon.style.display = 'block';
    });

    const hdr = document.getElementById("header").offsetHeight;
    // document.getElementById('banner-section').style.marginTop = hdr + 'px';

    document.querySelectorAll(".mob-menu-link a").forEach(link => {
      link.addEventListener("click", function () {
        document.querySelector(".mob-menu-link").classList.remove("show-menu");
        hmbrgCancl.style.display = 'none';
        hmbrgIcon.style.display = 'block';
        
      });
    });

  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");   // Screen me aaye → show
    } else {
      entry.target.classList.remove("show"); // Screen se baahar → hide
    }
  });
}, { threshold: 0.2}); // 20% dikhe to animate

document.querySelectorAll(".about-content").forEach(el => {
  observer.observe(el);
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

let expBtn = document.getElementById('exp-btn');
let eduBtn = document.getElementById('edu-btn');

expBtn.addEventListener('click', function() {
  document.getElementById('experience').style.display = 'block';
  document.getElementById('education').style.display = 'none';
  expBtn.classList.add('active-btn');
  eduBtn.classList.remove('active-btn');
});

eduBtn.addEventListener('click', function() {
  document.getElementById('education').style.display = 'block';
  document.getElementById('experience').style.display = 'none';
  eduBtn.classList.add('active-btn');
  expBtn.classList.remove('active-btn');
  
});





   

  }, []);




  
  

  return (
    <div className="App">
      <Header />

      <div className="banner-section" id='banner-section'>
        <div className="banner-content">
          <h1>experinced web <span className='developer-animation' data-text='developer'>developer</span></h1>
           <div className="banner-cta">
            <a href="mailto:suryadev7056@gmail.com" ><button className='btn-primary'>Hire Me</button></a>
            <a href={cvDownload} target='_blank' ><button className='btn-secondary'>Download CV</button></a>
          </div>
        </div>
      </div>



      <div className='logos-sec'>
        <div className='row'>
          <div className='logos-row'>
            {/* <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo4} alt="Logo 4" />
            <img src={logo5} alt="Logo 5" />
            <img src={logo3} alt="Logo 3" /> */}
            <h3>Full Stack Web Developer</h3>
            <h3>WordPress frontend Developer</h3>
            <h3>React Developer</h3>
            <h3>Php Web Developer</h3>
            <h3>Php WordPress Developer</h3>
          </div>

          <div className='logos-row' aria-hidden="true">
            {/* <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo4} alt="Logo 4" />
            <img src={logo5} alt="Logo 5" />
            <img src={logo3} alt="Logo 3" /> */}
            <h3>Full Stack Web Developer</h3>
            <h3>WordPress frontend Developer</h3>
            <h3>React Developer</h3>
            <h3>Php Web Developer</h3>
            <h3>Php WordPress Developer</h3>
          </div>
          
        </div>
        
        
      </div>

      <div className='about-section' id='personal-info'>        
        
        {/* <div className='row about-heading'>
          <h2>About Me</h2>
        </div> */}
        <div className='about-content row'>
          
          <div className='about-image col-l'>
            <img className='about-image-decor' src={aboutImg} alt="About Me" />
          </div>

          <div className='about-text col-r'>
            <h2>Personal Info </h2>
            <p className='abt-info'>Hi, I’m Surya Dev, a passionate Web Developer skilled in building modern, responsive, and user-friendly websites. I specialize in frontend development using technologies like React, HTML, CSS, and JavaScript, and I’m also experienced with CMS platforms such as WordPress and Shopify.</p>
            <p className='abt-info'>I enjoy turning ideas into functional and visually appealing digital experiences that help businesses grow and users engage effortlessly.</p>

            <div className='personal-info-row'>
              <a className='icon-box' href='mailto:suryadev7056@gmail.com'>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <h3>Email</h3>
                <p>suryadev7056@gmail.com</p>
              </a>
              
              <a className='icon-box' href='tel:+91-9877528394'>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h3>Phone</h3>
                <p>+91-9877528394</p>
              </a>

            </div>
          
          </div>

        </div>
        
      </div>

      <div className='about-section ' id='button-wrapper'>

          <div className='row txt-cntr'>
            <button id='exp-btn'>Experience</button>
            <button id='edu-btn'>education</button>
          </div>
      </div>

      <div className='about-section' id='experience'>        
        
        {/* <div className='row about-heading'>
          <h2>Experience</h2>
        </div> */}
        <div className='about-content row'>
          
          <div className='about-image col-l'>
            <img className='about-image-decor flip-stl'  src={expImg} alt="About Me" />
          </div>

          <div className='about-text col-r'>
            <h2>My Experience</h2>
            <ul className='exp-lst'>
              
              <li className='li-abt-info'>
                <span className='time-line'>FEB-2025 - NOV-2025</span>
                <span className='compony-name'>Jr. Web Developer <br></br>TagHash Media, Mohali</span>
              </li>

              <li className='li-abt-info'>
                <span className='time-line'>APR-2024 - JAN-2025</span>
                <span className='compony-name'>Web Developer <br></br> SainSoft, LDH </span>
              </li>

              <li className='li-abt-info'>
                <span className='time-line'>JAN-2024 - JUL-2024</span>
                <span className='compony-name'>Full Stack Developer Trainee <br></br> STEP-GNDEC, LDH</span>
              </li>
              

            </ul>
          
          </div>

        </div>
        
      </div>


      <div className='about-section' id='education'>        
        
        {/* <div className='row about-heading'>
          <h2>Experience</h2>
        </div> */}
        <div className='about-content row'>
          
          <div className='about-image col-l txt-end'>
            <img className='about-image-decor '  src={expImg} alt="About Me" />
          </div>

          <div className='about-text col-r'>
            <h2>My Education</h2>
            <ul className='exp-lst'>
              
              <li className='li-abt-info'>
                <span className='time-line'>AUG-2022 - MAY-2024</span>
                <span className='compony-name'>Master's In Computer Application<br></br>GNDEC LDH,PB</span>
              </li>

              <li className='li-abt-info'>
                <span className='time-line'>JUL-2019 - APR-2022</span>
                <span className='compony-name'>Bachelor of Computer Applications<br></br>PCTE LDH,PB</span>
              </li>


            </ul>
          
          </div>

        </div>
        
      </div>


      <div className='about-section' id='skills'>        
        
        
        <div className='about-content row'>
          
          <div className='about-text col-r full-width'>
            <h2 className='txt-cntr'>My Skills</h2>
            
            <ul className='skills-lst'>
              <li className='skill-list'>
                <div className='cstm-icon' data-progress="100"><i className="fa-brands fa-html5"></i></div>
                HTML5
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="100"><i className="fa-brands fa-css3"></i></div>
                CSS
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="95"><i className="fa-brands fa-square-js"></i></div>
                JavaScript
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="80"><i className="fa-brands fa-react"></i></div>
                React.js
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="80"><i className="fa-brands fa-wordpress"></i></div>
                WordPress
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="80"><i className="fa-brands fa-shopify"></i></div>
                Shopify
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="90"><i className="fa-brands fa-github"></i></div>
                Git & GitHub
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="90"><i className="fa-solid fa-compass-drafting"></i></div>
                Responsive Design
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="90"><i className="fa-brands fa-font-awesome"></i></div>
                SEO Basics
              </li>

              <li className='skill-list'>
                <div className='cstm-icon' data-progress="90"><i className="fa-solid fa-bolt"></i></div>
                Cross-Browser Compatibility
              </li>

            </ul>
          
          </div>

        </div>
        
      </div>

      <div className='about-section' id='completed-projects'>      
        <div className='about-content row flex-col '>
          <h2 className='txt-cntr'>Completed Projects<br></br>
          <p>These are some of my completed projects...</p>
          </h2>
          

          <div className='project-list full-width'>

            <a className='project-item' href='https://prytec.com.au/' target='_blank' rel="noreferrer">

              <div className='proj-img-cont' >
                <img src={pryTec} alt="Project 1" />
              </div>

              <div className='proj-desc'>
                <h3>Prytec Solutions</h3>
                <div className='proj-tags'>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                
              </div>

            </a>


            <a className='project-item' href='https://istn.com/' target='_blank' rel="noreferrer">

              <div className='proj-img-cont' >
                <img src={isTn} alt="Project 1" />
              </div>

              <div className='proj-desc'>
                <h3>ISTN</h3>
                <div className='proj-tags'>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                
              </div>

            </a>

            <a className='project-item' href='https://togatravel.in/' target='_blank' rel="noreferrer">

              <div className='proj-img-cont' >
                <img src={togaTravel} alt="Project 1" />
              </div>

              <div className='proj-desc'>
                <h3>Toga Travel</h3>
                <div className='proj-tags'>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                
              </div>

            </a>


            <a className='project-item' href='https://cadillacuniform.com/' target='_blank' rel="noreferrer">

              <div className='proj-img-cont' >
                <img src={cadd} alt="Project 1" />
              </div>

              <div className='proj-desc'>
                <h3>Cadillac Uniform</h3>
                <div className='proj-tags'>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                
              </div>

            </a>


            <a className='project-item' href='https://aaronscustomplumbing.com/' target='_blank' rel="noreferrer">

              <div className='proj-img-cont' >
                <img src={arcp} alt="Project 1" />
              </div>

              <div className='proj-desc'>
                <h3>Aarons Custom Plumbing</h3>
                <div className='proj-tags'>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                
              </div>

            </a>



            <a className='project-item' href='https://colhealth.com.au/' target='_blank' rel="noreferrer">

              <div className='proj-img-cont' >
                <img src={col} alt="Project 1" />
              </div>

              <div className='proj-desc'>
                <h3>Circle of Life</h3>
                <div className='proj-tags'>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                
              </div>

            </a>


          </div>

        </div>  
        
      </div>

      <div className='work-tog .about-content' id='contact'>

        <div className='rows'>
         
            <div className='col-l'>

               <h2>Let's work together. <br></br>fixed a meeting</h2>
          <p>I'm available for freelance projects and full-time opportunities. <br></br>Let's create something amazing together!</p>
          
          <div className='personal-info-row'>
              <a className='icon-box' href='mailto:suryadev7056@gmail.com'>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <h3>Email</h3>
                <p>suryadev7056@gmail.com</p>
              </a>
              
              <a className='icon-box' href='tel:+91-9877528394'>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h3>Phone</h3>
                <p>+91-9877528394</p>
              </a>

            </div>

            </div>

            <div className='about-text col-r txt-cntr'>

              <img className='about-image-decor' src={abotImg} alt="About Me" />

            </div>
            
        </div>


        
      </div>

      <Footer />
    </div>
  );
}

export default App;
