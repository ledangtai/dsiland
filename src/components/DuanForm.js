import react, { useEffect, useState } from 'react'
import axios from 'axios'
import {store} from '../firebase'
import '../css/nhanvienform.css'
import { useForm } from "react-hook-form";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useHistory } from 'react-router';
function Duanform(){
    const[duan,setduan] = useState([]);
    const [on,setOn] = useState(false)
    const [fileUrl,setFileUrl] = useState('');
    const [onUpdate,setOnUpdate] = useState(false)
    const { register, handleSubmit, setValue } = useForm();
    const[sapxep,setsapxep] = useState([])
    const [editornoidung, seteditornoidung] = useState("");
    const myStorage = window.localStorage;
    let history = useHistory();
    useEffect(() =>{
        console.log(myStorage.getItem('username'))
        let tk = myStorage.getItem('username');
        if(tk != null){
            axios.get(process.env.REACT_APP_API_KEY + "getduan.php")
            .then(response => {setduan(response.data.reverse());
               
            })
            .catch(console.error())
        }
        else {
           history.push("/administractor")
        }
         
    },[])
 
    const onSubmit = async data => {
        const myData = {
            ...data,
            hinhanh:fileUrl,
            noidung:noidungeditor
        }
        const myAlterData = {
            maduan:myData.maduan,
            tieude:myData.tieude,
            noidung:myData.noidung,
            hinhanh:myData.hinhanh
        }
        if(onUpdate){
            console.log("update")
            let ma = new FormData();
             ma.append("maduan", myAlterData.maduan)
             ma.append("tieude", myAlterData.tieude)
             ma.append("hinhanh", myAlterData.hinhanh)
             ma.append("noidung", myAlterData.noidung)
             axios.post(process.env.REACT_APP_API_KEY +'updateduan.php',ma)
            .then(response =>{
                console.log(ma)
                setOn(!on)
                setOnUpdate(!onUpdate)
                axios.get(process.env.REACT_APP_API_KEY+'getduan.php')
                .then(response => setduan(response.data.reverse()) )
                .catch(erro => console.log(erro))
            }).catch(error => alert("Ki???m tra l???i n???i dung b??i vi???t!!! B??i vi???t kh??ng ???????c ch???a k?? t??? '"))
        }
        else{
            let ma = new FormData();
            ma.append("tieude", myAlterData.tieude)
            ma.append("hinhanh", myAlterData.hinhanh)
            ma.append("noidung", myAlterData.noidung)
             axios.post(process.env.REACT_APP_API_KEY +'postduan.php',ma)
            .then(response =>{
            
                setOn(!on)
                axios.get(process.env.REACT_APP_API_KEY+'getduan.php')
                .then(response => {setduan(response.data.reverse()) })
                .catch(erro => console.log(erro))
            }).catch(error => alert("Ki???m tra l???i n???i dung b??i vi???t!!! B??i vi???t kh??ng ???????c ch???a k?? t??? '"))
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
        // setValue("mattsk",'')
        setValue("tieude",'')
        seteditornoidung('');
        setValue("hinhanh",null)
    }
    const getUpdateDv = (sp)=>{
        setOn(true); 
        setOnUpdate(true)
        setValue("maduan",sp.maduan)
        setValue("tieude",sp.tieude)
        seteditornoidung(sp.noidung)
        setFileUrl(sp.hinhanh)
    }
    const getDeleteDv = (maduan)=>{
        let agree = window.confirm(`B???n c?? mu???n x??a matt = ${maduan}?`);
        if (!agree)
        return
        let ma = new FormData();
        ma.append("maduan",maduan)
        axios.post(process.env.REACT_APP_API_KEY+'deleteduan.php',ma)
        .then(response => {
            alert('X??a Th??nh C??ng !!!')
            axios.get(process.env.REACT_APP_API_KEY+'getduan.php')
            .then(response => setduan(response.data.reverse()) )
            .catch(erro =>alert('X??a th???t b???i !!!'))
        } )
        .catch(erro => alert('X??a th???t b???i'))
    }
    const [noidungeditor,setnoidungeditor] = useState('')
    const handleonChange = async (e,editor) =>{
         setnoidungeditor(editor.data)
    }
    
    return(
        <div className ="nhanvienform shadow-lg p-3 mb-5 bg-white rounded ">

        <p className={!on?"workplace_display":"d-none"} onClick={()=>getInsertSP()}><button type="button" className="btn btn-outline-danger"><i className="fa fa-user-plus"></i> Th??m</button></p>
        <div className={!on?"workplace_display":"d-none"}>
        <table className=" table table-bordered text-algin-center ">
            <thead>
                <tr>
                    <th scope="col">M?? D??? ??n</th>
                    <th scope="col">Ti??u ?????</th>
                    <th scope ="col"> H??nh ???nh</th>
                    <th scope="col">N???i Dung</th>
                    <th>T??c V???</th>
                </tr>
            </thead>
            <tbody>
                {duan.map(sp =>{
                    return(
                    <tr key = {sp.maduan}>
                        <th scope="row">{sp.maduan}</th>
                        <td>{sp.tieude}</td>
                        <td><img style={{width:'100px', height:"150px"}} src = {sp.hinhanh} /></td>
                        <td>{ReactHtmlParser(sp.noidung)}</td>
                        <td style={{textAlign:'center'}}><span  onClick={()=> getDeleteDv(sp.maduan)}><i className="fa fa-trash" style={{marginRight:'10%'}}></i></span><span  onClick={()=> getUpdateDv(sp)}><i className="fa fa-edit" style={{marginRight:'10%'}}></i></span></td>
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
                                    <h1 style={{color:'red'}}>D??? ??n</h1>
                                    {/* <label>M?? Tin T???c V?? S??? Ki???n</label>
                                    <input className="form-control" placeholder="Nh???p M?? TT&SK" {...register('mattsk',{ required: true})} name='mattsk' readOnly={onUpdate?true:false}  /> */}
                                    <label>Ti??u ?????</label>
                                    <input className="form-control" placeholder="Nh???p Ti??u ?????" {...register('tieude',{ required: true})}   name='tieude' />
                                    <label>H??nh ???nh</label>
                                    <div className="form-group">
                                          <input className="form-control-file border" placeholder=""  name='hinhanh' type="file" onChange={handleImage}/>
                                    </div>
                                    <label>N???i Dung</label><br/>
                                   
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
                                   
           
                                    <button className="btn btn-warning mt-4 mr-4 btn-input"   type="submit" >C???p Nh???t</button>
                        
                                    <button className="btn btn-info mt-4 btn-input"  onClick={()=>setOn(!on)} type="button">Tho??t</button>
                                  
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
export default Duanform