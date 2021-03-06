import React, { useState } from 'react';
import Square from './components/Square';


const rowStyle = {
    display: 'flex'
}


const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid',
    'marginTop': '25px'

}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column',
    'justifyContent': 'start',
    'height': '100vh',
    'marginTop': '60px'
}

const instructionsStyle = {
    'margin': '10px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}

// const buttonStyle = {
//     'marginTop': '15px',
//     'marginBottom': '16px',
//     'width': '80px',
//     'height': '40px',
//     'color': 'white',
//     'fontSize': '16px',
// }

const winnerStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'height': '100vh',
    'justifyContent': 'center',
    'alignItems': 'center',
    'width': '80%',
    'margin': 'auto'

}

const draw = {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',

}

const btn = {
    'borderRadius': '10px',
    'border': 'none',
    'padding': '8px',
    'backgroundColor': '#0080ff',
    'color': 'white'
}

const resetBtn = {
    'borderRadius': '10px',
    'border': 'none',
    'padding': '8px',
    'backgroundColor': '#ff0000',
    'color': 'white',
    'width': '80px'

}



const Board = () => {
    const [option, setOption] = useState(true)
    const [value, setValue] = useState('X')
    const [square1, setSquare1] = useState('')
    const [square2, setSquare2] = useState('')
    const [square3, setSquare3] = useState('')
    const [square4, setSquare4] = useState('')
    const [square5, setSquare5] = useState('')
    const [square6, setSquare6] = useState('')
    const [square7, setSquare7] = useState('')
    const [square8, setSquare8] = useState('')
    const [square9, setSquare9] = useState('')
    const [reset, setReset] = useState(false)



    const afterSelecting = () => {
        setOption(!option)
        setValue(!option ? 'X' : 'O')
    }


    const resetState = () => {
        setReset(true)
        setTimeout(() => {
            setReset(false)
            setOption(true)
            setValue('X')
        }, 100)
    }


    const back = () => {
        setOption(true)
        setValue('X')
        setSquare1('')
        setSquare2('')
        setSquare3('')
        setSquare4('')
        setSquare5('')
        setSquare6('')
        setSquare7('')
        setSquare8('')
        setSquare9('')
        setReset(false)
    }



    if ((square1 === 'X' && square2 === 'X' && square3 === 'X') ||
        (square1 === 'O' && square2 === 'O' && square3 === 'O') ||
        (square4 === 'X' && square5 === 'X' && square6 === 'X') ||
        (square4 === 'O' && square5 === 'O' && square6 === 'O') ||
        (square7 === 'X' && square8 === 'X' && square9 === 'X') ||
        (square7 === 'O' && square8 === 'O' && square9 === 'O') ||
        (square1 === 'X' && square5 === 'X' && square9 === 'X') ||
        (square1 === 'O' && square5 === 'O' && square9 === 'O') ||
        (square3 === 'X' && square5 === 'X' && square7 === 'X') ||
        (square3 === 'O' && square5 === 'O' && square7 === 'O') ||
        (square1 === 'X' && square4 === 'X' && square7 === 'X') ||
        (square1 === 'O' && square4 === 'O' && square7 === 'O') ||
        (square2 === 'X' && square5 === 'X' && square8 === 'X') ||
        (square2 === 'O' && square5 === 'O' && square8 === 'O') ||
        (square3 === 'X' && square6 === 'X' && square9 === 'X') ||
        (square3 === 'O' && square6 === 'O' && square9 === 'O')) {

        return (


            <div style={winnerStyle}>

                <div className='d-flex flex-column justify-content-center'>
                    <div className="winner" style={instructionsStyle}>{value === 'O' ? <h3>Player One Won : X</h3> : <h3>Player Two Won : O</h3>}</div>
                    <button onClick={back} style={btn}>Play Again</button>
                </div>

            </div>

        )
    }
    else if (square1.length >= 1 &&
        square2.length >= 1 &&
        square3.length >= 1 &&
        square4.length >= 1 &&
        square5.length >= 1 &&
        square6.length >= 1 &&
        square7.length >= 1 &&
        square8.length >= 1 &&
        square9.length >= 1) {
        return (


            <div style={winnerStyle}>

                <div style={draw} >

                    <div className="winner" style={instructionsStyle}><h3>Match Drawn    !!</h3></div>
                    <button style={btn} onClick={back}>Play Again</button>
                </div>

            </div>


        )
    }
    else {
        return (

            <div style={containerStyle} className="gameBoard">
                <h2 className='text-center'>Tic-Tac-Toe</h2>
                <div className="status" style={instructionsStyle}> {value === 'X' ? <h5>{`First Player : ${value}`}</h5> : <h5>{`Second Player : ${value}`}</h5>}</div>
                <button style={resetBtn} onClick={resetState} >Reset</button>
                <div style={boardStyle}>
                    <div className="board-row" style={rowStyle}>
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare1(value)} reset={reset} />
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare2(value)} reset={reset} />
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare3(value)} reset={reset} />
                    </div>
                    <div className="board-row" style={rowStyle}>
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare4(value)} reset={reset} />
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare5(value)} reset={reset} />
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare6(value)} reset={reset} />
                    </div>
                    <div className="board-row" style={rowStyle}>
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare7(value)} reset={reset} />
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare8(value)} reset={reset} />
                        <Square afterSelecting={afterSelecting} value={value}
                            squareFill={(value) => setSquare9(value)} reset={reset} />
                    </div>
                </div>
            </div>

        );
    }

}






export default Board



