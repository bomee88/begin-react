import React, { useState, useRef } from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    }) //useState를 객체로 관리
    const nameInput = useRef(); //useRef객체를 만듬.
    const { name, nickname } = inputs; 
    const onChange = (e) => {
        const { name, value } = e.target; //name과 value를 변수이름 따로 만들어줌
        setInputs({
            ...inputs, //기존의 객체 복사(불변성을 지키기위해)
            [name]: value, //문자열 name이 아닌 키값을 의미하도록 []안에 씀.
        });
    }
    const clearText = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus(); //포커스 연결
    }
    return(
        <div>
            <input 
                placeholder="이름" 
                name="name" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />
            <input 
                placeholder="닉네임" 
                name="nickname" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={clearText}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;