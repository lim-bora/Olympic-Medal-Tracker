import React, { useState } from 'react'
import CountInput from './component/CountInput'; //연결
import List from './component/List';//연결

//리스트 없을때 디폴트값
const mockData = [
  {
    id : 1,
    name : '대한민국',
    gold : 7,
    silver : 9,
    bronze : 3,
  },
  {
    id : 2,
    name : '일본',
    gold : 1,
    silver : 1,
    bronze : 4,
  },
]


const App = () => {
  //리스트 상태
  const [data, setData] = useState(mockData); //현상태{data}, 업뎃후상태{setData},초기값{defaultText}

  //리스트생성_함수
  const onCreate = ({name, gold, silver, bronze})=>{
      const newList = { //리스트별 저장될 데이터
        id : data.length +1,
        name, 
        gold,
        silver,
        bronze,
      }

      const sortData = [newList, ...data];
      sortData.sort((a, b) => b.gold - a.gold) //금메달총합 기준 내림차순정렬
      setData(sortData) //기존 목업데이터 뿌려주면서 앞에 리스트 추가되게
  }

  //삭제 
  const onDelete = (targetId) => {
    console.log('삭제')
    setData(data.filter((data)=>data.id !== targetId)) //다시세팅해(조건 : 리스트 아이디가 지정한 리스트의 아이디와 같지 않은것만 반환)
  }


  //업데이트
  const onUpdate = (targetName, updateGold, updateSilver, updateBronze) => { 
    console.log('업데이트');
    setData(data.sort((a, b) => b.gold - a.gold).map((list) => { // data State의 값들 중 targetName과 일치하는 name을 갖는 리스트 아이템 값씌우기
      if(list.name === targetName){
        return { 
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
        <CountInput data={data} onCreate={onCreate} onUpdate={onUpdate}/>
        <List data={data} onDelete={onDelete} onUpdate={onUpdate}/>
      </div>
  )
}

export default App