import React from 'react'
import Presets from './Presets'
import Theme from './Theme';

class Timer extends React.Component {
    render() {
        return(
            <div>
                <h1>Galvanize Timer</h1>
                <form>
                    <span>
                        <input value={this.props.seconds}type="number" name="hours"/>
                        <input value={this.props.minutes} type="number" name="minutes"/>
                        <input value={this.props.hours} type="number" name="seconds"/>
                    </span>
                    <div>
                        <button>+10</button>
                        <button>-10</button>
                    </div>
                    <Presets
                        changeTime={this.props.changeTime}
                        preset1 = {this.props.preset1}
                        preset2 = {this.props.preset2}
                        preset3 = {this.props.preset3}/>
                    <label htmlFor="dropdown"> Select Your Theme</label>
                    <Theme changeTheme={this.props.changeTheme}/>
                    <span>
                        <button>Start</button>
                        <button>Pause</button>
                        <button>Reset</button>
                    </span>
                </form>  
            </div>
        )
    }
}

export default Timer