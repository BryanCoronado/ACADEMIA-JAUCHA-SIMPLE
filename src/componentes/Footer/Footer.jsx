import React from 'react';
import './footer.css';
import logo from '../../galeria/logo.png';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaGithub, FaBehance, FaPinterestP } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#"><img src={logo} alt="logo" /></a>
                <p>ACADEMIA FORMATIVA DE FUTBOL JAUCHA YANCE </p>
                <div className="hr"></div>
                <h6>Complejo deportivo el paradero (frente al semaforo de la panamericana sur)</h6>
                <h6>923 674 686<span>|</span>969 082 245</h6>
                <div className="contact-social">
                  <ul>
                    <li><a className="hover-target" href="https://www.facebook.com/profile.php?id=100086437996016"><FaFacebookF /></a></li>
                    <li><a className="hover-target" href="https://api.whatsapp.com/send?phone=%2B51923674686&data=ARAeE4wU2K-DAuEpBV7U-j8VOOZL5NVKx853AKW0AfH8NPv_q69nkHsnT2SaZqnKTAJ9OpiLjxZxuje9IFIGowS_FhG2QzbCNGd5D-zgXUOU8gBsGDfvswj7o18qXG_7Ytz7a3fL2Zmzt8UXtvp_FQC6Tg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR01BUeYpLZVssNotySDrq41BkCPs-s_M7J0ez9T-5-J1BSeTP7PUjKmJuc">< FaWhatsapp/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <footer>
        <p>Copyright &copy; 2023  <a href="https://bryan-coronado.netlify.app/">BRYAN CORONADO</a> <br /> TODOS LOS RERECHOS RESERVADOS.</p>
      </footer>
    </>
  );
}

export default Footer;
