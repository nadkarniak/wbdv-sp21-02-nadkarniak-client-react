import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        updateLesson,
        deleteLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
    <div>
        <h2>Lessons</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lesson._id}`}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type:"UPDATE_LESSON",
                lesson
            })),

    deleteLesson: (item)  =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch ({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))

})

export default connect(stpm, dtpm)(LessonTabs)