import React from 'react'

function Item(props) {
    return (
        <div className='item-style'>
            <h3>{props.item.name}</h3>
            <h3>{props.item.calorie}</h3>
            <button name={props.item.name} onClick={props.onClick} className='remove-button'>Remove </button>
        </div>
    )
}

export default Item;
