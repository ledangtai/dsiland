import { react } from "react";
import Admin from "./Admin";
import '../css/nhanvien.css'
import Duanform from "./DuanForm";

function DuanAdmin(){
    return( 
    <div className="nhanvien">
            <Admin />
            <Duanform />
    </div>
    )}
export default DuanAdmin;