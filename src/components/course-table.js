import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div className="container-fluid">
          <Link to="/courses/grid">
            <i className="fas fa-2x fa-th float-right"></i>
          </Link>
        <h2>Course Table</h2>

        <table class="table table-striped">

          <tbody>
          <tr>
            <th>Title</th>
            <th>Owner</th>
            <th>Last Modified</th>
            <th></th>
          </tr>
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
