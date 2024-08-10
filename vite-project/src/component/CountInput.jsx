import React, { useState } from 'react'

//공통부분은 이렇게 템플릿?을 만들 수 있음
//버튼 컴포넌트
const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};
//넘버인풋 컴포넌트
const NumberInput = ({value, onChange}) => {
    return <input type='number' value={value} onChange={onChange}/>;
}
//네임인풋 컴포넌트
const Rating = ({ text }) => {
    return <h3>{text}</h3>;
}



const CountInput = ({id, onCreate, onCheck, onUpdate}) => {

    const [name, setName] = useState("");
    const [goldCount, setGoldCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);
    const [bronzeCount, setBronzeCount] = useState(0);

    //데이터 적었을때 호출될 함수
    // const onChangeData = (e) => {
    //     setName(e.target.value);
    //     setGoldCount(e.target.value);
    //     setSilverCount(e.target.value);
    //     setBronzeCount(e.target.value);
    // }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeGoldCount = (e) => {
        setGoldCount(Number(e.target.value));
    }
    const onChangeSilverCount = (e) => {
        setSilverCount(Number(e.target.value));
    }
    const onChangeBronzeCount = (e) => {
        setBronzeCount(Number(e.target.value));
    }

    //국가추가 버튼 클릭시 실행되는 함수
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('국가추가');
        //입력값 초기화
        setName('') 
        setGoldCount(0)
        setSilverCount(0)
        setBronzeCount(0)

        //인자로 받은값들 onCreate생성함수에 전달
        onCreate(
            {
                name : name,
                gold : goldCount,
                silver : silverCount,
                bronze : bronzeCount,
            }
        ) 

        onCheck(id)
    }

    const onClickUpdate = () => {
        onUpdate(id)
    }

    return(
        <ul className='counter-field'>
            <li className='country-name input-field'>
                <h3>국가명</h3>
                <input type='text' placeholder='국가 입력'
                value={name} 
                onChange={onChangeName} 
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