import axios from "axios";
import React, { useEffect, useState } from "react";
import "../TinTucpage/Tintuc.css"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function Sangiaodich({sangiaodich}){  
  const myStorage = window.localStorage;
  let language = myStorage.getItem('language')
    return(
            <div className='myItem-tintuc'>
              {language == 0?<div onClick={()=> window.location.href="/sgd/"+sangiaodich.masgd}>
                <div className="image"><img className="card-img-top"  src={sangiaodich.hinhanh} alt="profile"/></div>    
                <h1>{sangiaodich.tieude}</h1>
                <p className='tintuc-p'> {ReactHtmlParser(sangiaodich.noidung)}</p>
               <button onClick={()=> window.location.href="/sgd/"+sangiaodich.tieude}>Xem Chi Tiết</button>
            </div>:''}
            {language == 1?<div onClick={()=> window.location.href="/sgdEN/"+sangiaodich.masgd}>
                <div className="image"><img className="card-img-top"  src={sangiaodich.hinhanh} alt="profile"/></div>    
                <h1>{sangiaodich.tieude}</h1>
                <p className='tintuc-p'> {ReactHtmlParser(sangiaodich.noidung)}</p>
               <button onClick={()=> window.location.href="/sgd/"+sangiaodich.tieude}>See details</button>
            </div>:''}
            </div>
            

    )
}
export default Sangiaodich