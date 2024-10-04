import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Ahome(){
    const [list, setList] = useState([]);
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8081/auth/store',{headers:{auth_token:token}})
        .then(function(res){
            if(res.status===200){
                setList(res.data.list);
            }else{
                alert('error')
            }
        })
    }, []);

    const editopen = (storeid) => {
        alert(storeid)
        axios.put('http://localhost:8081/auth/store/'+storeid,{},
            {headers:{auth_token:token}})
        .then(function(res){
            if(res.status===200){
                if(res.data.flag){
                    alert(storeid + ' 매장 오픈됨');
                    navigate('/ahome')
                }
            }else{
                alert('error')
            }
        })
    }
    return(
        <div>
            <h3>관리자 홈</h3>
            <h4>매장 목록</h4>
            <ul>
                {
                    list.map((item)=>(
                        <li>
                            {item.storeid} / {item.sid.id} 
                            / {item.address} / {item.open ? '오픈됨' : '오픈안됨'}
                            / {!item.open && <button onClick={()=>editopen(item.storeid)}>매장오픈</button>}
                        </li>
                        ))
                }
            </ul>
        </div>
    )
}