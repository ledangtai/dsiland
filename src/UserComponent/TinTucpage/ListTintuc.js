import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Carousle/Carousle.css'
import dongke from '../../img/dongke.png'
import axios from "axios";
import "../TinTucpage/Tintuc.css"
import Tintuc from "./Tintuc";


function ListTintuc(){
    const[tintuc,settintuc] = useState([]);
    const[cnhd,setcnhd] = useState([]);
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_KEY+'Listtintucsukien')
                .then(response => settintuc(response.data.reverse()) )
                .catch(erro => console.log(erro))
        axios.get(process.env.REACT_APP_API_KEY+'Listchucnanghoatdong')
                .then(response => setcnhd(response.data.reverse()) )
                .catch(erro => console.log(erro))
    },[])
    
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        next: true,
        prev: true
        };
        const setting = {
            infinite: true,
            slidesToShow: 3,
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
                            {language==0?<h2>TIN TỨC & SỰ KIỆN</h2>:''}
                            {language==1?<h2>NEWS & EVENTS</h2>:''}
                           <img src={dongke} />
                        </div>
                        {language==0?<div className="xemtatca"><a href = "/tintuc">Xem Tất Cả </a></div>:''}
                        {language==1?<div className="xemtatca"><a href = "/new">See All</a></div>:''}
                            <Slider  nav className="my-carousel" {...settings3}>
                                {tintuc.map(tt=>{
                                    return(
                                    <Tintuc tintuc= {tt} key={tintuc.mattsk} />
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
                            {language==0?<h2>TIN TỨC & SỰ KIỆN</h2>:''}
                            {language==1?<h2>NEWS & EVENTS</h2>:''}
                           <img src={dongke} />
                        </div>
                        {language==0?<div className="xemtatca"><a href = "/tintuc">Xem Tất Cả </a></div>:''}
                        {language==1?<div className="xemtatca"><a href = "/new">See All</a></div>:''}
                            <Slider  nav className="my-carousel" {...settings2}>
                                {tintuc.map(tt=>{
                                    return(
                                    <Tintuc tintuc= {tt} key={tintuc.mattsk} />
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
                        {language==0?<h2>TIN TỨC & SỰ KIỆN</h2>:''}
                        {language==1?<h2>NEWS & EVENTS</h2>:''}
                       <img src={dongke} />
                    </div>
                    {language==0?<div className="xemtatca"><a href = "/tintuc">Xem Tất Cả </a></div>:''}
                    {language==1?<div className="xemtatca"><a href = "/new">See All</a></div>:''}
                        <Slider  nav className="my-carousel" {...settings1}>
                            {tintuc.map(tt=>{
                                return(
                                <Tintuc tintuc= {tt} key={tintuc.mattsk} />
                                )
                            })}
            
                        </Slider>
                    </div>
                      )
              }
    return(      
        <div className ="tintuc">
                <div className='khachhang-img'>
                        {language==0?<h2>TIN TỨC & SỰ KIỆN</h2>:''}
                        {language==1?<h2>NEWS & EVENTS</h2>:''}
                       <img src={dongke} />
                    </div>
                    {language==0?<div className="xemtatca"><a href = "/tintuc">Xem Tất Cả </a></div>:''}
                    {language==1?<div className="xemtatca"><a href = "/new">See All</a></div>:''}
                        <Slider  nav className="my-carousel" {...settings}>
                            {tintuc.map(tt=>{
                                return(
                                <Tintuc tintuc= {tt} key={tintuc.mattsk} />
                                )
                            })}
            
                        </Slider>
                    </div>
                   
          )
}
export default ListTintuc