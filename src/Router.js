
import UserHome from "./components/member/UserHome"
import {Routes, Route} from "react-router-dom"
import Join from "./components/member/Join"
import Ahome from "./components/Ahome"
import Shome from "./components/Shome"
import Chome from "./components/Chome"
import Login from "./components/member/Login"
import ProdAdd from "./components/prod/ProdAdd"
import ProdList from "./components/prod/ProdList"
import ProdDetail from "./components/prod/ProdDetail"

export default function Router(){
    return(
        <Routes>
            <Route path="/userhome" element={<UserHome/>}/>
            <Route path="/ahome" element={<Ahome/>}/>
            <Route path="/shome" element={<Shome/>}/>
            <Route path="/prod/add" element={<ProdAdd/>}/>
            <Route path="/prod/list" element={<ProdList/>}/>
            <Route path="/prod/detail/:pnum" element={<ProdDetail/>}/>
            <Route path="/chome" element={<Chome/>}/>
            <Route path="/member/join" element={<Join/>}/>
            <Route path="/member/login" element={<Login/>}/>
            
        </Routes>
    )
}