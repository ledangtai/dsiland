import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Duan from './Duan'
import '../Duan/Listduan.css'
import axiosClient from '../../API/AxiosClient'
import dongke from '../../img/dongke.png'
import { useParams } from 'react-router'
import ReactPaginate from 'react-paginate'
export default function DsDuan (){
const [products,setProducts] = useState([])
let {madm,num} = useParams();
const [p,setP] = useState(0)
const [search,setSearch] = useState('')
const [isSearch,setIsSearch] = useState(false)
const [pageNum,setPageNum] = useState(1)
const myStorage = window.localStorage;
let language = myStorage.getItem('language')
useEffect(async()=>{
    if(!madm){
      try {
        const data = await axios.get(process.env.REACT_APP_API_KEY + "getduan.php",null)
        setPageNum(data.length / 8)
        setProducts(data.data.reverse());
      } catch (error) {
        console.log(error)
      }
    }
    if(num){
      setP(Number(num) -1)
    }
  }
,[]) 
useEffect(async()=>{
  if(madm){
    try {

      const data = await axiosClient.get('sanpham/danhmuc/'+madm,null);
      setPageNum(data.length / 8 )
      setProducts(data);
    } catch (error) {
      console.log(error)
    }
  }
}
,[madm]) 
const renderPage = ()=>{
  const items = []
  for(let i =0;i<pageNum;i++){
    items.push(<li className="page-item"><a className="page-link" href={'/page/'+Number(i+1)}>{i+1}</a></li>)
  }
  return items;
}
const handleSearch = (e)=>{
const {value} = e.target;
setSearch(value);
}
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
const isMobile1 = viewPort.width <= 500;
if(isMobile1){
  return (
    <div className='my-carousel mt-4 listduan'>
      
        <form className='search input-group' style={{margin:'0 auto',width:'99%', padding:' 0 10%'}} onFocus={()=>setIsSearch(true)} onBlur={()=>setIsSearch(false)}>
         <div style={{display:'flex',width:'100%', textAlign:'center', paddingLeft:'20%'}}>
          <input className='search-bar duan-input-search'  placeholder='Search By Project Title.....' onChange={handleSearch} />
          <p className="duan-search" style={{fontSize:'12px', padding:'2% 2%'}}>Search</p>
        </div>
        </form>
        <div className='duan-img'>
                <h2>List Projects</h2>
                   <img src={dongke} />
                </div>
        <div className='row text-center'>
            {products.slice(p *   8,  8 + p * 8).map(da =>{
               if(da.tieude.toLowerCase().includes(search.toLowerCase()))
                return (
                    <div style={{marginBottom:'5%'}} className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                        <Duan duan = {da} key={da.maduan}/>
                    </div>
                )
            })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={p  <=0?"page-item disabled":'page-item'}>
        
              <a className="page-link" href={'/pageEN/' +Number(p)} >PREV</a>
            </li>
            {renderPage()}
            
            <li className={p>=pageNum -1?"page-item disabled":'page-item'}>
           
           <a className="page-link" href={'/pageEN/' +Number(p+2)}>Next</a>
            </li>
          </ul>
        </nav>
        
        
    </div>
)
}
    return (
        <div className='my-carousel mt-4 listduan'>
            <form className='search input-group' style={{margin:'0 auto',width:'99%', padding:' 0 10%'}} onFocus={()=>setIsSearch(true)} onBlur={()=>setIsSearch(false)}>
         <div style={{display:'flex',width:'100%', textAlign:'center', paddingLeft:'20%'}}>
          <input className='search-bar duan-input-search'  placeholder='Search By Project Title.....' onChange={handleSearch} />
          <p className="duan-search" style={{fontSize:'12px', padding:'2% 2%'}}>Search</p>
        </div>
        </form>
        <div className='duan-img'>
                <h2>List Projects</h2>
                   <img src={dongke} />
                </div>
        <div className='row text-center'>
            {products.slice(p *   8,  8 + p * 8).map(da =>{
               if(da.tieude.toLowerCase().includes(search.toLowerCase()))
                return (
                    <div style={{marginBottom:'5%'}} className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                        <Duan duan = {da} key={da.maduan}/>
                    </div>
                )
            })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={p  <=0?"page-item disabled":'page-item'}>
        
              <a className="page-link" href={'/pageEN/' +Number(p)} >PREV</a>
            </li>
            {renderPage()}
            
            <li className={p>=pageNum -1?"page-item disabled":'page-item'}>
           
           <a className="page-link" href={'/pageEN/' +Number(p+2)}>Next</a>
            </li>
          </ul>
        </nav>
        
        
        </div>
    )
}