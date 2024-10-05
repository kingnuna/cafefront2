# 블로그 플랫폼 구축 프로젝트

블로그 플랫폼의 기능들을 back end와 front end로 나누어 개발해 본다

* back end: spring boot restful api
   => backapp
   
* front end: react 
   => cafefront2
  
## front end 프로젝트

#### 개발절차

기능정의: front end 에서 제공할 기능 정의

ui 흐름 정의: 스토리 보드 작성 등의 방법으로 ui 흐름 설계

구현: 설계한 내용 react 활용하여 구현

#### 필요 기술

1. router
 
   url 경로와 컴포넌트를 맵핑하여 화면 전환 기능 제공
   
   - 설치: npm install react-router-dom
   - 라우터 등록
  
     url 경로와 컴포넌트를 맵핑
     
     [Router.js](https://github.com/kingnuna/cafefront2/blob/master/src/Router.js)
  
     ![router1](https://github.com/user-attachments/assets/bdb9ff89-8fc3-4c64-9a15-e5d581dcce9e)
     
   - 라우터 사용
     등록한 url로 화면 전환

     * 태그로 이동 [App.js](https://github.com/kingnuna/cafefront2/blob/master/src/App.js)

     ![router2](https://github.com/user-attachments/assets/55ff61ea-89d7-4259-826e-1047bd56ba8a)
  
     * js로 이동 [Login.js](https://github.com/kingnuna/cafefront2/blob/master/src/components/member/Login.js)

     const navigate = useNavigate();

     navigate('/prod/list');
     
2. axios
   
   비동기 요청(ajax) 처리 라이브러리

   - get 요청
  
     [소스파일보기](https://github.com/kingnuna/cafefront2/blob/master/src/components/prod/ProdDetail.js)

     axios.get('url',{headers:{auth_token:token}})
     
        .then(function(res){ //res.status:상태값, res.data:백에서 보낸 데이터
     
            if(res.status===200){
     
                //정상처리
     
            }else{
     
                //에러처리
     
            }
     
        })

   - post 요청

        [소스파일보기](https://github.com/kingnuna/cafefront2/blob/master/src/components/member/Join.js)

        axios.post('url',{},{params:{id:id, pwd:pwd, name:name,email:email,type:type}})
     
        .then(function(res){ //res.status:상태값, res.data:백에서 보낸 데이터
     
             if(res.status===200){
     
                //정상처리
     
            }else{
     
                //에러처리
     
            }
   
         })

   - post multipart 요청
  
        [소스파일보기](https://github.com/kingnuna/cafefront2/blob/master/src/components/prod/ProdAdd.js)
  
        let fdata = new FormData(document.getElementById('addf')); 

        axios.post('url',fdata, {headers:{auth_token:token, "Content-Type":"multipart/form-data"}})
     
        .then(function(res){ //res.status:상태값, res.data:백에서 보낸 데이터
     
             if(res.status===200){
     
                //정상처리
     
            }else{
     
                //에러처리
     
            }
   
         })

   - put 요청

   [소스파일보기](https://github.com/kingnuna/cafefront2/blob/master/src/components/prod/ProdDetail.js)

   axios.put('url', {}, {headers:{auth_token:token}, params:{num:num, name:name, price:price}})
   
        .then(function(res){//res.status:상태값, res.data:백에서 보낸 데이터
   
             if(res.status===200){
     
                //정상처리
     
            }else{
     
                //에러처리
     
            }
   
         })

   - delete 요청

      axios.delete('url/delid', {}, {headers:{auth_token:token}})
   
        .then(function(res){//res.status:상태값, res.data:백에서 보낸 데이터
   
             if(res.status===200){
     
                //정상처리
     
            }else{
     
                //에러처리
     
            }
   
         })

3. back end 에서 이미지 받아 출력

   [소스파일보기](https://github.com/kingnuna/cafefront2/blob/master/src/components/prod/ProdList.js)

   /< img src={'url'+item.fname} className="imgstyle" />
