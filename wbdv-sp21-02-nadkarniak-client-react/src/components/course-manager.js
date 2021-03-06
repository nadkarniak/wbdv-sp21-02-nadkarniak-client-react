import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
  state = {
    courses: [],
    qwe: 123,
    sdf: 456,
    title:'',
    owner:'me',
    date:'Never'
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)

          // courses: prevState.courses.map(c => {
          //   if(c._id === course._id) {
          //     return course
          //   } else {
          //     return c
          //   }
          // })
        })))
  }

  componentDidMount = () =>
    // findAllCourses()
    //     .then(actualCourses => this.setState({
    //       courses: actualCourses
    //     }))
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
          // const newCourses = this.state.courses
          //     .filter(course => course !== courseToDelete)
          // this.setState({
          //   courses: newCourses
          // })
          // this.setState((prevState) => {
          //   // let nextState = {...prevState}
          //   // nextState.courses =
          //   //     prevState
          //   //         .courses
          //   //         .filter(course => course !== courseToDelete)
          //
          //   let nextState = {
          //     ...prevState,
          //     courses: prevState.courses.filter
          //               (course => course !== courseToDelete)
          //   }
          //
          //   return nextState
          // })

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  findCourseById = (course) => {
    courseService.findCourseById(course._id)
    .then(courses => this.setState({courses}))
  }

  render() {
    return(
      <div>
          <Link to="/">
            <i className="fas fa-2x fa-home float-right"></i>
          </Link>
        <h1>Course Manager</h1>
        <tr class ="wbdv-form">
            <th><input class="form-control"
            placeholder="Course Title" onChange={e=> this.setTitle(e)}/>Title</th>
            <th><input class="form-control"
                    placeholder="Owner" onChange={e=> this.setOwner(e)}/>Owner</th>
            <th><input class="form-control" type="date"
                    placeholder="Last Modified" onChange={e=> this.setDate(e)}/>Last Modified</th>
            <th><button class="btn-success" onClick={this.addCourse}><i class="fas fa-plus-circle"></i></button></th>
        </tr>
        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              findCourseById={this.findCourseById}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
          {/*<Route path="/courses/editor">*/}
          {/*    <CourseEditor/>*/}
          {/*</Route>*/}
          {/*<Route path="/courses/editor"*/}
          {/*       render={(props) => <CourseEditor props={props}/>}>*/}
          {/*</Route>*/}
          <Route path={[
              "/courses/:layout/editor/:courseId",
              "/courses/:layout/editor/:courseId/:moduleId",
              "/courses/:layout/editor/:courseId/:moduleId/:lessonId",
              "/courses/:layout/editor/:courseId/:moduleId/:lessonId/:topicId",
              "/courses/editor/:courseId/:moduleId/:lessonId/:topicId/:widgetId"
              ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>

          {/*<Route path="/courses/editor/:courseId/:moduleId/:lessonId"*/}
          {/*       render={(props) => <CourseEditor {...props}/>}>*/}
          {/*</Route>*/}

      </div>
    )
  }
}

export default CourseManager
