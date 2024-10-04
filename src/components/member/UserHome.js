
import {Link} from "react-router-dom"

export default function Userhome(){
    const token = sessionStorage.getItem('token');
    let menu;

    const logout = () => {
        sessionStorage.clear();
    }
    if(token === null){
        menu = <div><Link to="/member/join">회원가입</Link> | 
        <Link to="/member/login">로그인</Link></div>;
    }else{
        menu = <div><Link to="/member/info">내정보확인</Link> | 
        <button onClick={logout}>로그아웃</button></div>;
    }

    return(
        <div>
            {menu}
        </div>
    )
}