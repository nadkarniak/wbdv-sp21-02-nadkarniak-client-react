const initialState = {
    lessons: [
        //{_id: "123", title: "Lesson 111"},
        //{_id: "234", title: "Lesson 234"},
        //{_id: "345", title: "Lesson 345"}
    ]
}

const lessonReducer = (state=initialState, action) => {
switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            const newState = {
                lessons: [
                    ...state.lessons,
                    action.lesson
                    // {
                    //     title: "New Module",
                    //     _id: (new Date()).getTime()
                    // }
                ]
            }
            return newState
        case "DELETE_LESSON":
            // alert("delete the module " + action.moduleToDelete.title)
            const newState1 = {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(l => {
                    if(l._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return l
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer