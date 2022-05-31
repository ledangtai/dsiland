import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Carousle/Carousle.css'
import axios from "axios";
import hinh1 from "../../img/collection_1.png"
import hinh2 from "../../img/collection_2.png"
import hinh3 from "../../img/collection_3.png"
import hinh4 from "../../img/collection_4.png"
import hinh5 from "../../img/collection_5.png"
import hinh6 from "../../img/collection_6.png"


function Carousel(){
    const [slide,setSlider] = useState([])
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_KEY + "getslide.php")
        .then(response => setSlider(response.data.reverse()))
        .catch(console.error())
    },[])
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
      };

    return (
          <div className="slider">
            <div className="slider-main">
              <div className="slider-content">
              <h1>TÌM KIẾM NHÀ ĐẤT MƠ ƯỚC</h1>
              <nav>
                <ul className="d-flex ">
                  <li className=" boder"><img src={hinh1}/><span>Căn Hộ</span></li>
                  <li className=" boder"><img src={hinh2}/><span>Biệt Thự</span></li>
                  <li className=" boder"><img src={hinh3}/><span>Chung Cư</span></li>
                  <li className="boder"><img src={hinh4}/><span>Nhà Phố</span></li>
                  <li className="boder"><img src={hinh5}/><span>Văn Phòng</span></li>
                  <li className="cuahang"><img src={hinh6}/><span>Cửa Hàng</span></li>
                </ul>
              </nav>
              </div>
            </div>
            <Slider  nav className="my-carousel" {...settings}>
              {slide.map(sl=>{
                  return(
                     <img src={sl.hinhanh} />
                  )
              })}

            </Slider>
            </div>
    )
}
export default Carousel