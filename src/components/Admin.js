import React,{useState,useEffect} from 'react'
import '../css/Admin.css'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Link,
    useParams,
    useHistory,
    NavLink
  } from "react-router-dom";

function Admin(){
    let myStore = window.localStorage
    let history = useHistory();
    const [user,setUser] = useState(null);
    
    
    let {adminPage} = useParams();
    const [slide,setSlide] = useState(true)
    let Page = '';
    return(
            
            <div className='body-admin shadow-lg p-3 mb-5 bg-white rounded '>
                
                        <NavLink  to="/admin/slide"><p><span className="ml-2"><i class="fa fa-users"></i> Danh Sách Slide</span></p></NavLink >
                        <NavLink to="/admin/danhmuc"><p><span className="ml-2" ><i class="fa fa-hotel"></i> Danh Sách Danh Mục</span></p></NavLink>
                         <NavLink  to="/admin/duan"><p><span className="ml-2"><i class="fa fa-user"></i> Danh Sách Dự Án</span></p></NavLink >
                        <NavLink to="/admin/theloai"><p><span className="ml-2" ><i class="fa fa-slideshare"></i> Danh Sách Thể Loại</span></p></NavLink>
                        <NavLink  to="/admin/tintuc"><p><span className="ml-2"><i class="fa fa-map-marker"></i> Danh Sách Tin Tức</span></p></NavLink >
                        <NavLink  to="/admin/dichvu"><p><span className="ml-2"><i class="fa fa-stack-exchange"></i> Danh Sách Dịch Vụ</span></p></NavLink >
                        <NavLink to="/admin/lienhe"><p><span className="ml-2"><i class="fa fa-briefcase"></i> Tin Nhắn</span></p></NavLink>
                        <NavLink  to="/administractor" ><p ><span className="ml-2"><i class="fa fa-sign-out"></i>Đăng Xuất</span></p></NavLink >
                      
        </div>       
    )
    
    
}

export default Admin