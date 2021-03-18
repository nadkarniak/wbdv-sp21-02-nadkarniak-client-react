import React, {useState, useEffect} from 'react'
// Last update: Added setWidget onChange
const ParagraphWidget = ({widget, setWidget, editing, updateWidget, deleteWidget}) => {
    const [cachedItem, setCahedItem] = useState(widget)
    return (
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setCahedItem({...cachedItem, text: e.target.value})}
                    value={cachedItem.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
            <>
                <i onClick={() => {
                    updateWidget(cachedItem)
                }} className="fas fa-2x fa-check float-right"></i>
                <i onClick={() => deleteWidget(widget)} className="fas fa-2x fa-trash float-right"></i>
            </>
        </div>
    )
}

export default ParagraphWidget