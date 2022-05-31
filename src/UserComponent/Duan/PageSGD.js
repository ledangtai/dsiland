import axios from 'axios'
import React,{useEffect,useState} from 'react'
import '../Duan/Listduan.css'
import axiosClient from '../../API/AxiosClient'
import dongke from '../../img/dongke.png'
import { useParams } from 'react-router'
import ReactPaginate from 'react-paginate'
import SGD from './SGD'
export default function DsSGD (){
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
        const data = await axios.get(process.env.REACT_APP_API_KEY + "Listsangiaodich",null)
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
        {language==0?<form className='search input-group' style={{margin:'0 auto',width:'99%', padding:' 0 10%'}} onFocus={()=>setIsSearch(true)} onBlur={()=>setIsSearch(false)}>
         <div style={{display:'flex',width:'100%', textAlign:'center', paddingLeft:'20%'}}>
          <input className='search-bar duan-input-search'  placeholder='Tìm Kiếm Theo Tiêu Đề Của Sàn Giao Dịch.....' onChange={handleSearch} />
          <p className="duan-search" style={{fontSize:'12px', padding:'2% 1%'}}>Tìm Kiếm</p>
        </div>
        </form>:''}
        {language==1?<form className='search input-group' style={{margin:'0 auto',width:'99%', padding:' 0 10%'}} onFocus={()=>setIsSearch(true)} onBlur={()=>setIsSearch(false)}>
         <div style={{display:'flex',width:'100%', textAlign:'center', paddingLeft:'20%'}}>
          <input className='search-bar duan-input-search'  placeholder='Search by Exchange Title.....' onChange={handleSearch} />
          <p className="duan-search" style={{fontSize:'12px', padding:'2% 1%'}}>Search</p>
        </div>
        </form>:''}
        <div className='duan-img'>
                   {language==0?<h2>Sàn Giao Dịch</h2>:''}
                    {language==1?<h2>Exchanges</h2>:''}
                   <img src={dongke} />
                </div>
        <div className='row text-center'>
            {products.slice(p *   8,  8 + p * 8).map(da =>{
               if(da.tieude.toLowerCase().includes(search.toLowerCase()))
                return (
                    <div style={{marginBottom:'5%'}} className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                        <SGD duan = {da} key={da.madv}/>
                    </div>
                )
            })}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={p  <=0?"page-item disabled":'page-item'}>
              {language==0?<a className="page-link" href={'/pageSGD/' +Number(p)} >Trang trước</a>:''}
              {language==1?<a className="page-link" href={'/pageSGDEN/' +Number(p)} >PREV</a>:''}
            </li>
            {renderPage()}
            
            <li className={p>=pageNum -1?"page-item disabled":'page-item'}>
            {language==0?<a className="page-link" href={'/pageSGD/' +Number(p+2)}>Trang tiếp</a>:''}
            {language==1?<a className="page-link" href={'/pageSGDEN/' +Number(p+2)}>Next</a>:''}
            </li>
          </ul>
        </nav>
        
    </div>
)
}
    return (
        <div className='my-carousel mt-4 listduan'>
            {language==0?<form className='search input-group' style={{margin:'0 auto',width:'99%', padding:' 0 10%'}} onFocus={()=>setIsSearch(true)} onBlur={()=>setIsSearch(false)}>
             <div style={{display:'flex',width:'100%', textAlign:'center', paddingLeft:'20%'}}>
              <input className='search-bar duan-input-search'  placeholder='Tìm Kiếm Theo Tiêu Đề Của Sàn Giao Dịch.....' onChange={handleSearch} />
              <p className="duan-search">Tìm Kiếm</p>
            </div>
            </form>:''}
            {language==1?<form className='search input-group' style={{margin:'0 auto',width:'99%', padding:' 0 10%'}} onFocus={()=>setIsSearch(true)} onBlur={()=>setIsSearch(false)}>
             <div style={{display:'flex',width:'100%', textAlign:'center', paddingLeft:'20%'}}>
              <input className='search-bar duan-input-search'  placeholder='Search by Exchange Title.....' onChange={handleSearch} />
              <p className="duan-search">Search</p>
            </div>
            </form>:''}
            <div className='duan-img'>
                       {language==0?<h2>Sàn Giao Dịch</h2>:''}
                        {language==1?<h2>Exchanges</h2>:''}
                       <img src={dongke} />
                    </div>
            <div className='row text-center'>
                {products.slice(p *   8,  8 + p * 8).map(da =>{
                   if(da.tieude.toLowerCase().includes(search.toLowerCase()))
                    return (
                        <div style={{marginBottom:'5%'}} className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                            <SGD duan = {da} key={da.madv}/>
                        </div>
                    )
                })}
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={p  <=0?"page-item disabled":'page-item'}>
                  {language==0?<a className="page-link" href={'/pageSGD/' +Number(p)} >Trang trước</a>:''}
                  {language==1?<a className="page-link" href={'/pageSGDEN/' +Number(p)} >PREV</a>:''}
                </li>
                {renderPage()}
                
                <li className={p>=pageNum -1?"page-item disabled":'page-item'}>
                {language==0?<a className="page-link" href={'/pageSGD/' +Number(p+2)}>Trang tiếp</a>:''}
                {language==1?<a className="page-link" href={'/pageSGDEN/' +Number(p+2)}>Next</a>:''}
                </li>
              </ul>
            </nav>
            
        </div>
    )
}