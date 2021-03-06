import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        findCourseById,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const {layout} = useParams()
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

  return (
      <tr>
        <td>
            {
                !editing &&
                <Link to={`/courses/${layout}/editor/${course._id}`}>
                    {title}
                </Link>
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>
            <Link to={`/courses/${course._id}/quizzes`}>
              Quizzes
            </Link>
        </td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
        </td>
      </tr>
  )
}
export default CourseRow
