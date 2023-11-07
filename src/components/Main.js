import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './style/Main.scss'
import AnfahrtPNG from './assets/media/anfahrt.PNG'
import Logo from './assets/media/Logolucent.png'
// import Abendkleider from './assets/media/FrauRose.jpg'
// import Accessoires from './assets/media/FrauPink.jpg'
// import Schuhe from './assets/media/FrauLila.jpg'
// import CarouBilder from './assets/media/carousel'
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
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('./assets/media/carousel', false, /\.(png|jpe?g|svg)$/));
    setCarouselImages(images);
  }, []);
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

    
    <>
    <>
        <nav className="nav" id="menu">
          <div className="wrap">
              <div className="brand">
                    <img src={Logo} alt="Logo"></img>
              </div>
              <button onClick={() => { setOpenMenu(prev => !prev); } } id="mobile-btn" className={`hamburger-btn ${openMenu ? 'hamburger-cross' : ''}`}>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
              </button>
              <ul className={openMenu ? "top-menu openMenu" : "top-menu closeMenu"} id="top-menu">
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                  <li><a href="#zeiten">Öffnungszeiten</a></li>
                  <li><a href="#Anfahrt">Anfahrt</a></li>
              </ul>
          </div>

      </nav><header className="hero">
              <div className="content">
                  <h1>Ihre exklusive Quelle für Mode und Eleganz</h1>
                  <p>Bei uns finden Sie die neuesten Modetrends, 
                    erstklassige Qualität und unvergleichlichen Stil. 
                    Treten Sie ein und entdecken Sie, 
                    was Mode wirklich bedeuten kann.</p>
              </div>
          </header><main className="main">
              <section>
                  <div className="tab-row">
                      <div className="col-12">
                          <h2>Wir sind eine Boutique im Herzen der Stadt Esslingen am Neckar, </h2>
                          <p>
                          welche sich auf den Verkauf von Abendmode (auch Übergrößen) sowie Accessoires und Schuhen spezialisiert.
Auch Männer können bei uns modische Anzüge finden.
                          </p>
                      </div>
                  </div>
              </section>
              <section id='zeiten' className="feature">
                  <div className="tab-row">
                      <div className="col-12">
                          <h2>Öffnungszeiten:</h2>
                          <p>
                              Mo. - Sa.: 10:00 - 18:30
                          </p>
                      </div>
                  </div>
              </section>
              <section className="section-with-carousel">
  <div className="tab-row">
  <Carousel showArrows={true} showThumbs={true} dynamicHeight={true}>
  {carouselImages.map((image, index) => (
    <div key={index}>
      <img src={image} alt={`Bild ${index}`} />
    </div>
  ))}
</Carousel>
  </div>
</section>
              
          </main></><footer className="footer">
              <div className="row">
                <div className="col-6">
                    <h3>Interessieren Sie sich für elegante und festlichen Mode? </h3>
                    <p>Dann besuchen Sie uns doch in unserer Boutique Chantal </p>
                </div>
                  <div className="col-6">
                      <p><i className="fa fa-phone" aria-hidden="true"></i>Tel. 0711 / 39 11 11 14</p> 
                      <p id='Anfahrt'>Anfahrt</p>
                    <img src={AnfahrtPNG} alt="Anfahrt"></img>
                      <p>73728 Esslingen am Neckar</p>
                  </div>
                  
              </div>
              <div className="row">
                  <div className="col-12">&copy; 2013 Boutique Chantal </div>
              </div>
          </footer></>
  );
}

export default Main;
