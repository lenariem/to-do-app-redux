import React from 'react';
import {connect} from "react-redux";

function ToDoneItem({dispatch, taskProps}) {

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