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
                        <input type="text" value="00" name="hours"/>
                        <input type="text" value="00" name="minutes"/>
                        <input type="text" value="00" name="seconds"/>
                    </span>
                    <div>
                        <button>+10</button>
                        <button>-10</button>
                    </div>
                    <Presets />
                    <label htmlFor="dropdown"> Select Your Theme</label>
                    <Theme />
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