
import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import './login.css'
import  logo from '../img/dsiland.jpg'
import axios from 'axios';
function Login(){
    let history =useHistory();
    const myStorage = window.localStorage;
    const [login,setLogin] = useState({})
    useEffect(()=>{
        let tk = myStorage.getItem('username');
        if(tk != null){
            myStorage.removeItem('username')
        }
       
    })
    const alterInput = (e)=>{
        const {value,name} = e.target;
        setLogin({
            ...login,
            [name]:value
        })
        
    }
    const handleSubmit = ()=>{
        
     if(login.username === "Dsiland.com.vn"){
         console.log("abc")
         if(login.password === "longhan123"){
            myStorage.setItem('username',login.username)
             history.push('admin/slide')
         }
         else{
             alert("Mật khẩu sai!!! Vui lòng kiểm tra lại")
            
         }
     }
     else{
         alert("Tên đăng nhập sai!!! Vui lòng kiểm tra lại")
     }

    }
    return(
        <div className='container-fluid'>
            <img src= {logo} />
                <div className='row'>
                 
                    <div className='col-12'>     
                       
                        <div className="login_container">
                                <div className="login-ct">

                                <div className="col-md-6 m-auto">
                                <div className="login-sp">
                                <form>
                                <h5 className="dangnhap-form">LOGIN</h5>
                                    <div className="form-group" style={{display:'flex', borderBottom:'1px solid black',marginBottom: '14px', paddingLeft:'10px'}}>
                                    {/* <label htmlFor="email" style={{color:'tomato',fontSize:'16px', fontWeight:'bolder'}}>Tên Đăng Nhập</label> */}
                                    <i class="fa fa-user" style={{marginTop:'10px',marginRight: '10px'}}></i>
                                    <input type="username" name="username" id="username" className="input_dangnhap" onChange={alterInput} placeholder="username" />
                                    </div>
                                    <div className="form-group" style={{display:'flex',borderBottom:'1px solid black',paddingLeft:'10px'}}>
                                    <i class="fa fa-lock" style={{marginTop:'10px',marginRight: '10px'}}></i>
                                    {/* <label htmlFor="password" style={{color:'tomato',fontSize:'16px', fontWeight:'bolder'}}>Mật Khẩu</label> */}
                                    <input type="password" name="password" id="password" className="input_dangnhap" onChange={alterInput}  placeholder="password" />
                                    </div>
                                    <div className ="dangnhap-button">
                                    <button onClick={handleSubmit} type="submit" className="btn btn-danger float-right btn-dangnhap">
                                    SIGN UP
                                    </button>
                                    </div>
                               
                                </form>
                               
                                </div>
                                </div>
                            </div>

                                </div>
                            
                        </div>
                </div>
            </div>
    )
}
export default Login