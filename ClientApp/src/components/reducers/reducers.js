const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ]
  }
  
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "addTodo":
            console.log("added", state)
            return [...action.todos]
            break;
    
        default:
            return [...state.todos]
            break;
    }
  }

  export default rootReducer;