import { react } from "react";
import Admin from "./Admin";
import '../css/nhanvien.css'
import TheloaiList from "./TheloaiList";

function Theloai(){
    return( 
    <div className="nhanvien">
            <Admin />
            <TheloaiList />
    </div>
    )}
export default Theloai;