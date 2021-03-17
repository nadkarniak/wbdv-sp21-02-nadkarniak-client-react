import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../services/widgets-service'

const WidgetList =
     () => {
    // TODO: move state management to widgets-reducer.js
    const {topicId} = useParams();
    const[widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        // TODO: move server communication to widget-service.js
        // fetch("http://localhost:8080/api/widgets")
        if (topicId !== "undefined" && typeof topicId !== "undefined"){
            widgetService.findWidgetsForTopic(topicId).then(widgets => setWidgets(widgets))

        }

    }, [topicId])
    const createWidgetForTopic = () => {
            // TODO: move server communication to widget-service.js
            widgetService.createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget"})
                .then(actualWidget => {
                    setWidgets(widgets => ([...widgets, actualWidget]))
                })
        }
    const deleteWidget = (wid) => {
        widgetService.deleteWidget(wid).then(response => {
            setWidgets((widgets) => widgets.filter(w => w.id !== wid))
        })}
    const updateWidget = (wid, widget) =>{
        widgetService.updateWidget(wid, widget).then(response => {
            setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
            setEditingWidget({})
        })}
        
    return(
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>

        </div>
    )
}

/*const stpm = (state) => ({
    lessons: state.widgetReducer.widgets
})*/

/*const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
       widgetService.findWidgetsForTopic(topicId)
           *//*.then(widgets => dispatch({
               type: "FIND_WIDGETS_FOR_TOPIC",
               widgets
           }))*//*
    },
    createWidgetForTopic: (topicId) => {
       widgetService
           .createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget"})
           *//*.then(widget => dispatch({
               type: "CREATE_WIDGET",
               widget
           }))*//*
    }
})*/

export default WidgetList;