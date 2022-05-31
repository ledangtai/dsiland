import { react } from "react";
import Admin from "./Admin";
import '../css/nhanvien.css'
import Dichvuform from "./DichvuList";

function DichVu(){
    return( 
    <div className="nhanvien">
            <Admin />
            <Dichvuform />
    </div>
    )}
export default DichVu;