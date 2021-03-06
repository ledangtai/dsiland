import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Carousle/Carousle.css'
import dongke from '../../img/dongke.png'
import axios from "axios";
import "../TinTucpage/Tintuc.css"
import Tintuc from "./Tintuc";

import Cnhd from "./Cnhd";
import Sangiaodich from "./Sangiaodich";
function ListSgd(){
    const[sgd,setsgd] = useState([]);
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_KEY+'ListSangiaodich')
                .then(response => setsgd(response.data.reverse()) )
                .catch(erro => console.log(erro))
    },[])
    
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        next: true,
        prev: true
        };
        const settings1 = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            next: true,
            prev: true
            };
            const settings2 = {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                next: true,
                prev: true
                };
                const settings3 = {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    next: true,
                    prev: true
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
          
          const isMobile1 = viewPort.width <= 900;
          const isMobile2 = viewPort.width <= 700;
          const isMobile3 = viewPort.width <= 500;
          if(isMobile3){
            return(      
                <div className ="tintuc tintuc-mobile3">
                                <div className='khachhang-img'>
                                {language==0?<h2>S??N GIAO D???CH</h2>:''}
                                {language==1?<h2>Exchanges</h2>:''}
                               <img src={dongke} />
                            </div>
                           {language==0? <div className="xemtatca"> <a href = "/sgd">Xem T???t C??? </a></div>:''}
                           {language==1? <div className="xemtatca"> <a href = "/sgdEN">See All </a></div>:''}
                                <Slider  nav className="my-carousel" {...settings3}>
                                    {sgd.map(s=>{
                                        return(
                                        <Sangiaodich sangiaodich = {s} key={sgd.masgd} />
                                        )
                                    })}
                    
                                </Slider>
                                
                            </div>
                            
                        
                  )
          }
          if(isMobile2){
            return(      
                <div className ="tintuc tintuc-mobile">
                                <div className='khachhang-img'>
                                {language==0?<h2>S??N GIAO D???CH</h2>:''}
                                {language==1?<h2>Exchanges</h2>:''}
                               <img src={dongke} />
                            </div>
                           {language==0? <div className="xemtatca"> <a href = "/sgd">Xem T???t C??? </a></div>:''}
                           {language==1? <div className="xemtatca"> <a href = "/sgdEN">See All </a></div>:''}
                                <Slider  nav className="my-carousel" {...settings2}>
                                    {sgd.map(s=>{
                                        return(
                                        <Sangiaodich sangiaodich = {s} key={sgd.masgd} />
                                        )
                                    })}
                    
                                </Slider>
                                
                            </div>
                            
                        
                  )
          }
          if(isMobile1){
            return(      
                <div className ="tintuc tintuc-mobile">
                                <div className='khachhang-img'>
                                {language==0?<h2>S??N GIAO D???CH</h2>:''}
                                {language==1?<h2>Exchanges</h2>:''}
                               <img src={dongke} />
                            </div>
                           {language==0? <div className="xemtatca"> <a href = "/sgd">Xem T???t C??? </a></div>:''}
                           {language==1? <div className="xemtatca"> <a href = "/sgdEN">See All </a></div>:''}
                                <Slider  nav className="my-carousel" {...settings1}>
                                    {sgd.map(s=>{
                                        return(
                                        <Sangiaodich sangiaodich = {s} key={sgd.masgd} />
                                        )
                                    })}
                    
                                </Slider>
                                
                            </div>
                            
                        
                  )
          }
    return(      
        <div className ="tintuc">
                        <div className='khachhang-img'>
                        {language==0?<h2>S??N GIAO D???CH</h2>:''}
                        {language==1?<h2>Exchanges</h2>:''}
                       <img src={dongke} />
                    </div>
                   {language==0? <div className="xemtatca"> <a href = "/sgd">Xem T???t C??? </a></div>:''}
                   {language==1? <div className="xemtatca"> <a href = "/sgdEN">See All </a></div>:''}
                        <Slider  nav className="my-carousel" {...settings}>
                            {sgd.map(s=>{
                                return(
                                <Sangiaodich sangiaodich = {s} key={sgd.masgd} />
                                )
                            })}
            
                        </Slider>
                        
                    </div>
                    
                
          )
}
export default ListSgd