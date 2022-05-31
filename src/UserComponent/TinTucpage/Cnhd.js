import axios from "axios";
import React, { useEffect, useState } from "react";
import "../TinTucpage/Tintuc.css"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function Cnhd({cnhd}){
  const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    return(
            <div className='myItem-tintuc'>
              {language==0?<div onClick={()=> window.location.href="/cnhd/"+cnhd.macnhd}>
                <div className="image"><img className="card-img-top"  src={cnhd.hinhanh} alt="profile"/></div>    
                <h1>{cnhd.tieude}</h1>
                <p className='tintuc-p'> {ReactHtmlParser(cnhd.noidung)}</p>
               <button onClick={()=> window.location.href="/cnhd/"+cnhd.tieude}>Xem Chi Tiết</button>
            </div>:''}
            {language==1?<div onClick={()=> window.location.href="/cnhdEN/"+cnhd.macnhd}>
                <div className="image"><img className="card-img-top"  src={cnhd.hinhanh} alt="profile"/></div>    
                <h1>{cnhd.tieude}</h1>
                <p className='tintuc-p'> {ReactHtmlParser(cnhd.noidung)}</p>
               <button onClick={()=> window.location.href="/cnhd/"+cnhd.tieude}>See details</button>
            </div>:''}
            </div>
            

    )
}
export default Cnhd