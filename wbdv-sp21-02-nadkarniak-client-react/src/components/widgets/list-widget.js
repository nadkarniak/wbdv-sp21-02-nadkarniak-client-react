import React, {useState, useEffect} from 'react'
// Last update: Added setWidget onChange
const ListWidget = ({widget, setWidget, editing, updateWidget, deleteWidget}) => {
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
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>
                    <select onChange={(e) => setCahedItem({...cachedItem, ordered:e.target.value})} value={cachedItem.ordered} className="form-control">
                        <option value={true}>Ordered</option>
                        <option value={false}>Unordered</option>
                    </select>
                    <i onClick={() => {updateWidget(cachedItem)}} title="Save" className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => deleteWidget(widget)} title="Delete" className="fas fa-2x fa-trash float-right"></i>
                    </div>

            }
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget && widget.text && widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget && widget.text && widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>

            }

        </div>
    )
}

export default ListWidget