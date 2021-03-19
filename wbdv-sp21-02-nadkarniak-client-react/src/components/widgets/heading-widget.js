import React, {useState, useEffect} from 'react'

//Last update: adding update and delete functions as params and adding cachedItem, moved save/delete buttons from widget list
// to here
const HeadingWidget = ({widget, setWidget, editing, updateWidget, deleteWidget}) =>{
     const [cachedItem, setCahedItem] = useState(widget)
    return(
    <div>
        { widget.size ===1 && <h1>{widget.text}</h1>}
        { widget.size ===2 && <h2>{widget.text}</h2>}
        { widget.size ===3 && <h3>{widget.text}</h3>}
        { widget.size ===4 && <h4>{widget.text}</h4>}
        { widget.size ===5 && <h5>{widget.text}</h5>}
        { widget.size ===6 && <h6>{widget.text}</h6>}

        {
            editing &&

            <div>
                <input onChange={(e) => setCahedItem({...cachedItem, text: e.target.value})} value={cachedItem.text}
                className="form-control"/>
                <select onChange={(e) => setCahedItem({...cachedItem, size: parseInt(e.target.value)})} value={cachedItem.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
                <select onChange={(e) => setCahedItem({...cachedItem, type:e.target.value})} value={cachedItem.type} className="form-control">
                    <option value={"HEADING"}>Heading</option>
                    <option value={"PARAGRAPH"}>Paragraph</option>
                </select>
                <>
                    <i onClick={() => {
                        updateWidget(cachedItem)
                    }} title="Save" className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => deleteWidget(widget)} title="Delete" className="fas fa-2x fa-trash float-right"></i>
                </>
            </div>
        }
    </div>
    )
}

export default HeadingWidget