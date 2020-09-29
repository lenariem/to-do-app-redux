const itemsState = 
    [
        {text:"first task", done: false, id: 0},
        {text:"second task", done: false, id: 1},
        {text:"third task", done: false, id: 2},
        {text:"fourth task", done: false, id: 3},
        {text: "create a website", done: true, id: 4},
        {text: "read a book", done: true, id: 5},
        {text: "make a call", done: true, id: 6},
        {text: "buy a lap top", done: true, id: 7}
    ]



export const Reducer =(state = itemsState,action)=> {
    console.log(state,action);
    switch (action.type) {
        case "addItem": 
        console.log(action);
            return [...state,{id:state.length,text:action.payload,done:false}]
        case "updateItem": 
        console.log(action);
            return state.map(item=>item.id===action.payload? {...item,done:!item.done} : item)
        case "deleteItem": 
            return state.filter(item=> item.id!==action.payload )
        /* case "getToDos":
            return state.filter(item => item.done===false)
        case "getToDones":
            return state.filter(item => item.done===true) */
        case "localStorage":
                return action.payload
        default: return state 
    }
}

