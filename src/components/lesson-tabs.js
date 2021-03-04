import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service"

const LessonTabs = (
    {
        lessons=[
        ],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        findLessonsForModule
    }) => {
    const {courseId, moduleId} = useParams();
    useEffect(() => {
            // alert(courseId)
            if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
                findLessonsForModule(moduleId)
            }
        }, [moduleId])
    return(
    <div>
        <h2>Lessons {lessons.length} {moduleId}</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => {
 return {
        createLessonForModule: (moduleId) => {
            console.log("Create lesson")
            lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
                .then(theActualLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: theActualLesson
                }))
        },
        deleteLesson: (item) =>
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })),
        updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                })),
        findLessonsForModule: (moduleId) => {
            // alert(courseId);
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({
                    type: "FIND_LESSON_FOR_MODULE",
                    lessons: lessons
                }))
        }
    }}

export default connect(stpm, dtpm)(LessonTabs)