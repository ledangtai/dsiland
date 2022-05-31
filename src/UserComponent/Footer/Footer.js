import React from "react";
import '../Footer/Footer.css'

import SimpleMap from "./SimpleMap";
function Footer(){
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
      const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
      
        React.useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
      
        return { width };
      };
      const viewPort = useViewport();
      const isMobile1 = viewPort.width <= 1200;
      const isMobile2 = viewPort.width <= 975;
      const isMobile3 = viewPort.width <= 755;
      if(isMobile3){
        return(
          <div className="footer-mobile-3">
             <div className="container">
              <div className="footer-content">
                  <div className="footer-left">
                      <h1>DSILAND</h1>
                      <ul>
                          <li> <a href="/"><i class="fa fa-home"></i>HOME</a></li>
                          <li><a href="/project"><i class="fa fa-building"></i>PROJECT</a></li>
                          <li><a href="/services"><i class="fa fa-folder"></i>SERVICES</a></li>
                          <li><a href="/new"><i class="fa fa-fort-awesome"></i>NEWS</a></li>
                          <li><a href="/contact"><i class="fa fa-phone"></i>CONTACTS</a></li>
                      </ul>
                  </div>
                  <div className="footer-center">
                      <h1>CONTACTS</h1>
                      <ul>
                          <li>
                              <h2>BINH DUONG</h2>
                              <p>D32, 4th Road, Binh Duong II, An Binh Ward, Di An Town, Binh Duong Province.</p>
                              <p>Tel: 84-274-6275789 - Fax: 84-274-6275789</p>
                          </li>
                           <li>Email: info@dsiviet.com.vn or sales@dsiviet.com.vn</li>
                      </ul>
                  </div>
              </div>
      
              </div>
      </div>
        )
    }
      if(isMobile2){
        return(
          <div className="footer-mobile-2">
            <div className="container">
              <div className="footer-content">
                  <div className="footer-left">
                      <h1>DSILAND</h1>
                      <ul>
                          <li> <a href="/"><i class="fa fa-home"></i>HOME</a></li>
                          <li><a href="/project"><i class="fa fa-building"></i>PROJECT</a></li>
                          <li><a href="/services"><i class="fa fa-folder"></i>SERVICES</a></li>
                          <li><a href="/new"><i class="fa fa-fort-awesome"></i>NEWS</a></li>
                          <li><a href="/contact"><i class="fa fa-phone"></i>CONTACTS</a></li>
                      </ul>
                  </div>
                  <div className="footer-center">
                      <h1>CONTACTS</h1>
                      <ul>
                          <li>
                              <h2>BINH DUONG</h2>
                              <p>D32, 4th Road, Binh Duong II, An Binh Ward, Di An Town, Binh Duong Province.</p>
                              <p>Tel: 84-274-6275789 - Fax: 84-274-6275789</p>
                          </li>
                           <li>Email: info@dsiviet.com.vn or sales@dsiviet.com.vn</li>
                      </ul>
                  </div>
              </div>
      
              </div>
      </div>
        )
    }
      if(isMobile1){
          return(
            <div className="footer-mobile-1">
  <div className="container">
              <div className="footer-content">
                  <div className="footer-left">
                      <h1>DSILAND</h1>
                      <ul>
                          <li> <a href="/"><i class="fa fa-home"></i>HOME</a></li>
                          <li><a href="/project"><i class="fa fa-building"></i>PROJECT</a></li>
                          <li><a href="/services"><i class="fa fa-folder"></i>SERVICES</a></li>
                          <li><a href="/new"><i class="fa fa-fort-awesome"></i>NEWS</a></li>
                          <li><a href="/contact"><i class="fa fa-phone"></i>CONTACTS</a></li>
                      </ul>
                  </div>
                  <div className="footer-center">
                      <h1>CONTACTS</h1>
                      <ul>
                          <li>
                              <h2>BINH DUONG</h2>
                              <p>D32, 4th Road, Binh Duong II, An Binh Ward, Di An Town, Binh Duong Province.</p>
                              <p>Tel: 84-274-6275789 - Fax: 84-274-6275789</p>
                          </li>
                           <li>Email: info@dsiviet.com.vn or sales@dsiviet.com.vn</li>
                      </ul>
                  </div>
              </div>
      
              </div>
        </div>
          )
      }
      
   
    return(
        <div className="footer">
             <div className="container">
              <div className="footer-content">
                  <div className="footer-left">
                      <h1>DSILAND</h1>
                      <ul>
                          <li> <a href="/"><i class="fa fa-home"></i>HOME</a></li>
                          <li><a href="/project"><i class="fa fa-building"></i>PROJECT</a></li>
                          <li><a href="/services"><i class="fa fa-folder"></i>SERVICES</a></li>
                          <li><a href="/new"><i class="fa fa-fort-awesome"></i>NEWS</a></li>
                          <li><a href="/contact"><i class="fa fa-phone"></i>CONTACTS</a></li>
                      </ul>
                  </div>
                  <div className="footer-center">
                      <h1>CONTACTS</h1>
                      <ul>
                          <li>
                              <h2>BINH DUONG</h2>
                              <p>D32, 4th Road, Binh Duong II, An Binh Ward, Di An Town, Binh Duong Province.</p>
                              <p>Tel: 84-274-6275789 - Fax: 84-274-6275789</p>
                          </li>
                           <li>Email: info@dsiviet.com.vn or sales@dsiviet.com.vn</li>
                      </ul>
                  </div>
              </div>
      
                </div>
            </div>
    )
     
}
export default Footer