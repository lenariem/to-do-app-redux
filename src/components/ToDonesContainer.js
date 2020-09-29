import React from 'react'
import ToDoneItem from './ToDoneItem';
import {connect} from "react-redux";

function ToDonesContainer({state}) {

    const toDones =  state.filter(item => item.done===true)

    const toDonesItems = toDones.map(task => {
        return (
            <ToDoneItem key ={task.id} taskProps={task} />
        );
    });

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDonesItems}
        </div>
    )
}

export default connect((state) =>({state}))(ToDonesContainer)