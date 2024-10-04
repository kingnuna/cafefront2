import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Shome() {
    const token = sessionStorage.getItem('token');
    const loginid = sessionStorage.getItem('loginid');
    const [dto, setDto] = useState({});
    let menu;
    
    useEffect(() => {
        axios.get('http://localhost:8081/auth/store/sid/' + loginid, { headers: { auth_token: token } })
            .then(function (res) {
                if (res.status === 200) {
                    setDto(res.data.s);
                } else {
                    alert('error')
                }
            })
    }, []);
    if (dto === null) {
        menu = <div><Link to="/store/add">매장등록</Link></div>;
    }else{
        if(dto.open){
            menu = <div><Link to="/prod/add">상품등록</Link>  |  
                    <Link to="/prod/list">상품목록</Link>
                    </div>;
        }
        else{
            menu = <div>매장개설 안됨</div>;
        }
    }
    return (
        <div>
            <h3>판매자홈</h3>
            {menu}
        </div>
    )
}