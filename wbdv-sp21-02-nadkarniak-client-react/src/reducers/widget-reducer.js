const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) =>{
    switch(action.type){
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS":
            return{
                ...state,
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            const newState1 = {
                widgets: state.widgets.filter(widget => {
                    if(widget._id === action.widgetToDelete._id){
                        return false
                    }
                    else{
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_WIDGET":
            return {
                    widgets: state.widgets.map(w => {
                        if(w._id === action.widget._id){
                            return action.widget
                        } else{
                            return w
                        }
                    })
                }
        default:
            return state
    }
}

export default widgetReducer