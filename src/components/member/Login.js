import {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({id:'', pwd:''})
    const {id, pwd} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const login = () => {
        axios.post('http://localhost:8081/login',{},{params:{id:id, pwd:pwd}})
            .then(function(res){//res.status:상태값, res.data:백에서 보낸 데이터
                if(res.status === 200){
                    if(res.data.flag){
                        alert('로그인 성공');
                        sessionStorage.setItem("loginid", res.data.id);
                        sessionStorage.setItem("type", res.data.type);
                        sessionStorage.setItem("token", res.data.token);
                        let url = '/chome';
                        if(res.data.type==='admin'){
                            url = '/ahome';
                        }else if(res.data.type==='seller'){
                            url = '/prod/list';
                        }
                        navigate(url);
                    }else{
                        alert('회원가입 취소');
                    }
                }else{
                    alert('비정상 응답')
                }
            })
    }
    return(
        <div>
            <h3>login</h3>
            id:<input type="text" name="id" value={id} onChange={onChange}/><br/>
            pwd:<input type="password" name="pwd" value={pwd} onChange={onChange}/><br/>
            <button onClick={login}>로그인</button>
        </div>
    )
}