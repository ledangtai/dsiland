import React,{useState,useEffect} from 'react'
import '../Duan/Duan.css'
export default function Duan ({duan}){
  const myStorage = window.localStorage;
  let language = myStorage.getItem('language')
    return (
        <div className='myItem-duan'>
     
     <div onClick={()=> window.location.href="/project/"+duan.maduan}>
        <img style={{borderRadius:'5px'}} className="card-img-top"  src={duan.hinhanh} alt="profile"/> 
          <h1>{duan.tieude}</h1>
          <button className="duan-xemchitiet">See details</button>
      </div>
      </div>
        
    )
    
}