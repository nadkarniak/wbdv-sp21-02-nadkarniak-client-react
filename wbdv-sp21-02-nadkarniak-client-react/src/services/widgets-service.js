export const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
    .then(response => response.json())


export const createWidgetForTopic = (topicId, widget) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`,{
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
                method: "PUT",
                body: JSON.stringify(widget),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())


export const deleteWidget = (widgetId) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
                method: "DELETE",
         }).then(response => response.json())

export default{
    findWidgetsForTopic,
    createWidgetForTopic,
    updateWidget,
    deleteWidget
}