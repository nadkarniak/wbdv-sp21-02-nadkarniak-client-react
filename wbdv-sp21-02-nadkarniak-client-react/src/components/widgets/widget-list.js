import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget"
import ImageWidget from "./image-widget"
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
    const createHeadingForTopic = () => {
            // TODO: move server communication to widget-service.js
            widgetService.createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Heading"})
                .then(actualWidget => {
                    setWidgets(widgets => ([...widgets, actualWidget]))
                })
        }

    const createParagraphForTopic = () => {
                // TODO: move server communication to widget-service.js
                widgetService.createWidgetForTopic(topicId, {type: "PARAGRAPH", size: 1, text: "New Paragraph"})
                    .then(actualWidget => {
                        setWidgets(widgets => ([...widgets, actualWidget]))
                    })
            }
    const deleteWidget = (widget) => {
        widgetService.deleteWidget(widget.id).then(response => {
            setWidgets((widgets) => widgets.filter(w => w.id !== widget.id))
            setEditingWidget({})
        })}
    const updateWidget = (widget) =>{
        widgetService.updateWidget(widget.id, widget).then(response => {
            setWidgets((widgets) => widgets.map(w => w.id !== widget.id ? w : widget))
            setEditingWidget({})
        })}
        
    return(
        <div>
            <i onClick={createHeadingForTopic} title="Add Heading" className="fas fa-plus fa-2x float-right"></i>
            <i onClick={createParagraphForTopic} title="Add Paragraph" className="fas fa-paragraph fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} title="Edit" className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
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