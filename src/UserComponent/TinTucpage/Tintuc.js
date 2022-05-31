import axios from "axios";
import React, { useEffect, useState } from "react";
import "../TinTucpage/Tintuc.css"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function Tintuc({tintuc}){
  const myStorage = window.localStorage;
  let language = myStorage.getItem('language')
    return(
            <div className='myItem-tintuc'>
             {language==0? <div onClick={()=> window.location.href="/tintuc/"+tintuc.mattsk}>
                <div className="image"><img className="card-img-top"  src={tintuc.hinhanh} alt="profile"/></div>    
                <h1>{tintuc.tieude}</h1>
                <p className='tintuc-p'> {ReactHtmlParser(tintuc.noidung)}</p>
               <button onClick={()=> window.location.href="/tintuc/"+tintuc.tieude}>Xem Chi Tiết</button>
            </div>:''}
            {language==1? <div onClick={()=> window.location.href="/news/"+tintuc.mattsk}>
                <div className="image"><img className="card-img-top"  src={tintuc.hinhanh} alt="profile"/></div>    
                <h1>{tintuc.tieude}</h1>
                <p className='tintuc-p'> {ReactHtmlParser(tintuc.noidung)}</p>
               <button onClick={()=> window.location.href="/tintuc/"+tintuc.tieude}>See details</button>
            </div>:''}
            </div>
            

    )
}
export default Tintuc