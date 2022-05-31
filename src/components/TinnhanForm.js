import react, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/nhanvienform.css'
import { useHistory } from 'react-router';
function TinnhanForm(){
    const[tinnhan,settinnhan] = useState([]);
    const myStorage = window.localStorage;
    let history = useHistory();
    useEffect(() =>{
        console.log(myStorage.getItem('username'))
        let tk = myStorage.getItem('username');
        if(tk != null){
            axios.get(process.env.REACT_APP_API_KEY + "getlienhe.php")
            .then(response => settinnhan(response.data.reverse()))
            .catch(console.error())
        }
        else {
           history.push("/administractor")
        }
         
    },[])
    return(
        <div className ="nhanvienform shadow-lg p-3 mb-5 bg-white rounded ">
        <table className="table table-bordered text-algin-center ">
            <thead>
                <tr>
                    <th scope="col">Họ Tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nội Dung</th>
                </tr>
            </thead>
            <tbody>
                {tinnhan.map(cn =>{
                    return(
                    <tr >
                        <th scope="row">{cn.hoten}</th>
                        <td>{cn.email}</td>
                        <td>{cn.noidung}</td>
                    </tr>
                )})}
            </tbody>
        </table>
        </div>
    )
}
export default TinnhanForm;