import React,{useState,useEffect} from 'react'
import '../Duan/Duan.css'
export default function SGD ({duan}){
  const myStorage = window.localStorage;
  let language = myStorage.getItem('language')
    return (
        <div className='myItem-duan'>
        {language==0?<div onClick={()=> window.location.href="/sgd/"+duan.masgd}>
        <img style={{borderRadius:'5px'}} className="card-img-top"  src={duan.hinhanh} alt="profile"/> 
          <h1>{duan.tieude}</h1>
          <button className="duan-xemchitiet">Xem Chi Tiết</button>
      </div>:''}
      {language==1?<div onClick={()=> window.location.href="/sgdEN/"+duan.masgd}>
        <img style={{borderRadius:'5px'}} className="card-img-top"  src={duan.hinhanh} alt="profile"/> 
          <h1>{duan.tieude}</h1>
          <button className="duan-xemchitiet">See details</button>
      </div>:''}
      </div>
        
    )
    
}