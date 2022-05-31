import axios from "axios"
import React from "react"
import "../Lienhe/Lienhe.css"
import { useForm } from "react-hook-form";
function Lienhe(){
    const { register, handleSubmit, setValue } = useForm();
    const myStorage = window.localStorage;
    let language = myStorage.getItem('language')
    const onSubmit = async data => {
        const myData = {
            ...data,
        }
        const myAlterData = {
            hoten:myData.hoten,
            email:myData.email,
            sdt:myData.sdt,
            tieude:myData.tieude,
            noidung:myData.noidung,
            congty:myData.congty,
            diachi:myData.diachi
        }
             axios.post(process.env.REACT_APP_API_KEY +'insertTinnhan',myAlterData)
             .then(alert('Gửi Thông Tin Thành Công!!!'))
    }
    const getInsertSP = ()=>{
        setValue("hoten",'')
        setValue("email",'')
        setValue("sdt",'')
        setValue("congty",'')
        setValue("tieude",'')
        setValue("noidung",'')
        setValue("diachi",'')
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
      const isMobile1 = viewPort.width <= 1200;
      const isMobile2 = viewPort.width <= 980;
      const isMobile3 = viewPort.width <= 700;
      if(isMobile3){
        return(
            <div className="lienhe">
                {language==0?<div className="container">
                <div className="dangki">
                    <h1>ĐĂNG KÍ LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h1>
                </div>
                <div className="lienhe-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="modal-body">
                                 <div className="row">
                                     <div className="col-12">
                                       
                                         <input className="form-control" placeholder="Tên Của Bạn..." {...register('hoten',{ required: true})}   name='hoten' />
                                      
                                         <input className="form-control" placeholder="Địa Chỉ Email Của Bạn..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                        
                                         <input className="form-control" placeholder="Số Điện Thoại Của Bạn..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                         
                                         <input className="form-control" placeholder="Công Ty Của Bạn (Nếu Có)..."   name='congty' />
                                       
                                         <input className="form-control" placeholder="Địa Chỉ Của Bạn..." {...register('diachi',{ required: true})}   name='diachi' />
                                         <input className="form-control" placeholder="Tiêu Đề..." {...register('tieude',{ required: true})}   name='tieude' />
                                      
                                         <textarea className="form-control" placeholder="Nội Dung..." {...register('noidung',{ required: true})}   name='noidung' />
                                  
                                       <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                         <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >LIÊN HỆ</button>
                                         </div>
                                       
                                     </div>
                                     <div className="col-6">
                                         
                                     </div>
                                 </div>
                                 
                                 {/* <CKEditor 
                                     ref={register} name='motachitiet'
                                 /> */}
                                 
                                 
                             </div>
                         </form>
                <div className="hotline">
                    <h2>HOTLINE</h2>
                    <p>
                    Chúng tôi đã giúp hàng nghìn khách hàng tìm được căn hộ ưng ý. Với quỹ hàng đa dạng nhất thị trường, chúng tôi tự tin sẽ giúp bạn thực hiện giấc mơ sơ hữu BĐS và tối ưu hiệu quả đầu tư.
                    </p>
                    <h3>HÃY GỌI NGAY CHO CHÚNG TÔI VỚI SỐ ĐIỆN THOẠI DƯỚI ĐÂY:</h3>
                   <p className="sdt">
                        <i className="fa fa-phone" /><br/>
                        <p style ={{fontSize:'12px', color:'#b48d4c'}}>+84-274-6275789</p>
                    </p>
                </div>
                </div>
                </div>:''}
                {language==1?<div className="container">
                <div className="dangki">
                    <h1>SIGN UP CONTACT FOR FREE CONSULTATION</h1>
                </div>
                <div className="lienhe-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="modal-body">
                                 <div className="row">
                                     <div className="col-12">
                                       
                                         <input className="form-control" placeholder="Your Name..." {...register('hoten',{ required: true})}   name='hoten' />
                                      
                                         <input className="form-control" placeholder="Your Email Address..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                        
                                         <input className="form-control" placeholder="Your Phone Number..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                         
                                         <input className="form-control" placeholder="Your Company (if any)..."   name='congty' />
                                       
                                         <input className="form-control" placeholder="Your Address..." {...register('diachi',{ required: true})}   name='diachi' />
                                         <input className="form-control" placeholder="Title..." {...register('tieude',{ required: true})}   name='tieude' />
                                      
                                         <textarea className="form-control" placeholder="Content..." {...register('noidung',{ required: true})}   name='noidung' />
                                  
                                       <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                         <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >Contact</button>
                                         </div>
                                       
                                     </div>
                                     <div className="col-6">
                                         
                                     </div>
                                 </div>
                                 
                                 {/* <CKEditor 
                                     ref={register} name='motachitiet'
                                 /> */}
                                 
                                 
                             </div>
                         </form>
                <div className="hotline">
                    <h2>HOTLINE</h2>
                    <p>
                    We have helped thousands of customers find the right apartment. With the most diversified product fund in the market, we are confident to help you realize your dream of owning Real Estate and optimize investment efficiency.
                    </p>
                    <h3>CALL US IMMEDIATELY WITH THE PHONE NUMBER BELOW:</h3>
                   <p className="sdt">
                        <i className="fa fa-phone" /><br/>
                        <p style ={{fontSize:'12px', color:'#b48d4c'}}>+84-274-6275789</p>
                    </p>
                </div>
                </div>
                </div>:''}
            </div>
        )
      }
      if(isMobile2){
        return(
            <div className="lienhe">
                {language==0?<div className="container">
                <div className="dangki">
                    <h1>ĐĂNG KÍ LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h1>
                </div>
                <div className="lienhe-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="modal-body">
                                 <div className="row">
                                     <div className="col-12">
                                       
                                         <input className="form-control" placeholder="Tên Của Bạn..." {...register('hoten',{ required: true})}   name='hoten' />
                                      
                                         <input className="form-control" placeholder="Địa Chỉ Email Của Bạn..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                        
                                         <input className="form-control" placeholder="Số Điện Thoại Của Bạn..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                         
                                         <input className="form-control" placeholder="Công Ty Của Bạn (Nếu Có)..."   name='congty' />
                                       
                                         <input className="form-control" placeholder="Địa Chỉ Của Bạn..." {...register('diachi',{ required: true})}   name='diachi' />
                                         <input className="form-control" placeholder="Tiêu Đề..." {...register('tieude',{ required: true})}   name='tieude' />
                                      
                                         <textarea className="form-control" placeholder="Nội Dung..." {...register('noidung',{ required: true})}   name='noidung' />
                                  
                                       <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                         <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >LIÊN HỆ</button>
                                         </div>
                                       
                                     </div>
                                     <div className="col-6">
                                         
                                     </div>
                                 </div>
                                 
                                 {/* <CKEditor 
                                     ref={register} name='motachitiet'
                                 /> */}
                                 
                                 
                             </div>
                         </form>
                <div className="hotline">
                    <h2>HOTLINE</h2>
                    <p>
                    Chúng tôi đã giúp hàng nghìn khách hàng tìm được căn hộ ưng ý. Với quỹ hàng đa dạng nhất thị trường, chúng tôi tự tin sẽ giúp bạn thực hiện giấc mơ sơ hữu BĐS và tối ưu hiệu quả đầu tư.
                    </p>
                    <h3>HÃY GỌI NGAY CHO CHÚNG TÔI VỚI SỐ ĐIỆN THOẠI DƯỚI ĐÂY:</h3>
                   <p className="sdt">
                        <i className="fa fa-phone" /><br/>
                        <p style ={{fontSize:'16px', color:'#b48d4c'}}>+84-274-6275789</p>
                    </p>
                </div>
                </div>
                </div>:''}
                {language==1?<div className="container">
                <div className="dangki">
                    <h1>SIGN UP CONTACT FOR FREE CONSULTATION</h1>
                </div>
                <div className="lienhe-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="modal-body">
                                 <div className="row">
                                     <div className="col-12">
                                       
                                         <input className="form-control" placeholder="Your Name..." {...register('hoten',{ required: true})}   name='hoten' />
                                      
                                         <input className="form-control" placeholder="Your Email Address..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                        
                                         <input className="form-control" placeholder="Your Phone Number..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                         
                                         <input className="form-control" placeholder="Your Company (if any)..."   name='congty' />
                                       
                                         <input className="form-control" placeholder="Your Address..." {...register('diachi',{ required: true})}   name='diachi' />
                                         <input className="form-control" placeholder="Title..." {...register('tieude',{ required: true})}   name='tieude' />
                                      
                                         <textarea className="form-control" placeholder="Content..." {...register('noidung',{ required: true})}   name='noidung' />
                                  
                                       <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                         <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >Contact</button>
                                         </div>
                                       
                                     </div>
                                     <div className="col-6">
                                         
                                     </div>
                                 </div>
                                 
                                 {/* <CKEditor 
                                     ref={register} name='motachitiet'
                                 /> */}
                                 
                                 
                             </div>
                         </form>
                <div className="hotline">
                    <h2>HOTLINE</h2>
                    <p>
                    We have helped thousands of customers find the right apartment. With the most diversified product fund in the market, we are confident to help you realize your dream of owning Real Estate and optimize investment efficiency.
                    </p>
                    <h3>CALL US IMMEDIATELY WITH THE PHONE NUMBER BELOW:</h3>
                   <p className="sdt">
                        <i className="fa fa-phone" /><br/>
                        <p style ={{fontSize:'16px', color:'#b48d4c'}}>+84-274-6275789</p>
                    </p>
                </div>
                </div>
                </div>:''}
            </div>
        )
      }
      if(isMobile1){
        return(
            <div className="lienhe">
                {language==0?<div className="container">
                <div className="dangki">
                    <h1>ĐĂNG KÍ LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h1>
                </div>
                <div className="lienhe-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="modal-body">
                                 <div className="row">
                                     <div className="col-12">
                                       
                                         <input className="form-control" placeholder="Tên Của Bạn..." {...register('hoten',{ required: true})}   name='hoten' />
                                      
                                         <input className="form-control" placeholder="Địa Chỉ Email Của Bạn..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                        
                                         <input className="form-control" placeholder="Số Điện Thoại Của Bạn..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                         
                                         <input className="form-control" placeholder="Công Ty Của Bạn (Nếu Có)..."   name='congty' />
                                       
                                         <input className="form-control" placeholder="Địa Chỉ Của Bạn..." {...register('diachi',{ required: true})}   name='diachi' />
                                         <input className="form-control" placeholder="Tiêu Đề..." {...register('tieude',{ required: true})}   name='tieude' />
                                      
                                         <textarea className="form-control" placeholder="Nội Dung..." {...register('noidung',{ required: true})}   name='noidung' />
                                  
                                       <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                         <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >LIÊN HỆ</button>
                                         </div>
                                       
                                     </div>
                                     <div className="col-6">
                                         
                                     </div>
                                 </div>
                                 
                                 {/* <CKEditor 
                                     ref={register} name='motachitiet'
                                 /> */}
                                 
                                 
                             </div>
                         </form>
                <div className="hotline">
                    <h2>HOTLINE</h2>
                    <p>
                    Chúng tôi đã giúp hàng nghìn khách hàng tìm được căn hộ ưng ý. Với quỹ hàng đa dạng nhất thị trường, chúng tôi tự tin sẽ giúp bạn thực hiện giấc mơ sơ hữu BĐS và tối ưu hiệu quả đầu tư.
                    </p>
                    <h3>HÃY GỌI NGAY CHO CHÚNG TÔI VỚI SỐ ĐIỆN THOẠI DƯỚI ĐÂY:</h3>
                   <p className="sdt">
                        <i className="fa fa-phone" /><br/>
                        <p style ={{fontSize:'20px', color:'#b48d4c'}}>+84-274-6275789</p>
                    </p>
                </div>
                </div>
                </div>:''}
                {language==1?<div className="container">
                <div className="dangki">
                    <h1>SIGN UP CONTACT FOR FREE CONSULTATION</h1>
                </div>
                <div className="lienhe-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                             <div className="modal-body">
                                 <div className="row">
                                     <div className="col-12">
                                       
                                         <input className="form-control" placeholder="Your Name..." {...register('hoten',{ required: true})}   name='hoten' />
                                      
                                         <input className="form-control" placeholder="Your Email Address..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                        
                                         <input className="form-control" placeholder="Your Phone Number..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                         
                                         <input className="form-control" placeholder="Your Company (if any)..."   name='congty' />
                                       
                                         <input className="form-control" placeholder="Your Address..." {...register('diachi',{ required: true})}   name='diachi' />
                                         <input className="form-control" placeholder="Title..." {...register('tieude',{ required: true})}   name='tieude' />
                                      
                                         <textarea className="form-control" placeholder="Content..." {...register('noidung',{ required: true})}   name='noidung' />
                                  
                                       <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                         <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >Contact</button>
                                         </div>
                                       
                                     </div>
                                     <div className="col-6">
                                         
                                     </div>
                                 </div>
                                 
                                 {/* <CKEditor 
                                     ref={register} name='motachitiet'
                                 /> */}
                                 
                                 
                             </div>
                         </form>
                <div className="hotline">
                    <h2>HOTLINE</h2>
                    <p>
                    We have helped thousands of customers find the right apartment. With the most diversified product fund in the market, we are confident to help you realize your dream of owning Real Estate and optimize investment efficiency.
                    </p>
                    <h3>CALL US IMMEDIATELY WITH THE PHONE NUMBER BELOW:</h3>
                   <p className="sdt">
                        <i className="fa fa-phone" /><br/>
                        <p style ={{fontSize:'20px', color:'#b48d4c'}}>+84-274-6275789</p>
                    </p>
                </div>
                </div>
                </div>:''}
            </div>
        )
      }
   return(
       <div className="lienhe">
           {language==0?<div className="container">
           <div className="dangki">
               <h1>ĐĂNG KÍ LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h1>
           </div>
           <div className="lienhe-form">
           <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                  
                                    <input className="form-control" placeholder="Tên Của Bạn..." {...register('hoten',{ required: true})}   name='hoten' />
                                 
                                    <input className="form-control" placeholder="Địa Chỉ Email Của Bạn..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                   
                                    <input className="form-control" placeholder="Số Điện Thoại Của Bạn..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                    
                                    <input className="form-control" placeholder="Công Ty Của Bạn (Nếu Có)..."   name='congty' />
                                  
                                    <input className="form-control" placeholder="Địa Chỉ Của Bạn..." {...register('diachi',{ required: true})}   name='diachi' />
                                    <input className="form-control" placeholder="Tiêu Đề..." {...register('tieude',{ required: true})}   name='tieude' />
                                 
                                    <textarea className="form-control" placeholder="Nội Dung..." {...register('noidung',{ required: true})}   name='noidung' />
                             
                                  <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                    <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >LIÊN HỆ</button>
                                    </div>
                                  
                                </div>
                                <div className="col-6">
                                    
                                </div>
                            </div>
                            
                            {/* <CKEditor 
                                ref={register} name='motachitiet'
                            /> */}
                            
                            
                        </div>
                    </form>
           <div className="hotline">
               <h2>HOTLINE</h2>
               <p>
               Chúng tôi đã giúp hàng nghìn khách hàng tìm được căn hộ ưng ý. Với quỹ hàng đa dạng nhất thị trường, chúng tôi tự tin sẽ giúp bạn thực hiện giấc mơ sơ hữu BĐS và tối ưu hiệu quả đầu tư.
               </p>
               <h3>HÃY GỌI NGAY CHO CHÚNG TÔI VỚI SỐ ĐIỆN THOẠI DƯỚI ĐÂY:</h3>
              <p className="sdt">
                   <i className="fa fa-phone" /><br/>
                   +84-274-6275789
               </p>
           </div>
           </div>
           </div>:''}
           {language==1?<div className="container">
           <div className="dangki">
               <h1>SIGN UP CONTACT FOR FREE CONSULTATION</h1>
           </div>
           <div className="lienhe-form">
           <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                  
                                    <input className="form-control" placeholder="Your Name..." {...register('hoten',{ required: true})}   name='hoten' />
                                 
                                    <input className="form-control" placeholder="Your Email Address..." {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/})}   name='email' />
                                   
                                    <input className="form-control" placeholder="Your Phone Number..." {...register('sdt',{ required: true,pattern:/((0)+([0-9]{9})\b)/g})}   name='sdt' />
                                    
                                    <input className="form-control" placeholder="Your Company (if any)..."   name='congty' />
                                  
                                    <input className="form-control" placeholder="Your Address..." {...register('diachi',{ required: true})}   name='diachi' />
                                    <input className="form-control" placeholder="Title..." {...register('tieude',{ required: true})}   name='tieude' />
                                 
                                    <textarea className="form-control" placeholder="Content..." {...register('noidung',{ required: true})}   name='noidung' />
                             
                                  <div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
                                    <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >Contact</button>
                                    </div>
                                  
                                </div>
                                <div className="col-6">
                                    
                                </div>
                            </div>
                            
                            {/* <CKEditor 
                                ref={register} name='motachitiet'
                            /> */}
                            
                            
                        </div>
                    </form>
           <div className="hotline">
               <h2>HOTLINE</h2>
               <p>
               We have helped thousands of customers find the right apartment. With the most diversified product fund in the market, we are confident to help you realize your dream of owning Real Estate and optimize investment efficiency.
               </p>
               <h3>CALL US IMMEDIATELY WITH THE PHONE NUMBER BELOW:</h3>
              <p className="sdt">
                   <i className="fa fa-phone" /><br/>
                   +84-274-6275789
               </p>
           </div>
           </div>
           </div>:''}
       </div>
   )
}
export default Lienhe