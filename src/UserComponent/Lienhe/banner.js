import React from "react";
import '../Lienhe/banner.css'
import { Spring, animated ,config } from "react-spring";
function Banner() {
  const myStorage = window.localStorage;
  let language = myStorage.getItem('language')
    return(
       
             <div className='banner' style = {{height:'200px'}}>
             <Spring
         loop
         from={{ marginLeft: '100%' ,width:'100%' }}
         to={[ 
          { marginLeft: '0%', width:'100%'},
          { marginLeft: '-100%', width:'100%'}
           ]}
         config = {{tension: '20', friction:"20"}}
       >
             {styles =>(
           <animated.div style={styles} >
             
             {language==0?<h1 id="target"><strong style={{color:'red',boxshadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>DSI Viet </strong> - Kiến Tạo Không Gian, Mang Lại Hạnh Phúc</h1>:''}
             {language==1?<h1 id="target"><strong style={{color:'red',boxshadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>DSI Viet </strong> - Creating Space, Bringing Happiness</h1>:''}
            </animated.div>)}
        </Spring>
        </div>
    )
} 
export default Banner
