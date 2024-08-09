import React, { useState } from 'react'

const App = () => {

  //state는 값을 저장하고 저장된값을 전달해서 set으로 변경하는 역할?
  const [name, setName] = useState();
  const [goldCount, setGoldCount] = useState();
  const [silverCount, setSilverCount] = useState();
  const [bronzeCount, setBronzeCount] = useState();



  //공통부분으 이렇게 템플릿?을 만들 수 있음
  const Button = ({ text }) => { //props
    return <button>{text}</button> //props.text
  }
  

  return (
    <>
      <div className="container">
        <h1>2024 파리 올림픽</h1>
        <ul className='counter-field'>
          <li className='country-name input-field'>
            <h3>국가명</h3><input type='text'></input>
          </li>
          <li className='gold input-field'>
            <h3>금메달</h3><input type='number'></input>
          </li>
          <li className='silver input-field'>
            <h3>은메달</h3><input type='number'></input>
          </li>
          <li className='bronze input-field'>
            <h3>동메달</h3><input type='number'></input>
          </li>
          <div className='btn-group'>
            <Button text="국가 추가" />
            <Button text="업데이트" />
          </div>
        </ul>

        <ul className='list-field'>

        </ul>
      </div>
    </>
  )
}

export default App