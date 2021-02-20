 import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

export default class CourseGrid
    extends React.Component {

      constructor(props) {
        super(props)
        console.log(props)

  }

  render(){
  return(<div>
      <Link to="/courses/table">
        <i className="fas fa-list fa-2x float-right"></i>
      </Link>
    <h2>Course Grid</h2>
    <div className="row">
    {
      this.props.courses.map((course) =>
        <CourseCard
            updateCourse={this.props.updateCourse}
            deleteCourse={this.props.deleteCourse}
            course={course}
            title={course.title}
            owner={course.owner}
            lastModified={course.lastModified}
        />
      )
    }
    </div>
  </div>
  )
  }
}

//export default CourseGrid