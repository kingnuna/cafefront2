import axios from "axios";
import { useState } from "react";

export default function Info(){
    const [dto, setDto] = useState({});
    const {id,pwd,name,email,type} = dto;
    const token = sessionStorage.getItem('token');
    useEffect(()=>{
        axios.get('http://localhost:8081/auth/member',{headers:{auth_token:token}})
        .then(function(res){
            if(res.status===200){
                setDto(res.data.dto);
            }else{
                alert('error')
            }
        })
    }, []);

    return(
        <div>
            <h3>내정보</h3>
            id:{id}<br/>
            name:{name}<br/>
            email:{email}<br/>
            type:{type}<br/>
        </div>
    )
}