import React, {useState, useEffect} from 'react'
// Last update: Added setWidget onChange
const ParagraphWidget = ({widget, setWidget, editing, updateWidget, deleteWidget}) => {
    const [cachedItem, setCahedItem] = useState(widget)
    return (
        <div>
            {
                editing &&
                <div>
                <textarea
                    onChange={(e) => setCahedItem({...cachedItem, text: e.target.value})}
                    value={cachedItem.text}
                    className="form-control">
                    </textarea>
                    <select onChange={(e) => setCahedItem({...cachedItem, type:e.target.value})} value={cachedItem.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <i onClick={() => {updateWidget(cachedItem)}} title="Save" className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => deleteWidget(widget)} title="Delete" className="fas fa-2x fa-trash float-right"></i>
                    </div>

            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }

        </div>
    )
}

export default ParagraphWidget