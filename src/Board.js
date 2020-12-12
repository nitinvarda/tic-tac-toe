import React from 'react';
import Square from './components/Square';
import { Container, Col, Row, Button } from 'react-bootstrap'

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
    'border': '3px #eee solid'
}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column',
    'justifyContent': 'start',
    'height': '100vh',
}

const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}

const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
}

const winnerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',

}





class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: true,
            value: 'X',
            square1: '',
            square2: '',
            square3: '',
            square4: '',
            square5: '',
            square6: '',
            square7: '',
            square8: '',
            square9: '',
            winner: '',
            reset: false
        }
        this.afterSelecting = this.afterSelecting.bind(this)
        this.reset = this.reset.bind(this)
        this.back = this.back.bind(this)
    }

    afterSelecting() {
        this.setState({
            option: !this.state.option,
            value: !this.state.option ? 'X' : 'O'
        })
    }

    reset() {
        this.setState({
            reset: true
        })
        setTimeout(() => {
            this.setState({
                reset: false,
                option: true,
                value: 'X'
            })

        }, 2000)
    }

    back() {
        this.setState({
            option: true,
            value: 'X',
            square1: '',
            square2: '',
            square3: '',
            square4: '',
            square5: '',
            square6: '',
            square7: '',
            square8: '',
            square9: '',
            reset: false

        })
    }

    render() {

        if ((this.state.square1 === 'X' && this.state.square2 === 'X' && this.state.square3 === 'X') ||
            (this.state.square1 === 'O' && this.state.square2 === 'O' && this.state.square3 === 'O') ||
            (this.state.square4 === 'X' && this.state.square5 === 'X' && this.state.square6 === 'X') ||
            (this.state.square4 === 'O' && this.state.square5 === 'O' && this.state.square6 === 'O') ||
            (this.state.square7 === 'X' && this.state.square8 === 'X' && this.state.square9 === 'X') ||
            (this.state.square7 === 'O' && this.state.square8 === 'O' && this.state.square9 === 'O') ||
            (this.state.square1 === 'X' && this.state.square5 === 'X' && this.state.square9 === 'X') ||
            (this.state.square1 === 'O' && this.state.square5 === 'O' && this.state.square9 === 'O') ||
            (this.state.square3 === 'X' && this.state.square5 === 'X' && this.state.square7 === 'X') ||
            (this.state.square3 === 'O' && this.state.square5 === 'O' && this.state.square7 === 'O') ||
            (this.state.square1 === 'X' && this.state.square4 === 'X' && this.state.square7 === 'X') ||
            (this.state.square1 === 'O' && this.state.square4 === 'O' && this.state.square7 === 'O') ||
            (this.state.square2 === 'X' && this.state.square5 === 'X' && this.state.square8 === 'X') ||
            (this.state.square2 === 'O' && this.state.square5 === 'O' && this.state.square8 === 'O') ||
            (this.state.square3 === 'X' && this.state.square6 === 'X' && this.state.square9 === 'X') ||
            (this.state.square3 === 'O' && this.state.square6 === 'O' && this.state.square9 === 'O')) {


            return (
                <Container>
                    <Row>
                        <Col>

                            <div style={winnerStyle}>

                                <div className='d-flex flex-column justify-content-center'>

                                    <div className="winner" style={instructionsStyle}>{this.state.value === 'O' ? <h3>Player One Won : X</h3> : <h3>Player Two Won : O</h3>}</div>
                                    <Button variant='primary' onClick={this.back}>Play Again</Button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
        else {
            return (
                <div style={containerStyle} className="gameBoard">
                    <h3 className='text-center'>Tic-Tac-Toe</h3>
                    <div className="status" style={instructionsStyle}> {this.state.value === 'X' ? `First Player : ${this.state.value}` : `Second Player : ${this.state.value}`}</div>

                    <button onClick={this.reset} style={buttonStyle}>Reset</button>
                    <div style={boardStyle}>
                        <div className="board-row" style={rowStyle}>
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square1: value })} reset={this.state.reset} />
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square2: value })} reset={this.state.reset} />
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square3: value })} reset={this.state.reset} />
                        </div>
                        <div className="board-row" style={rowStyle}>
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square4: value })} reset={this.state.reset} />
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square5: value })} reset={this.state.reset} />
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square6: value })} reset={this.state.reset} />
                        </div>
                        <div className="board-row" style={rowStyle}>
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square7: value })} reset={this.state.reset} />
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square8: value })} reset={this.state.reset} />
                            <Square afterSelecting={this.afterSelecting} value={this.state.value}
                                squareFill={(value) => this.setState({ square9: value })} reset={this.state.reset} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Board



