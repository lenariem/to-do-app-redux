import React from 'react'
import {connect} from "react-redux"

 function ToDoItem({dispatch, taskProps}) {

    return (
        <div className="todo-item">
            <p>{taskProps.text}</p>
            <div className="action">
                {/* arrow because we cannot call function directly, will call it all time */}
                <button className="btn" onClick={() => dispatch({type: "updateItem", payload: taskProps.id})}>&#10004;</button>
                <button className="btn" onClick={() => dispatch({type: "deleteItem", payload: taskProps.id})}>&#128465;</button>
            </div>
        </div>
    )
}
export default connect()(ToDoItem)