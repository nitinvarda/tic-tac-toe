import React, { useState, useEffect } from 'react';

const Square = (props) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (props.reset) {
            setValue('')
        }
    }, [props.reset])

    const selection = () => {
        setValue(props.value)
        props.afterSelecting()
        props.squareFill(props.value)
    }
    return (
        <div
            className="square"
            style={squareStyle} onClick={selection}>

            {value}
        </div>
    );

}
const squareStyle = {
    'width': '60px',
    'height': '60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'black'
}

export default Square