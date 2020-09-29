import React, { useContext } from 'react'
import { MyContext } from './App'
import {connect} from "react-redux"

function ToDoneItem({dispatch, taskProps}) {
   /*  const {dispatch} = useContext(MyContext) */
    return (
        <div className="todones-item">
            <p>{taskProps.text}</p>
            <div className="action">
                <button className="btn" onClick ={()=>dispatch({type: "updateItem", payload: taskProps.id}) }>&#8635;</button>
                <button className="btn" onClick={() => dispatch({type: "deleteItem", payload: taskProps.id})}>&#128465;</button>
            </div>
        </div>
    )
}

export default connect()(ToDoneItem)