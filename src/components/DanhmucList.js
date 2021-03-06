import react, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/nhanvienform.css'
import { useForm } from "react-hook-form";
import {store} from '../firebase'
import { useHistory } from 'react-router';
function DanhmucList(){
    const[danhmuc,setdanhmuc] = useState([]);
    const [on,setOn] = useState(false)
    const [fileUrl,setFileUrl] = useState('');
    const [onUpdate,setOnUpdate] = useState(false)
    const { register, handleSubmit, setValue } = useForm();
    
    const myStorage = window.localStorage;
    let history = useHistory();
    useEffect(() =>{
        console.log(myStorage.getItem('username'))
        let tk = myStorage.getItem('username');
        if(tk != null){
            axios.get(process.env.REACT_APP_API_KEY + "getdanhmuc.php")
            .then(response => setdanhmuc(response.data.reverse()))
            .catch(console.error())
        }
        else {
           history.push("/administractor")
        }
         
    },[])
  

    const onSubmit = async data => {
        const myData = {
            ...data
        }
        const myAlterData = {
            madm:myData.madm,
            tendm:myData.tendm
        }
        if(onUpdate){
            let ma = new FormData();
             ma.append("madm", myAlterData.madm)
             ma.append("tendm", myAlterData.tendm)
      
             axios.post(process.env.REACT_APP_API_KEY +'updatedanhmuc.php',ma)
            .then(response =>{
                
                setOn(!on)
                setOnUpdate(!onUpdate)
                axios.get(process.env.REACT_APP_API_KEY+'getdanhmuc.php')
                .then(response => setdanhmuc(response.data.reverse()) )
                .catch(erro => console.log(erro))
            }).catch(error => console.log(error))
        }
        else{
            let ma = new FormData();
            ma.append("tendm", myAlterData.tendm)
             axios.post(process.env.REACT_APP_API_KEY +'postdanhmuc.php',ma)
            .then(response =>{
                setOn(!on)
                axios.get(process.env.REACT_APP_API_KEY+'getdanhmuc.php')
                .then(response => setdanhmuc(response.data.reverse()) )
                .catch(erro => console.log(erro))
            }).catch(error => console.log(error))
        }
    }
  
    const getInsertDanhmuc = ()=>{
        setOn(true);
        
    }
    const getUpdateDanhmuc = (sl)=>{
        setOn(true); 
        setOnUpdate(true)
        setValue("madm",sl.madm)
        setValue("tendm",sl.tendm)
       
    }
    const getDeleteDanhmuc = (madm)=>{
        let agree = window.confirm(`B???n c?? mu???n x??a madm = ${madm}?`);
        if (!agree)
        return
        let ma = new FormData();
        ma.append("madm", madm)
        axios.post(process.env.REACT_APP_API_KEY+'deletedanhmuc.php',ma)
        .then(response => {
            console.log(response)
            alert('X??a Th??nh C??ng !!!')
            axios.get(process.env.REACT_APP_API_KEY+'getdanhmuc.php')
            .then(response => setdanhmuc(response.data.reverse()) )
            .catch(erro =>alert('X??a th???t b???i !!!'))
        } )
        .catch(erro => alert('X??a th???t b???i'))
    }
    return(
        <div className ="nhanvienform shadow-lg p-3 mb-5 bg-white rounded ">
           <p className={!on?"workplace_display":"d-none"} onClick={()=>getInsertDanhmuc()}><button type="button" className="btn btn-outline-danger"><i className="fa fa-user-plus"></i> Th??m</button></p>
           <div className={!on?"workplace_display":"d-none"}>
        <table className="table table-bordered text-algin-center ">
            <thead>
                <tr>
                    <th scope="col">M?? Danh M???c</th>
                    <th scope ="col"> T??n Danh M???c</th>
                    <th>T??c V???</th>
                </tr>
            </thead>
            <tbody>
                {danhmuc.map(sl =>{
                    return(
                    <tr key = {sl.madm}>
                        <th scope="row">{sl.madm}</th>
                        <td> {sl.tendm}</td>
                        <td style={{textAlign:'center'}}><span onClick={()=>getDeleteDanhmuc(sl.madm)}><i className="fa fa-trash" style={{marginRight:'10%'}}></i></span><span onClick={()=>getUpdateDanhmuc(sl)}><i className="fa fa-edit" style={{marginRight:'10%'}}></i></span></td>
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
                                <h1 style={{color:'red'}}>DANH M???C</h1>
                                    {/* <label>M?? Slider</label>
                                    <input className="form-control" placeholder="Nh???p M?? Slider" {...register('maslider',{ required: true})} name='maslider' type="number" readOnly={onUpdate?true:false}  /> */}
                                   
                                    <label>T??n Danh M???c</label>
                                    <input className="form-control" placeholder="Nh???p T??n Danh M???c" {...register('tendm',{ required: true})}   name='tendm' />

           
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
export default DanhmucList;