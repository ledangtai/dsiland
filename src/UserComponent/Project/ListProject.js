import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Carousle/Carousle.css'
import Duannoibat from "./Project";
import axios from "axios";
import "../ForSale/Listduan.css"
import hinh from "../../img/bg_title.png"
function ListProject(){
    const[duan,setduan] = useState([]);
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_KEY+'getduan.php')
                .then(response => setduan(response.data.reverse()) )
                .catch(erro => console.log(erro))
    },[])
    const settings = {
        infinite: true,
        speed: 1000,
        autoplay:false,
       autoplayTimeout: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        next: true,
        prev: true
        };
        const settings3 = {
            infinite: true,
            speed: 1000,
            autoplay:false,
           autoplayTimeout: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            next: true,
            prev: true
            };
            const settings2 = {
                infinite: true,
                speed: 1000,
                autoplay:false,
               autoplayTimeout: 1000,
                slidesToShow:2,
                slidesToScroll: 1,
                next: true,
                prev: true
                };
                const settings1 = {
                    infinite: true,
                    speed: 1000,
                    autoplay:false,
                   autoplayTimeout: 1000,
                    slidesToShow:3,
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
          const isMobile1 = viewPort.width <= 1125;
          const isMobile2 = viewPort.width <= 900;
          const isMobile3 = viewPort.width <= 700;

          if(isMobile3){
              return(
                <div className =" Duannoibat">
                <div className =" container">
                     <a className="duannoibat-a" href="/project"><span className="duannoibat-span">Project</span></a>
                       
                        <Slider  nav className="my-carousel" {...settings3}>
                            {duan.map(da=>{
                                return(
                                <Duannoibat duan = {da} key={duan.masp} />
                                )
                            })}
            
                        </Slider>
                       
                    </div> 
                    </ div>
              )
            
          }
          if(isMobile2){
            return(
              <div className =" Duannoibat">
              <div className =" container">
              <a className="duannoibat-a" href="/project"><span className="duannoibat-span">Project</span></a>
             
                      <Slider  nav className="my-carousel" {...settings2}>
                          {duan.map(da=>{
                              return(
                              <Duannoibat duan = {da} key={duan.masp} />
                              )
                          })}
          
                      </Slider>
                   
                  </div>
                  </div> 
            )
          
        }
        if(isMobile1){
            return(
              <div className =" Duannoibat">
              <div className =" container">
              <a className="duannoibat-a" href="/project"><span className="duannoibat-span">Project</span></a>
              
                      <Slider  nav className="my-carousel" {...settings1}>
                          {duan.map(da=>{
                              return(
                              <Duannoibat duan = {da} key={duan.masp} />
                              )
                          })}
          
                      </Slider>
                     
                  </div>
                  </div> 
            )
          
        }
    return(      
        <div className =" Duannoibat">
                <div className =" container">
                <a className="duannoibat-a" href="/project"><span className="duannoibat-span">Project</span><br/><img style={{marginBottom:"2%", marginTop:'1%'}} src={hinh}/></a>
                
                        <Slider  nav className="my-carousel" {...settings}>
                            
                            {duan.map(da=>{
                                return(
                                    
                                <Duannoibat duan = {da} key={duan.masp} />
                                )
                            })}
            
                        </Slider>
                       
                    </div>
                    </div> 
          )
}
export default ListProject