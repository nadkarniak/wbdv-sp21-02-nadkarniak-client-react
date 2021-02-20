import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) =>
    {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
          setEditing(false)
          const newCourse = {
              ...course,
              title: newTitle
          }
          updateCourse(newCourse)
      }

  return(
  <div className="col-4">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
          <img src={``}/>
        {!editing && <Link to="/courses/editor" className="btn btn-primary">
            {course.title}
        </Link>}
        {
            editing &&
            <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>
        }
        <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
        {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
      </div>
    </div>
  </div>
  )
  }

export default CourseCard