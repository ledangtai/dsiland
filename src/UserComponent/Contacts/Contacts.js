import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';
import './Contacts.css'
import { useForm } from 'react-hook-form';
function Contacts(){
    const[tinnhan,settinnhan] = useState([]);
    const myStorage = window.localStorage;
    const { register, handleSubmit, setValue } = useForm();
    let history = useHistory();
    const onSubmit = async data => {
        const myData = {
            ...data
        }
        const myAlterData = {
            hoten:myData.hoten,
            email:myData.email,
            noidung:myData.noidung
        }
       
            let ma = new FormData();
            ma.append("hoten", myAlterData.hoten)
            ma.append("email", myAlterData.email)
            ma.append("noidung", myAlterData.noidung)
             axios.post(process.env.REACT_APP_API_KEY +'postlienhe.php',ma)
            .then(response =>{
               alert("Chúng tôi sẽ phản hồi bạn sớm!!!") 
            }).catch(error => console.log(error))
    }
    return(
        <div>
                 <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="modal-body   contacts-content">
                             <div className="content-contact">
                                    <h1>Contact Us and Find Your Home!</h1>
                                    <div className="dongke"></div>
                                    <p>Our broker centers are located throughout the entire country ensuring you get our assistance in every state. Our professional real estate team made sure you get the highest level of help with your property quests.</p>
                                </div>
                            <div className="row contacts-form">
                               
                                <div className="col-12 "> 
                                    <input className="form-control contacts" placeholder="Name" {...register('hoten',{ required: true})}   name='hoten' />
                                    <input className="form-control contacts" placeholder="Email" {...register('email',{ required: true})}   name='email' />
                                    <input className="form-control contacts" placeholder="Message" {...register('noidung',{ required: true})}   name='noidung' />
           
                                    <button className="btn btn-warning mt-4 mr-4 btn-input"  style={{width:'100%', background:'#f7505c', color:'white'}}  type="submit" >Submit</button>
                        

                                  
                                </div>
                               
                            </div>
                            
                          
                            
                            
                        </div>
                    </form>
        </div>
    )
}
export default Contacts;