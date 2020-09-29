import React, { useContext } from 'react'
/* import { MyContext } from './App' */
import {connect} from "react-redux"

 function ToDoItem({dispatch, taskProps}) {
   /*  const {dispatch} = useContext(MyContext) */

    //another way if not use arrow function
    /* const changeStatus = () => {
        props.updateItemProps(props.taskProps.id)
    }
    <button className="btn" onClick={changeStatus}>&#10004;</button> */

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