import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../services/module-service"
import moduleActions from "../actions/module-actions"

const ModuleList = (
    {
        myModules=[],
        createModule=() => alert("Create Module 234"),
        deleteModule=(item) => alert("delete " + item._id),
        updateModule,
        findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        // alert(courseId)
        findModulesForCourse(courseId)
    }, [])
    return(
    <div>
        <h2>Modules</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                        <EditableItem
                            key={module._id}
                            to={`/courses/${layout}/editor/${courseId}/${module._id}`}
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            item={module}/>
                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }   
}
const dtpm = (dispatch) => {
    return {
/*        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) => 
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            // alert(courseId);
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }*/
        createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
        deleteModule: (item) => moduleActions.deleteModule(dispatch, item),
        updateModule: (module) => moduleActions.updateModule(dispatch, module),
        findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)
        (ModuleList)
