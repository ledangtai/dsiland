import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import '../Duan/DuanItem.css'
import dongke from '../../img/bg_content-300x13.png'
function ForSaleItem(){
    const [duanItem,setDuanItem] = useState({});
    const [sanpham,setsanpham] = useState([]);
    const [on,setOn] = useState(false)
    let {maduan} = useParams();
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    useEffect( async()=>{
       
        console.log(maduan)
        let ma = new FormData();
        ma.append("maduan",maduan)
        console.log(ma)
       await axios.post(process.env.REACT_APP_API_KEY+'getduanItem.php',ma)
        .then(response =>{ 
            setDuanItem(response.data)
            console.log(response)
        })
        .catch(erro => console.log('loi roi'))
        axios.get(process.env.REACT_APP_API_KEY + "getduan.php")
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
            <div className="duanItem duanItem-mobile container"> 
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
                 <div className='right right-mobile'>
                    
                     <h1>Similar Projects</h1>
                     <table className="table table-bordered text-algin-center right-table right-table-mobile " id ="style-3">
                 <tbody>
                     {sanpham.map(sp =>{
                         return(
                         <tr key = {sp.maduan}>
                        
                             <td onClick={()=> window.location.href="/ForRent/"+sp.maduan}>
                                 <img style={{width:'100%'}} src = {sp.hinhanh} />
                                 <p>{sp.tieude}</p>
                             </td>
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
            
            <h1>Similar Projects</h1>
                <table className="table table-bordered text-algin-center right-table " id ="style-3">
            <tbody>
                {sanpham.map(sp =>{
                    return(
                    <tr key = {sp.maduan}>
                        
                   <td onClick={()=> window.location.href="/ForRent/"+sp.maduan}>
                            <img style={{width:'100%'}} src = {sp.hinhanh} />
                            <p>{sp.tieude}</p>
                        </td>
                    </tr>
                )})}
            </tbody>
        </table>
            </div>
       </div>
   )
}
export default ForSaleItem