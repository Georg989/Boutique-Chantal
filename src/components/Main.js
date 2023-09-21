import React, { useState, useEffect } from 'react';
import './style/Main.scss'
function Main() {
   
(function () {
    var menuId;
    function init () {
      menuId = document.getElementById("menu");
      document.addEventListener("scroll",scrollMenu,false);
    }
    function scrollMenu () {
      if (document.documentElement.scrollTop > 50) {
        menuId.classList.add("scroll");
        console.log('scroll');
      }
      else {
        menuId.classList.remove("scroll");
        console.log('no-scroll');
      }
    }
    document.addEventListener("DOMContentLoaded",init,false);
  })();
  
  (function (){
    var mobBtn, topMenu;
    
    function init() {
      mobBtn = document.getElementById("mobile-btn");
    topMenu = document.getElementById("top-menu");
      mobBtn.addEventListener("click",mobileMenu,false);
    }
    
    function mobileMenu() {
      if(topMenu.classList.contains("mobile-open")) {
         topMenu.classList.remove("mobile-open");
         }else{
          topMenu.classList.add("mobile-open");
         }
      if (mobBtn.classList.contains("hamburger-cross")) {
              mobBtn.classList.remove("hamburger-cross");
          }
          else {
              mobBtn.classList.add("hamburger-cross");
          }
    }
    
    document.addEventListener("DOMContentLoaded",init);
    
  })();
  const [openMenu,setOpenMenu] = useState(false)
  /*const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  */
  return (

    
                  <><><nav className="nav" id="menu">
          <div className="wrap">
              <div className="brand">
                  <span>Boutique Chantal</span>
              </div>
              <button onClick={() => { setOpenMenu(prev => !prev); } } id="mobile-btn" className={`hamburger-btn ${openMenu ? 'hamburger-cross' : ''}`}>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
              </button>
              <ul className={openMenu ? "top-menu openMenu" : "top-menu closeMenu"} id="top-menu">
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>

      </nav><header className="hero">
              <div className="content">
                  <p>Wilkommen Bei Abendmode Boutique Chantal</p>
                  <button className="cta">Learn More</button>
              </div>
          </header><main className="main">
              <section>
                  <div className="tab-row">
                      <div className="col-12">
                          <h2>Regular Section</h2>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatum repudiandae aliquam, sit quasi ipsa! Quidem dolorum, sit beatae laboriosam error cupiditate veniam commodi, animi, asperiores consequuntur laborum. Quod, deleniti.
                          </p>
                      </div>
                  </div>
              </section>
              <section className="feature">
                  <div className="tab-row">
                      <div className="col-12">
                          <h2>Feature Section</h2>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nihil dignissimos eos repellat perferendis qui corrupti explicabo vel inventore minima.
                          </p>
                      </div>
                  </div>
              </section>
              <section>
                  <div className="tab-row">
                      <div className="col-4">
                          <h2>Columns</h2>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga porro sapiente, corporis dignissimos laudantium illo expedita corrupti asperiores esse quae.
                          </p>
                      </div>
                      <div className="col-4">
                          <h2>Columns</h2>
                          <p>
                              Repellat qui, dolores nemo asperiores incidunt quidem dolorum. Quos, deleniti neque architecto dolore magni aliquid. Inventore suscipit consequuntur excepturi ipsam.
                          </p>
                      </div>
                      <div className="col-4">
                          <h2>Columns</h2>
                          <p>
                              Doloribus perferendis a ipsum ad, consectetur animi aliquam maxime, earum aspernatur, ea commodi tempore suscipit explicabo cupiditate at nemo quae.
                          </p>
                      </div>
                  </div>
              </section>
          </main></><footer className="footer">
              <div className="row">
                  <div className="col-6">
                      <p><i className="fa fa-phone" aria-hidden="true"></i> +44 (0)123 456 789</p>
                      <p><i className="fa fa-envelope" aria-hidden="true"></i> info@landingpage.com</p>
                  </div>
                  <div className="col-6">
                      <h3>Heading</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi a unde iste harum quis veritatis laudantium tempora, error veniam, incidunt?</p>

                  </div>
              </div>
              <div className="row">
                  <div className="col-12">&copy; 2017 Brand - </div>
              </div>
          </footer></>
  );
}

export default Main;
