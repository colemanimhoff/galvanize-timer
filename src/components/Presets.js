import React from 'react'

class Presets extends React.Component {
    render() {
        return(
            <span>
                <button onClick={this.props.changeTime}>{this.props.preset1}</button>
                <button onClick={this.props.changeTime}>{this.props.preset2}</button>
                <button onClick={this.props.changeTime}>{this.props.preset3}</button>
                <button>+</button>
            </span>
        )
    }
}

export default Presets