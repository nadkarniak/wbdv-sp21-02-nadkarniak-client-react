import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
  <div>
    <h2>
        <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
        </Link>
        Course Editor
        <i onClick={() => history.goBack()}
           className="fas fa-times float-right"></i>
        {/*<i onClick={() => props.history.goBack()}*/}
        {/*   className="fas fa-times float-right"></i>*/}
    </h2>
    <div>
        <div class="wbdv-sticky-nav-bar">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                        Build
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Pages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Themes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">Apps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">Settings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1" >
                        <i class="fas fa-plus-circle"></i>
                    </a>
                </li>
            </ul>

        </div>
        <div class="row">
            <div class="col-4">
                <ul class="list-group">
                    <li href="#" class="list-group-item list-group-item-action active">
                        Module 1
                        <i class="fas fa-trash"></i>
                    </li>
                    <li href="#" class="list-group-item list-group-item-action">
                        Module 2
                        <i class="fas fa-trash"></i>
                    </li>
                    <li href="#" class="list-group-item list-group-item-action">
                        Module 3
                        <i class="fas fa-trash"></i>
                    </li>
                    <li href="#" class="list-group-item list-group-item-action">
                        Module 4
                        <i class="fas fa-trash"></i>
                    </li>
                    <li href="#" class="list-group-item list-group-item-action">
                        Module 5
                        <i class="fas fa-trash"></i>
                    </li>
                    <li href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-plus-circle"></i>
                    </li>
                </ul>
            </div>
            <div class="col-8">
                <br/>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Topic 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Topic 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Topic 4</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" >
                            <i class="fas fa-plus-circle"></i>
                        </a>
                    </li>
                </ul>

                <h2>
                    Heading Widget
                    <button class="btn btn-success">
                        Save
                    </button>
                    <select class="col-sm-2 form-control">
                        <option>Heading</option>
                        <option>Content</option>
                        <option>Summary</option>
                    </select>
                </h2>
                <div class="mb-3 row">
                    <div class ="col-sm-12">
                        <input class="form-control"
                               placeholder="Heading text"/>
                    </div>

                </div>

                <div class="mb-3 row">
                    <div class="col-sm-12">
                        <select id="heading"
                                class="form-control">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class ="col-sm-12">
                        <input class="form-control"
                               placeholder="Widget name"/>
                    </div>

                </div>
                <p>
                <h4>
                    Preview
                </h4>
                <h2>
                    Heading text
                </h2>
                </p>


            </div>
        </div>
    </div>
  </div>

export default CourseEditor
