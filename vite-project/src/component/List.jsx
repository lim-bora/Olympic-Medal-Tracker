import React from 'react'
import ListItem from './ListItem.jsx';

const List = ({data, onDelete, onUpdate}) => {
    return(
        <ul className='list-field'>
            <div className='List-name'>
                <ul>
                    <li>국가명</li>
                    <li>금메달</li>
                    <li>은메달</li>
                    <li>동메달</li>
                    <li>액션</li>
                </ul>
            </div>

            {data.length === 0 ? (
                <h3>아직 추가된 국가가 없습니다. 메달을 추가하세요!</h3>
            ) : (data.map((country) => ( //현재 리스트된 데이터기준 새로운배열을 계속 세팅
            <ListItem 
                key={country.id}  //키가 필수로 있어야한다. 해당 고유아이디를 넣어준다
                name={country.name} 
                gold={country.gold} 
                silver={country.silver} 
                bronze={country.bronze} 
                id={country.id}
                onDelete={onDelete}
                onUpdate={onUpdate}
                />
             ))
            )}
        </ul>
    )
}

export default List;