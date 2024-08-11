import React, { useState } from 'react'
import CountInput from './component/CountInput'; //연결
import List from './component/List';//연결

//리스트 없을때 디폴트값
const defaultText = `<h3>아직 추가된 국가가 없습니다. 메달을 추적하세요!</h3>`;
const mockData = [
  {
    id : 1,
    name : '대한민국',
    gold : 3,
    silver : 5,
    bronze : 10,
  },
  {
    id : 2,
    name : '일본',
    gold : 3,
    silver : 5,
    bronze : 10,
  },
]


const App = () => {
  //리스트 상태
  const [data, setData] = useState(mockData); //현상태{data}, 업뎃후상태{setData},초기값{defaultText}

  //리스트생성_컴포넌트
  const onCreate = ({name, gold, silver, bronze})=>{
      const newList = { //리스트별 저장될 데이터
        id : data.length +1,
        name,
        gold,
        silver,
        bronze,
      }

      setData([newList, ...data]) //기존 목업데이터 뿌려주면서 앞에 리스트 추가되게
  }

  //삭제 컴포넌트
  const onDelete = (targetId) => {
    console.log('삭제')
    setData(data.filter((data)=>data.id !== targetId)) //다시세팅해(조건 : 리스트 아이디가 지정한 리스트의 아이디와 같지 않은것만 반환)
  }

   //이미 데이터가 있을때 예외처리 : 보수중
  const onCheck = (targetId) => {
    console.log('중복');
    if(data.some(list => list.id === targetId)){
      return alert('이미 국가가 존재합니다.')
    }
  }

  //업데이트 : 보수중
  const onUpdate = (targetName, updateGold, updateSilver, updateBronze) => { 
    console.log('업데이트');
    setData(data.map((list) => { // data State의 값들 중 targetName과 일치하는 name을 갖는 리스트 아이템 값씌우기
      if(list.name === targetName){
        return { //조건부함시 
          ...list, //기존 아이템들 그대로 펼치고,
          gold : updateGold,
          silver : updateSilver,
          bronze : updateBronze,
        }
      }
      return list; //조건 부합하지않아도 -> 변환되지않은 객체를 반환(기존객체)
    }));
  };
  

  return (
      <div className="container">
        <h1>2024 파리 올림픽</h1>
        <CountInput onCreate={onCreate} onCheck={onCheck} onUpdate={onUpdate}/>
        <List data={data} onDelete={onDelete} onUpdate={onUpdate}/>
      </div>
  )
}

export default App