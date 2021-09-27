const initialState = {
    todos: []
  }
  
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "addTodo":
            
            return [...action.todos]
            break;
        case "deleteTodo":
            const filteredTodos = state.filter((item)=>{
                if(item.id.toString() !== action.id.toString()){
                    return item
                }
            })
            return [...filteredTodos]
            break;
    
        default:
            return [...state.todos]
            break;
    }
  }

  export default rootReducer;