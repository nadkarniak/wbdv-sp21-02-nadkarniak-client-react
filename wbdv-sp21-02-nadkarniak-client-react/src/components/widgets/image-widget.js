import React, {useState, useEffect} from 'react'
// Last update: Added setWidget onChange
const ImageWidget = ({widget, setWidget, editing, updateWidget, deleteWidget}) => {
    const [cachedItem, setCahedItem] = useState(widget)
    return(
        <div>
                {
                    !editing &&
                        <img width={widget.width} height={widget.height} src={widget.src}/>
                }
                {
                    editing &&
                        <>
                            <input onChange={(e) => setCahedItem({...cachedItem, src:e.target.value})} value={cachedItem.src} className="form-control"/>
                            <input onChange={(e) => setCahedItem({...cachedItem, width:e.target.value})} value={cachedItem.width} className="form-control"/>
                            <input onChange={(e) => setCahedItem({...cachedItem, height:e.target.value})} value={cachedItem.height} className="form-control"/>
                            <select onChange={(e) => setCahedItem({...cachedItem, type:e.target.value})} value={cachedItem.type} className="form-control">
                                <option value={"HEADING"}>Heading</option>
                                <option value={"PARAGRAPH"}>Paragraph</option>
                                <option value={"LIST"}>List</option>
                                <option value={"IMAGE"}>Image</option>
                            </select>
                            <i onClick={() => {updateWidget(cachedItem)}} title="Save" className="fas fa-2x fa-check float-right"></i>
                            <i onClick={() => deleteWidget(widget)} title="Delete" className="fas fa-2x fa-trash float-right"></i>
                        </>
                }
            </div>

    )
}

export default ImageWidget