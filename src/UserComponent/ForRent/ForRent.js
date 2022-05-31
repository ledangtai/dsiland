import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Duannoibat.css"
function ForRent({duan}){
  const myStorage = window.localStorage;
  let language = myStorage.getItem('language')
    return( 
            <div className='myItem'>
              <span className="ban">For Rent</span>
              <span className="hot">HOT</span>
            <div onClick={()=> window.location.href="/ForRent/"+duan.maduan }> 
                <div className="image"><img className="card-img-top"  src={duan.hinhanh} alt="profile"/></div>    
                <h1>{duan.tieude}</h1>
                <button className="duan-button">Xem Chi Tiết</button>
            </div>
            </div>
            

    )
}
export default ForRent