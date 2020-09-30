import randomstring from 'randomstring';

const itemsState = 
    [
        {text:"first task", done: false, id: randomstring.generate(7)},
        {text:"second task", done: false, id: randomstring.generate(7)},
        {text:"third task", done: false, id: randomstring.generate(7)},
        {text:"fourth task", done: false, id: randomstring.generate(7)},
        {text: "create a website", done: true, id: randomstring.generate(7)},
        {text: "read a book", done: true, id: randomstring.generate(7)},
        {text: "make a call", done: true, id: randomstring.generate(7)},
        {text: "buy a lap top", done: true, id: randomstring.generate(7)}
    ]



export const Reducer =(state = itemsState,action)=> {
    switch (action.type) {
        case "addItem": 
            return [...state,{id:randomstring.generate(7),text:action.payload,done:false}]
        case "updateItem": 
            return state.map(item=>item.id===action.payload? {...item,done:!item.done} : item)
        case "deleteItem": 
            return state.filter(item=> item.id!==action.payload )
        case "localStorage":
                return action.payload
        default: return state 
    }
}
