import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../services/topic-service'


const TopicPills = (
    {
        topics = [{_id: "ABC", title: "A"}],
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic
    }) => {
        const {courseId, moduleId, lessonId, topicId} = useParams()
        console.log(topicId)
        useEffect (()=> {
            if (lessonId !== "undefined" && typeof lessonId !== "undefined"){
                findTopicsForLesson(lessonId)
            }
        }, [lessonId])
        return(
            <div>
                <h3>Topics</h3>
                <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
                </ul>
            </div>
        )
    }

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },

    createTopicForLesson: (lessonId) => {
        topicService.createTopicForLesson(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: "CREATE_TOPIC",
            topic
        }))
    },

    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),

    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
})

export default connect(stpm, dtpm)(TopicPills)
