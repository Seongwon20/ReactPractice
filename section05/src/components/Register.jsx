import {useState} from "react";
import {useRef} from "react";
//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register=()=>{

    const[input,setInput]=useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    });

    const countRef=useRef(0);
    const inputRef=useRef();
   

    const onChange=(e)=>{
        // console.log(e.target.name, e.target.value);
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
    };

    const onSubmit=()=>{
        if(input.name===""){
            //이름을 입력하는 DOM 요소 포커스
            // console.log(inputRef.current);
            inputRef.current.focus();
        }
    }


    return (
    <div>
<div>
        <input 
        ref={inputRef}
        name="name"
        value={input.name}
         onChange={onChange} 
         placeholder={"이름"} 
         />
           </div>
           <div>
       <input 
       name="birth"
       value={input.birth}
       onChange={onChange}
       type="date"
       />
    
       </div>
       <div>
        <select 
        name="country"
        value={input.country}
         onChange={onChange}>
            <option>국적 선택</option>
            <option>한국</option>
            <option>미국</option>
            <option>영국</option>
        </select>
       
       </div>
       <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        
       </div>

       <button onClick={onSubmit}>제출</button>
    </div>
    );
};

export default Register;