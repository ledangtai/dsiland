import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Duannoibat.css"
export default function ForSale({duan}){
  const myStorage = window.localStorage;

    return( 
            <div className='myItem'>
              <span className="ban">For Sale</span>
              <span className="hot">HOT</span>
            <div onClick={()=> window.location.href="/ForSale/"+duan.maduan }> 
                <div className="image"><img className="card-img-top"  src={duan.hinhanh} alt="profile"/></div>    
                <h1>{duan.tieude}</h1>
                <button className="duan-button">Xem Chi Tiết</button>
            </div>
            </div>
            

    )
}