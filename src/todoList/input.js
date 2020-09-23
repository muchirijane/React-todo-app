import React from 'react';

const TodoList = ( props ) => {
    const inputStyle = {
        border: 'none',
        borderBottom : '2px solid #293241',
        width: '60%',
        margin: '20px 0',
        padding: ' 10px 12px',
        fontSize: '20px',
        background: 'transparent',
    }
    const labelStyle = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '28px',
        fontWeight: 'bold',
        paddingTop: '20px'
    }
    return (
        <div>
            <label for="inputTask" style={labelStyle}>
                Add a task ✍ 
               <input ariallabel="Type in a task" id="inputTask" type="text"style={inputStyle} type="text" placeholder="Add an item here" onChange={props.changed} value={props.itemValue}></input>
            </label>
        </div>
    )
}

export default TodoList;