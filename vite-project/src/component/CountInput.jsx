import React, { useState, useRef } from 'react'

//버튼 컴포넌트(추가,업데이트)
const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};
//넘버인풋 컴포넌트(메달카운트)
const NumberInput = ({ onChange, value }) => {
    return <input type='number' onChange={onChange} value={value}/>;
}
//네임인풋 컴포넌트(국가이름)
const Rating = ({ text }) => {
    return <h3>{text}</h3>;
}



const CountInput = ({data, onCreate, onUpdate}) => {

    //국가이름, 메달들 상태값
    const [name, setName] = useState("");
    const [goldCount, setGoldCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);
    const [bronzeCount, setBronzeCount] = useState(0);

    const contentRef = useRef(); //useRef : dom애 접근하기 위한 객체

    //입력된값 가져와 state에 새로 저장하는 이벤트
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeGoldCount = (e) => {
        setGoldCount(+e.target.value);  //숫자는 넘버로 바꿔주기
    }
    const onChangeSilverCount = (e) => {
        setSilverCount(+e.target.value);
    }
    const onChangeBronzeCount = (e) => {
        setBronzeCount(+e.target.value);
    }


    //국가추가 버튼 클릭시 실행되는 함수
    const onSubmit = (e) => {
        e.preventDefault(); // 

        //국가이름에 값이 없을때 포커스되게
        if(name === ''){
            contentRef.current.focus();
            return;
        }
        
        //중복체크변수
        const isOverlap = data.some(item => {
            return item.name === name
        })

        if(isOverlap === true){ //중복시 경고창
            console.log('중복');
            alert('이미 국가가 존재합니다.');
            onReset();
        }else{ //중복 아닐시 국가 추가
            console.log('추가');
            onCreate({
                name : name,
                gold : goldCount,
                silver : silverCount,
                bronze : bronzeCount,
            });
            onReset();
        }


    }

    //업데이트버튼 클릭시 이벤트
    const onClickUpdate = () => {

        //중복여부
        const isOverlap = data.some(item => {
            return item.name === name
        })

        if(isOverlap === true){ //중복시 업데이트
            onUpdate(name,goldCount, silverCount, bronzeCount)
            onReset();
        }else{ //중복아닐시 얼럿
            alert('업데이트할 국가가 없습니다. 국가를 추가하세요.');
            onReset();
        }
    }


    //입력값 초기화
    const onReset = () => {
        setName(''); 
        setGoldCount(0);
        setSilverCount(0);
        setBronzeCount(0);  
    }


    return(
        <ul className='counter-field'>
            <li className='country-name input-field'>
                <h3>국가명</h3>
                <input type='text' placeholder='국가 입력'
                onChange={onChangeName} value={name} ref = {contentRef}
                ></input>
            </li>
            <li className='input-field'>
                <Rating text="금메달"/>
                <NumberInput 
                value={goldCount} 
                onChange={onChangeGoldCount} 
                />
            </li>
            <li className='input-field'>
                <Rating text="은메달"/>
                <NumberInput 
                value={silverCount} 
                onChange={onChangeSilverCount} 
                />
            </li>
            <li className='input-field'>
                <Rating text="동메달"/>
                <NumberInput 
                value={bronzeCount} 
                onChange={onChangeBronzeCount} 
                />
            </li>
            
            <div className='btn-group'>
                <Button text="국가 추가" onClick={onSubmit}/>
                <Button text="업데이트" onClick={onClickUpdate} />
            </div>
        </ul>
    )
}

export default CountInput;