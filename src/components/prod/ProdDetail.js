import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProdDetail(){
    const {pnum} = useParams();
    const navigate = useNavigate();
    const [dto, setDto] = useState({});
    const {num, name, price, seller, fname} = dto;
    const token = sessionStorage.getItem('token');
    const [sellerid, setSeller] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:8081/auth/cafe/get/'+pnum,{headers:{auth_token:token}})
        .then(function(res){
            if(res.status===200){
                setDto(res.data.dto);
                setSeller(res.data.dto.seller.id)
            }else{
                alert('error')
            }
        })
    }, []);
    const onChange = (e) => {
        const {name, value} = e.target;
        setDto({
            ...dto,
            [name]:value
        })
    }
    const edit = () => {
        axios.put('http://localhost:8081/auth/cafe',{},
            {headers:{auth_token:token}, params:{num:num, name:name, price:price}})
            .then(function(res){//res.status:상태값, res.data:백에서 보낸 데이터
                if(res.status === 200){
                    if(res.data.flag){
                        alert('수정 성공');
                        navigate('/prod/list');
                    }else{
                        alert('수정 취소');
                    }
                }else{
                    alert('비정상 응답')
                }
            })
    }
    return(
        
        <div>
            <h3>{pnum + '상품 정보'}</h3>
            name:<input type="text" name="name" value={name} onChange={onChange}/><br/>
            price:<input type="number" name="price" value={price} onChange={onChange} /><br/>
            store:<input type="text" name="seller" value={sellerid}/><br/>
            <img src={'http://localhost:8081/read-img/'+fname} className="imgstyle"/>
            <button onClick={edit}>수정</button>
        </div>
    )
}