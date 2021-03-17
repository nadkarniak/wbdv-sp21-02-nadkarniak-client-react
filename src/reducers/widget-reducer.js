const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) =>{
    switch(action){
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return{
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer