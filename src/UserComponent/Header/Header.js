import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/dsiland.jpg'
import "../Header/Header.css"
import vn from '../../img/vn.png'
import en from '../../img/en.png'
function Header(){
    const myStorage = window.localStorage;
    //let language = myStorage.getItem('language')
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
      const isMobile1 = viewPort.width <= 1125;
      const isMobile2 = viewPort.width <= 900;
      const isMobile3 = viewPort.width <= 770;
      const [display, setdisplay] = useState("nav-1");
      const [display1, setdisplay1] = useState("i-1");
      const header = () =>{
            setdisplay("nav-2")
            setdisplay1("i-2")
      } 
      const tat = () =>{
        setdisplay("nav-1")
        setdisplay1("i-1")
  }        
      if(isMobile3){
        return(
          <div className= "mobile-3">
           <div className="header">
            <div className="container">
                <div className="row">
                <div className="col-sm-3 header-logo">
                    <img src={logo}/>
                </div>
                <div className=" header-main">
               <div className={display1}> <i class="fa fa-align-justify" onClick={header}></i></div>
                    <nav className= {display} >
                    <i class="fa fa-times" onClick={tat} ></i>
                        <ul>
                            <li >
                               <a href="/"> HOME</a>
                            </li>
                            <li className="col-sm-2">
                               <a href="/project"> PROJECT </a>
                            </li>
                            <li className="col-sm-2">
                            <a href="/services"> SERVICES </a>
                            </li>
                            <li className="col-sm-2">
                            <a href="/news"> NEWS </a>
                            </li>
                            <li className="col-sm-2">
                            <a href="/contacts"> CONTACTS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div> 
         </div> 
          </div>
        )
    }
     else if(isMobile2){
        return(
          <div className= "mobile-2">
           <div className="header">
            <div className="container">
                <div className="row">
                <div className="col-md-3 header-logo">
                    <img src={logo}/>
                </div>
                <div className="col-md-9 d-flex row header-main">
                    <nav className="primary-menu">
                        <ul className="d-flex">
                            <li className="col-md-2">
                               <a href="/"> HOME</a>
                            </li>
                            <li className="col-md-2">
                               <a href="/project"> PROJECT </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/services"> SERVICES </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/news"> NEWS </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/contacts"> CONTACTS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div> 
         </div> 
          </div>
        )
    }
     else  if(isMobile1){
          return(
            <div className= "mobile-1">
             <div className="header">
            <div className="container">
                <div className="row">
                <div className="col-md-3 header-logo">
                    <img src={logo}/>
                </div>
                <div className="col-md-9 d-flex row header-main">
                    <nav className="primary-menu">
                        <ul className="d-flex">
                            <li className="col-md-2">
                               <a href="/"> HOME</a>
                            </li>
                            <li className="col-md-2">
                               <a href="/project"> PROJECT </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/services"> SERVICES </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/news"> NEWS </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/contacts"> CONTACTS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div> 
         </div> 
            </div>
          )
      }
      
      else{
     return(
         <div className="header">
            <div className="container">
                <div className="row">
                <div className="col-md-3 header-logo">
                    <img src={logo}/>
                </div>
                <div className="col-md-7 d-flex row header-main">
                    <nav className="primary-menu">
                        <ul className="d-flex">
                            <li className="col-md-2">
                               <a href="/"> HOME</a>
                            </li>
                            <li className="col-md-2">
                               <a href="/project"> PROJECT </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/services"> SERVICES </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/news"> NEWS </a>
                            </li>
                            <li className="col-md-2">
                            <a href="/contacts"> CONTACTS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-2 header-right d-flex">
                    <div className="sdt">
                    <i class="fa fa-phone"></i> +84-274-6275789 
                    </div>
                </div>
                </div>
            </div> 
         </div>
     )}
}
export default Header