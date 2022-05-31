import react, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import Admin from './components/Admin';
import AdminHeader from './components/AdminHeader';
import Danhmuc from './components/Danhmuc';
import DichVu from './components/Dichvu';
import DuanAdmin from './components/Duan';
import Slider from './components/Slider';
import Theloai from './components/Theloai';
import Tinnhan from './components/Tinnhan';
import Tintuc from './components/Tintuc';
import Login from './login/login';
import Carousle from './UserComponent/Carousle/Carousle';
import CNHDItem from './UserComponent/Duan/Chucnanghoatdong';
import Duan from './UserComponent/Duan/Duan';
import DuanItem from './UserComponent/Duan/DuanItem';
import GioithieuItem from './UserComponent/Duan/GioithieuItem';
import DsDuan from './UserComponent/Duan/ListDuan';
import DsCNHD from './UserComponent/Duan/PageCNHD';
import DsSGD from './UserComponent/Duan/PageSGD';
import DsTTSK from './UserComponent/Duan/PageTinTuc';
import SGDItem from './UserComponent/Duan/Sangiaodich';
import TTSKItem from './UserComponent/Duan/Tintucsukien';
import ListForSale from './UserComponent/ForSale/ListForSale';
import Footer from './UserComponent/Footer/Footer';

import Header from './UserComponent/Header/Header';

import Banner from './UserComponent/Lienhe/banner';
import Lienhe from './UserComponent/Lienhe/Lienhe';
import ListCnhd from './UserComponent/TinTucpage/ListCnhd';
import ListSgd from './UserComponent/TinTucpage/ListSangiaodich';
import ListTintuc from './UserComponent/TinTucpage/ListTintuc';
import ListForRent from './UserComponent/ForRent/ListForRent';
import ListProject from './UserComponent/Project/ListProject';
import Contacts from './UserComponent/Contacts/Contacts';
import ForSaleItem from './UserComponent/ForSale/ForSaleItem';

function App() {

  return (
    <div className="App">
        
       <Router >
       <Route path = '/' exact>
       <Header></Header> 
            <Carousle></Carousle> 
            <ListForSale></ListForSale>
            <ListForRent></ListForRent>
            <ListProject></ListProject>
            <Contacts></Contacts>
            <Footer></Footer>
          </Route>
          <Route path = '/news' exact>
            {/* <HeaderlgEN></HeaderlgEN> */}
            <Carousle></Carousle>
            <ListTintuc></ListTintuc>
            <ListCnhd></ListCnhd>
            <ListSgd></ListSgd>
            <Footer></Footer>
          </Route>
        
          <Route path = '/project' exact>
          <Header></Header> 
            <Carousle></Carousle>
            <DsDuan></DsDuan>
            <Footer></Footer>
          </Route>
          <Route path="/page/:num" exact>
          <Header></Header>
            <Carousle></Carousle>
            <DsDuan></DsDuan>
            <Footer></Footer>
        </Route>
        <Route path="/pageEN/:num" exact>
        <Header></Header>
            <Carousle></Carousle>
            <DsDuan></DsDuan>
            <Footer></Footer>
        </Route>
        <Route path="/lienhe" exact>
          <Header></Header>
          <Banner></Banner>
            <Lienhe></Lienhe>
            <Footer></Footer>
        </Route>
        <Route path="/contact" exact>
          {/* <HeaderlgEN></HeaderlgEN> */}
          <Banner></Banner>
            <Lienhe></Lienhe>
            <Footer></Footer>
        </Route>
        <Route path = '/sgd' exact>
            <Header></Header>
            <Carousle></Carousle>
            <DsSGD></DsSGD>
            <Footer></Footer>
          </Route>
          <Route path = '/sgdEN' exact>
            {/* <HeaderlgEN></HeaderlgEN> */}
            <Carousle></Carousle>
            <DsSGD></DsSGD>
            <Footer></Footer>
          </Route>
          <Route path="/pageSGD/:num" exact>
          <Header></Header>
            <Carousle></Carousle>
            <DsSGD></DsSGD>
            <Footer></Footer>
        </Route>
        <Route path="/pageSGDEN/:num" exact>
        <Header></Header>
            <Carousle></Carousle>
            <DsDuan></DsDuan>
            <Footer></Footer>
        </Route>
        <Route path = '/cnhd' exact>
            <Header></Header>
            <Carousle></Carousle>
            <DsCNHD></DsCNHD>
            <Footer></Footer>
          </Route>
         < Route path = '/cnhdEN' exact>
            {/* <HeaderlgEN></HeaderlgEN> */}
            <Carousle></Carousle>
            <DsCNHD></DsCNHD>
            <Footer></Footer>
          </Route>
          <Route path="/pageCNHD/:num" exact>
          <Header></Header>
            <Carousle></Carousle>
            <DsCNHD></DsCNHD>
            <Footer></Footer>
        </Route>
        <Route path="/pageCNHDEN/:num" exact>
          {/* <HeaderlgEN></HeaderlgEN> */}
            <Carousle></Carousle>
            <DsCNHD></DsCNHD>
            <Footer></Footer>
        </Route>
        <Route path = '/tintuc' exact>
            <Header></Header>
            <Carousle></Carousle>
            <DsTTSK></DsTTSK>
            <Footer></Footer>
          </Route>
          <Route path = '/new' exact>
            {/* <HeaderlgEN></HeaderlgEN> */}
            <Carousle></Carousle>
            <DsTTSK></DsTTSK>
            <Footer></Footer>
          </Route>
         
        <Route path="/ForSale/:maduan" exact>
        <Header></Header>
        <Carousle></Carousle>
         <ForSaleItem></ForSaleItem>
            <Footer></Footer>
        </Route>
        <Route path="/ForRent/:maduan" exact>
        <Header></Header>
        <Carousle></Carousle>
         <ForSaleItem></ForSaleItem>
            <Footer></Footer>
        </Route>
        <Route path="/project/:maduan" exact>
        <Header></Header>
        <Carousle></Carousle>
          <DuanItem></DuanItem>
            <Footer></Footer>
        </Route>
        <Route path="/gioithieu/:magt" exact>
        <Header></Header>
        <Carousle></Carousle>
          <GioithieuItem></GioithieuItem>
            <Footer></Footer>
        </Route>
        <Route path="/introduction/:magt" exact>
        {/* <HeaderlgEN></HeaderlgEN> */}
        <Carousle></Carousle>
          <GioithieuItem></GioithieuItem>
            <Footer></Footer>
        </Route>
        <Route path="/cnhd/:macnhd" exact>
        <Header></Header>
        <Carousle></Carousle>
          <CNHDItem></CNHDItem>
            <Footer></Footer>
        </Route>
        <Route path="/cnhdEN/:macnhd" exact>
        {/* <HeaderlgEN></HeaderlgEN> */}
        <Carousle></Carousle>
          <CNHDItem></CNHDItem>
            <Footer></Footer>
        </Route>
        <Route path="/sgd/:masgd" exact>
        <Header></Header>
        <Carousle></Carousle>
          <SGDItem></SGDItem>
            <Footer></Footer>
        </Route>
        <Route path="/sgdEN/:masgd" exact>
        {/* <HeaderlgEN></HeaderlgEN> */}
        <Carousle></Carousle>
          <SGDItem></SGDItem>
            <Footer></Footer>
        </Route>
        <Route path="/tintuc/:mattsk" exact>
        <Header></Header>
        <Carousle></Carousle>
          <TTSKItem></TTSKItem>
            <Footer></Footer>
        </Route>
        <Route path="/news/:mattsk" exact>
        {/* <HeaderlgEN></HeaderlgEN> */}
        <Carousle></Carousle>
          <TTSKItem></TTSKItem>
            <Footer></Footer>
        </Route>
       <Route path ="/administractor" exact>
          <Login />
         </Route>
         
         <Route path ="/admin/slide" exact>
           <AdminHeader />
          <Slider />
         </Route>
         <Route path ="/admin/danhmuc" exact>
           <AdminHeader />
          <Danhmuc />
         </Route>
         <Route path ="/admin/theloai" exact>
           <AdminHeader />
          <Theloai />
         </Route>
         <Route path ="/admin/tintuc" exact>
           <AdminHeader />
          <Tintuc />
         </Route>
         <Route path ="/admin/dichvu" exact>
           <AdminHeader />
          <DichVu />
         </Route>
         <Route path ="/admin/duan" exact>
           <AdminHeader />
          <DuanAdmin />
         </Route>
         < Route path ="/admin/lienhe" exact>
           <AdminHeader />
          <Tinnhan />
         </Route>
       </Router>
    </div>
  );
}

export default App;
