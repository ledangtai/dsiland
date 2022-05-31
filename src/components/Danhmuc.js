import { react } from "react";
import Admin from "./Admin";
import '../css/nhanvien.css'
import DanhmucList from "./DanhmucList";

function Danhmuc(){
    return( 
    <div className="nhanvien">
            <Admin />
            <DanhmucList />
    </div>
    )}
export default Danhmuc;