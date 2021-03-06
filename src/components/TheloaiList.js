import react, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/nhanvienform.css'
import { useForm } from "react-hook-form";
import {store} from '../firebase'
import { useHistory } from 'react-router';
function TheloaiList(){
    const[theloai,settheloai] = useState([]);
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
            axios.get(process.env.REACT_APP_API_KEY + "gettheloai.php")
            .then(response => settheloai(response.data.reverse()))
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
            matl:myData.matl,
            tentl:myData.tentl
        }
        if(onUpdate){
            let ma = new FormData();
             ma.append("matl", myAlterData.matl)
             ma.append("tentl", myAlterData.tentl)
      
             axios.post(process.env.REACT_APP_API_KEY +'updatetheloai.php',ma)
            .then(response =>{
                
                setOn(!on)
                setOnUpdate(!onUpdate)
                axios.get(process.env.REACT_APP_API_KEY+'gettheloai.php')
                .then(response => settheloai(response.data.reverse()) )
                .catch(erro => console.log(erro))
            }).catch(error => console.log(error))
        }
        else{
            let ma = new FormData();
            ma.append("tentl", myAlterData.tentl)
             axios.post(process.env.REACT_APP_API_KEY +'posttheloai.php',ma)
            .then(response =>{
                setOn(!on)
                axios.get(process.env.REACT_APP_API_KEY+'gettheloai.php')
                .then(response => settheloai(response.data.reverse()) )
                .catch(erro => console.log(erro))
            }).catch(error => console.log(error))
        }
    }
  
    const getInserttheloai = ()=>{
        setOn(true);
        
    }
    const getUpdatetheloai = (sl)=>{
        setOn(true); 
        setOnUpdate(true)
        setValue("matl",sl.matl)
        setValue("tentl",sl.tentl)
       
    }
    const getDeletetheloai = (matl)=>{
        let agree = window.confirm(`B???n c?? mu???n x??a matl = ${matl}?`);
        if (!agree)
        return
        let ma = new FormData();
        ma.append("matl", matl)
        axios.post(process.env.REACT_APP_API_KEY+'deletetheloai.php',ma)
        .then(response => {
            console.log(response)
            alert('X??a Th??nh C??ng !!!')
            axios.get(process.env.REACT_APP_API_KEY+'gettheloai.php')
            .then(response => settheloai(response.data.reverse()) )
            .catch(erro =>alert('X??a th???t b???i !!!'))
        } )
        .catch(erro => alert('X??a th???t b???i'))
    }
    return(
        <div className ="nhanvienform shadow-lg p-3 mb-5 bg-white rounded ">
           <p className={!on?"workplace_display":"d-none"} onClick={()=>getInserttheloai()}><button type="button" className="btn btn-outline-danger"><i className="fa fa-user-plus"></i> Th??m</button></p>
           <div className={!on?"workplace_display":"d-none"}>
        <table className="table table-bordered text-algin-center ">
            <thead>
                <tr>
                    <th scope="col">M?? Th??? Lo???i</th>
                    <th scope ="col"> T??n Th??? Lo???i</th>
                    <th>T??c V???</th>
                </tr>
            </thead>
            <tbody>
                {theloai.map(sl =>{
                    return(
                    <tr key = {sl.matl}>
                        <th scope="row">{sl.matl}</th>
                        <td> {sl.tentl}</td>
                        <td style={{textAlign:'center'}}><span onClick={()=>getDeletetheloai(sl.matl)}><i className="fa fa-trash" style={{marginRight:'10%'}}></i></span><span onClick={()=>getUpdatetheloai(sl)}><i className="fa fa-edit" style={{marginRight:'10%'}}></i></span></td>
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
                                   
                                    <label>T??n Th??? Lo???i</label>
                                    <input className="form-control" placeholder="Nh???p T??n Danh M???c" {...register('tentl',{ required: true})}   name='tentl' />

           
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
export default TheloaiList;