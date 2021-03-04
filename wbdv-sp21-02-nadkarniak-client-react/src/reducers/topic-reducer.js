const initialState = {
    topics: []
}

const lessonReducer = (state=initialState, action) => {
    switch(action.type){
         case "CREATE_TOPIC":
            return{
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS":
            return{
                ...state,
                topics: action.topics
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(t => {
                    if(t._id === action.topic._id){
                        return action.topic
                    } else{
                        return t
                    }
                })
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    if (topic._id === action.topicToDelete._id){
                        return false
                    } else{
                        return true
                    }
                })
            }

        default:
            return state
    }
}

export default lessonReducer