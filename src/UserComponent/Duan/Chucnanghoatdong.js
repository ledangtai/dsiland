import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import '../Duan/DuanItem.css'
import dongke from '../../img/bg_content-300x13.png'
function CNHDItem(){
    const [duanItem,setDuanItem] = useState({});
    const [sanpham,setsanpham] = useState([]);
    const [on,setOn] = useState(false)
    let {macnhd} = useParams();
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    useEffect( async()=>{
       await axios.get(process.env.REACT_APP_API_KEY+'ItemCNHD/ ' + macnhd)
        .then(response =>{ 
            setDuanItem(response.data[0])
            console.log(duanItem) 
        })
        .catch(erro => console.log('loi roi'))
        axios.get(process.env.REACT_APP_API_KEY + "Listchucnanghoatdong")
            .then(response => {setsanpham(response.data.reverse()); console.log(sanpham.length)})
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
            <div className="duanItem container duanItem-mobile"> 
                 <div className="left left-mobile">
                     <div className = "left-tieude">
                     <h1>{duanItem.tieude}</h1>
                     <img src = {dongke} />
                     </div>
                     <div className='left-noidung-mobile1'>
                     <img style={{width:'100%',  height:"100%", margin:'0 0 0 1%', borderRadius:'5px'}} src = {duanItem.hinhanh} />
                     <div className='noidung' id ="style-1">{ReactHtmlParser(duanItem.noidung)}</div>
                    
                     
                     </div>
                 </div>
                 <div className='right  right-mobile'>
                     {language==0?<h1>Ch???c N??ng Ho???t ?????ng</h1>:''}
                     {language==1?<h1>Operation Function</h1>:''}
                     <table className="table table-bordered text-algin-center right-table right-table-mobile " id ="style-3">
                 <tbody>
                     {sanpham.map(sp =>{
                         return(
                         <tr key = {sp.macnhd}>
                            {language==0?<td onClick={()=> window.location.href="/cnhd/"+sp.macnhd}>
                                 <img style={{width:'100%'}} src = {sp.hinhanh} />
                                 <p>{sp.tieude}</p>
                             </td>:''}
                             {language==1?<td onClick={()=> window.location.href="/cnhdEN/"+sp.macnhd}>
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
                <h1>{duanItem.tieude}</h1>
                <img src = {dongke} />
                </div>
                <div className='left-noidung'>
                <div className='noidung' id ="style-1">{ReactHtmlParser(duanItem.noidung)}</div>
                <img style={{width:'400px',  height:"100%", margin:'0 0 0 1%', borderRadius:'5px'}} src = {duanItem.hinhanh} />
                
                </div>
            </div>
            <div className='right'>
                {language==0?<h1>Ch???c N??ng Ho???t ?????ng</h1>:''}
                {language==1?<h1>Operation Function</h1>:''}
                <table className="table table-bordered text-algin-center right-table " id ="style-3">
            <tbody>
                {sanpham.map(sp =>{
                    return(
                    <tr key = {sp.macnhd}>
                       {language==0?<td onClick={()=> window.location.href="/cnhd/"+sp.macnhd}>
                            <img style={{width:'100%'}} src = {sp.hinhanh} />
                            <p>{sp.tieude}</p>
                        </td>:''}
                        {language==1?<td onClick={()=> window.location.href="/cnhdEN/"+sp.macnhd}>
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
export default CNHDItem