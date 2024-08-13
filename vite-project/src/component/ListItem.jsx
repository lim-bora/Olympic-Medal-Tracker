import React from 'react'

const ListItem = ({id,name, gold, silver, bronze, onDelete}) => { 
    //삭제 이벤트
    const onClickDelete = () => {
        onDelete(id);
    };

    return(
        <div className='list-item'>
            <div className='name'>{name}</div>
            <div className='gold'>{gold}</div>
            <div className='silver'>{silver}</div>
            <div className='bronze'>{bronze}</div>
            <div className='delete'><button onClick={onClickDelete}>삭제</button></div>
        </div>
    )
}

export default ListItem;