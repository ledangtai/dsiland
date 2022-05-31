import react, { useEffect, useState } from 'react'
import axios from 'axios'
import {store} from '../firebase'
import '../css/nhanvienform.css'
import { useForm } from "react-hook-form";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useHistory } from 'react-router';
function Dichvuform(){
    const[dichvu,setdichvu] = useState([]);
    const [on,setOn] = useState(false)
    const [fileUrl,setFileUrl] = useState('');
    const [onUpdate,setOnUpdate] = useState(false)
    const { register, handleSubmit, setValue } = useForm();
    const[sapxep,setsapxep] = useState([])
    const [editornoidung, seteditornoidung] = useState("");
    const [danhmuc, setdanhmuc] = useState([])
    const [theloai, settheloai] = useState([])
    const [co1, setco1] = useState(false);
    const [co2, setco2] = useState(false);
    const myStorage = window.localStorage;
    let history = useHistory();
    useEffect(() =>{
        console.log(myStorage.getItem('username'))
        let tk = myStorage.getItem('username');
        if(tk != null){
            axios.get(process.env.REACT_APP_API_KEY + "getdichvu.php")
            .then(response => {setdichvu(response.data.reverse());
               setco1(!co1);
            })
            .catch(console.error())
        }
        else {
           history.push("/administractor")
        }
         
    },[])
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_KEY + "getdanhmuc.php")
        .then(res => {setdanhmuc(res.data.reverse()); setco2(!co2);  console.log(danhmuc)})
    },[co1])
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_KEY + "gettheloai.php")
        .then(res =>{settheloai(res.data.reverse());console.log(theloai)})
    },[co2])
 
    const onSubmit = async data => {
        const myData = {
            ...data,
            hinhanh:fileUrl,
            noidung:noidungeditor, 
        }
        const myAlterData = {
            madv:myData.madv,
            matl:myData.matl,
            tieude:myData.tieude,
            noidung:myData.noidung,
            hinhanh:myData.hinhanh
        }
        if(onUpdate){
            console.log("update")
            let ma = new FormData();
             ma.append("madv", myAlterData.madv)
             ma.append("madm", madm1.selectValue)
             ma.append("matl", matl1.selectValue)
             ma.append("tieude", myAlterData.tieude)
             ma.append("hinhanh", myAlterData.hinhanh)
             ma.append("noidung", myAlterData.noidung)
             axios.post(process.env.REACT_APP_API_KEY +'updatedichvu.php',ma)
            .then(response =>{
                console.log(madm1)
                setOn(!on)
                setOnUpdate(!onUpdate)
                axios.get(process.env.REACT_APP_API_KEY+'getdichvu.php')
                .then(response => setdichvu(response.data.reverse()) )
                .catch(erro => console.log(erro))
            }).catch(error => alert("Kiểm tra lại nội dung bài viết!!! Bài viết không được chứa kí tự '"))
        }
        else{
            let ma = new FormData();
            ma.append("madm", madm1.selectValue)
            ma.append("matl", matl1.selectValue)
            ma.append("tieude", myAlterData.tieude)
            ma.append("hinhanh", myAlterData.hinhanh)
            ma.append("noidung", myAlterData.noidung)
             axios.post(process.env.REACT_APP_API_KEY +'postdichvu.php',ma)
            .then(response =>{
                console.log(madm1.selectValue)
                setOn(!on)
                axios.get(process.env.REACT_APP_API_KEY+'getdichvu.php')
                .then(response => {setdichvu(response.data.reverse()) })
                .catch(erro => console.log(erro))
            }).catch(error => alert("Kiểm tra lại nội dung bài viết!!! Bài viết không được chứa kí tự '"))
        }
    }
    const handleImage = async (e)=>{
  
        // code here
        var file = e.target.files[0];
       // console.log('dsds')
        const fileNameFirst = file?.name;
        const fileNameFinal = fileNameFirst?.replace(/ /g,'')
        console.log(fileNameFinal)
        var storageRef =  store.ref().child("tai/"+fileNameFinal)
        console.log(storageRef) 
        await storageRef.put(file);
        store.ref().child('tai').child(fileNameFinal).getDownloadURL().then(url=> setFileUrl(url));
}
    const getInsertSP = ()=>{
        setOn(true); 
        setValue("tieude",'')
        seteditornoidung('');
        setValue("hinhanh",null)
    }
    const getUpdateDv = (sp)=>{
        setOn(true); 
        setOnUpdate(true)
        setValue("madv",sp.madv)
        setValue("tieude",sp.tieude)
        setmatl1(sp.matl)
        setmadm1(sp.madm)
        seteditornoidung(sp.noidung)
        setFileUrl(sp.hinhanh)
    }
    const getDeleteDv = (madv)=>{
        let agree = window.confirm(`Bạn có muốn xóa madv = ${madv}?`);
        if (!agree)
        return
        let ma = new FormData();
        ma.append("madv",madv)
        axios.post(process.env.REACT_APP_API_KEY+'deletedichvu.php',ma)
        .then(response => {
            alert('Xóa Thành Công !!!')
            axios.get(process.env.REACT_APP_API_KEY+'getdichvu.php')
            .then(response => setdichvu(response.data.reverse()) )
            .catch(erro =>alert('Xóa thất bại !!!'))
        } )
        .catch(erro => alert('Xóa thất bại'))
    }
    const [noidungeditor,setnoidungeditor] = useState('')
    const [madm1,setmadm1] = useState('')
    const [matl1,setmatl1] = useState('')
    const handleonChange = async (e,editor) =>{
         setnoidungeditor(editor.data)
    }
    const handleDanhmuc = async (e) =>{
        setmadm1({selectValue: e.target.value})
    }
    const handleTheloai = async (e) =>{
        setmatl1({selectValue: e.target.value})
    }
    return(
        <div className ="nhanvienform shadow-lg p-3 mb-5 bg-white rounded ">

        <p className={!on?"workplace_display":"d-none"} onClick={()=>getInsertSP()}><button type="button" className="btn btn-outline-danger"><i className="fa fa-user-plus"></i> Thêm</button></p>
        <div className={!on?"workplace_display":"d-none"}>
        <table className=" table table-bordered text-algin-center ">
            <thead>
                <tr>
                    <th scope="col">Mã Dịch Vụ</th>
                    <th scope="col">Mã Danh Mục</th>
                    <th scope="col">Mã Thể Loại</th>
                    <th scope="col">Tiêu Đề</th>
                    <th scope ="col"> Hình Ảnh</th>
                    <th scope="col">Nội Dung</th>
                    <th>Tác Vụ</th>
                </tr>
            </thead>
            <tbody>
                {dichvu.map(sp =>{
                    return(
                    <tr key = {sp.madv}>
                        <th scope="row">{sp.madv}</th>
                        <td>{sp.madm}</td>
                        <td>{sp.matl}</td>
                        <td>{sp.tieude}</td>
                        <td><img style={{width:'100px', height:"150px"}} src = {sp.hinhanh} /></td>
                        <td>{ReactHtmlParser(sp.noidung)}</td>
                        <td style={{textAlign:'center'}}><span  onClick={()=> getDeleteDv(sp.madv)}><i className="fa fa-trash" style={{marginRight:'10%'}}></i></span><span  onClick={()=> getUpdateDv(sp)}><i className="fa fa-edit" style={{marginRight:'10%'}}></i></span></td>
                    </tr>
                )})}
            </tbody>
        </table>
        </div>
        <div className={on?"workplace_input":"d-none"}>
                <div className="card">
                <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <h1 style={{color:'red'}}>Dịch Vụ</h1>
                                    {/* <label>Mã Tin Tức Và Sự Kiện</label>
                                   
                                   <input className="form-control" placeholder="Nhập Mã TT&SK" {...register('mattsk',{ required: true})} name='mattsk' readOnly={onUpdate?true:false}  /> */}
                                    <label>Danh Mục</label>
                                   
                                  <select onChange={handleDanhmuc} style={{width:'200px',marginBottom:'10px',marginLeft: '17px', float: 'left'}}>
                                        {danhmuc.map(dm=>{
                                            return(
                                                <option value={dm.madm}>{dm.tendm}</option>
                                            )
                                        })}
                                    </select>
                                    <br/>
                                    <label style={{marginLeft:'-295px'}}>Thể Loại</label>
                    
                                    <select onChange={handleTheloai} style={{float: 'left',marginLeft: '-200px', marginTop: '10px', width:'200px'}}>
                                        {theloai.map(tl=>{
                                            return(
                                                <option value={tl.matl}>{tl.tentl}</option>
                                            )
                                        })}
                                    </select>
                                    <br/>
                                    <label style={{marginTop:'10px'}}>Tiêu Đề</label>
                                    <input className="form-control" placeholder="Nhập Tiêu Đề" {...register('tieude',{ required: true})}   name='tieude' />
                                    <label>Hình ảnh</label>
                                    <div className="form-group">
                                          <input className="form-control-file border" placeholder=""  name='hinhanh' type="file" onChange={handleImage}/>
                                    </div>
                                    <label>Nội Dung</label><br/>
                                   
                                    <div style={{width:'100%'}}>
                                    <CKEditor
                                        name="noidung"
                                        editor={ ClassicEditor }
                                        data= {editornoidung}
                                        onReady={ editor => {
                                            
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const datanoidung = editor.getData();
                                            setnoidungeditor(datanoidung);
                                            console.log( { event, editor, datanoidung } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                    </div>
                                   
           
                                    <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >Cập Nhật</button>
                        
                                    <button className="btn btn-info mt-4 btn-input"  onClick={()=>setOn(!on)} type="button">Thoát</button>
                                  
                                </div>
                                <div className="col-6">
                                    
                                </div>
                            </div>
                            
                            {/* <CKEditor 
                                ref={register} name='motachitiet'
                            /> */}
                            
                            
                        </div>
                    </form>

                </div>
                </div>
                </div>
        </div>
    )
}
export default Dichvuform