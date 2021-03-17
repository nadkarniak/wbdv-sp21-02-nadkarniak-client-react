import React,{useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
//import widgetReducer from "../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "./widgets/widget-list"
import courseService, {findCourseById, deleteCourse} from "../services/course-service";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer//,
    //widgetReducer: widgetReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId} = useParams();
    var title = ""
    console.log(courseId)
    useEffect(() => {
            // alert(courseId)
            const course = findCourseById(courseId)
            console.log(course._id)
            title = course.title
            console.log(title)
        }, [courseId])
    //const course = findCourseById(courseId)

    return (
    <Provider store={store}>
        <div>
            <h2>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor {title}
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <div>
                        <TopicPills/>
                        <div>
                            <WidgetList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)}

export default CourseEditor
