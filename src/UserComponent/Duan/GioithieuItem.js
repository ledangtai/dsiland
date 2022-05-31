import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import '../Duan/DuanItem.css'
import dongke from '../../img/bg_content-300x13.png'
function GioithieuItem(){
    const [gioithieuItem,setGioithieuItem] = useState({});
    const [gioithieu,setgioithieu] = useState([]);
    const [on,setOn] = useState(false)
    let {magt} = useParams();
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    useEffect( async()=>{
       await axios.get(process.env.REACT_APP_API_KEY+'ItemGioithieu/ ' + magt)
        .then(response =>{ 
            setGioithieuItem(response.data[0])
        })
        .catch(erro => console.log('loi roi'))
        axios.get(process.env.REACT_APP_API_KEY + "ListGioithieu")
            .then(response => {setgioithieu(response.data.reverse()); console.log()})
            .catch(console.error())
    },[])
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
      const isMobile1 = viewPort.width <= 1000;
      if(isMobile1){
        return(
            <div className="duanItem duanItem-mobile container"> 
                 <div className="left left-mobile">
                     <div className = "left-tieude">
                     <h1>{gioithieuItem.tieude}</h1>
                     <img src = {dongke} />
                     </div>
                     <div className=' left-noidung-mobile1'>
                     <img style={{width:'100%',  height:"100%", margin:'0 0 0 1%', borderRadius:'5px'}} src = {gioithieuItem.hinhanh} />
                     <div className='noidung' id ="style-1">{ReactHtmlParser(gioithieuItem.noidung)}</div>
                   
                     
                     </div>
                 </div>
                 <div className='right right-mobile'>
                     {language==0?<h1>Hiểu Hơn Về DSI Group</h1>:''}
                     {language==1?<h1>Learn More About DSI Group</h1>:''}
                     <table className="table table-bordered text-algin-center right-table right-table-mobile" id ="style-3">
                 <tbody>
                     {gioithieu.map(sp =>{
                         return(
                         <tr key = {sp.magt}>
                             {language==0?<td onClick={()=> window.location.href="/gioithieu/"+sp.magt}>
                                 <img style={{width:'100%'}} src = {sp.hinhanh} />
                                 <p>{sp.tieude}</p>
                             </td>:''}
                             {language==1?<td onClick={()=> window.location.href="/introduction/"+sp.magt}>
                                 <img style={{width:'100%'}} src = {sp.hinhanh} />
                                 <p>{sp.tieude}</p>
                             </td>:''}
                         </tr>
                     )})}
                 </tbody>
             </table>
                 </div>
            </div>
        )
      }
   return(
       <div className="duanItem container"> 
            <div className="left">
                <div className = "left-tieude">
                <h1>{gioithieuItem.tieude}</h1>
                <img src = {dongke} />
                </div>
                <div className='left-noidung-mobile1'>
                <div className='noidung' id ="style-1">{ReactHtmlParser(gioithieuItem.noidung)}</div>
                <img style={{width:'400px',  height:"100%", margin:'0 0 0 1%', borderRadius:'5px'}} src = {gioithieuItem.hinhanh} />
                
                </div>
            </div>
            <div className='right'>
                {language==0?<h1>Hiểu Hơn Về DSI Group</h1>:''}
                {language==1?<h1>Learn More About DSI Group</h1>:''}
                <table className="table table-bordered text-algin-center right-table " id ="style-3">
            <tbody>
                {gioithieu.map(sp =>{
                    return(
                    <tr key = {sp.magt}>
                        {language==0?<td onClick={()=> window.location.href="/gioithieu/"+sp.magt}>
                            <img style={{width:'100%'}} src = {sp.hinhanh} />
                            <p>{sp.tieude}</p>
                        </td>:''}
                        {language==1?<td onClick={()=> window.location.href="/introduction/"+sp.magt}>
                            <img style={{width:'100%'}} src = {sp.hinhanh} />
                            <p>{sp.tieude}</p>
                        </td>:''}
                    </tr>
                )})}
            </tbody>
        </table>
            </div>
       </div>
   )
}
export default GioithieuItem