import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProdList(){
    const [list, setList] = useState([]);
    const token = sessionStorage.getItem('token');
    const sid = sessionStorage.getItem('loginid');

    useEffect(()=>{
        axios.get('http://localhost:8081/auth/cafe/'+sid ,{headers:{auth_token:token}})
        .then(function(res){
            if(res.status===200){
                setList(res.data.list);
            }else{
                alert('error')
            }
        })
    }, []);

    return(
        <div>
            <h3>{sid+ ' 판매자의 상품 목록'}</h3>
            <ul>
            {
                list.map((item)=>(
                    <li>
                        <Link to={"/prod/detail/"+item.num}> {item.name} </Link> / 
                        {item.price} / 
                        <img src={'http://localhost:8081/read-img/'+item.fname} className="imgstyle"/>
                    </li>
                ))       
            }
        </ul>
        </div>
    )
}