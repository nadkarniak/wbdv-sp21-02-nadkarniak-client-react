const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const findWidgetsForTopic = (topicId) =>
    fetch(`${process.env.REACT_APP_WIDGET_URL}/topics/${topicId}/widgets`)
    .then(response => response.json())


export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${process.env.REACT_APP_WIDGET_URL}/topics/${topicId}/widgets`,{
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${process.env.REACT_APP_WIDGET_URL}/widgets/${widgetId}`, {
                method: "PUT",
                body: JSON.stringify(widget),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`${process.env.REACT_APP_WIDGET_URL}/widgets/${widgetId}`, {
                method: "DELETE",
         }).then(response => response.json())

export default{
    findWidgetsForTopic,
    createWidgetForTopic,
    updateWidget,
    deleteWidget
}