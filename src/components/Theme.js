import React from 'react'
import {Howl, Howler} from 'howler'

class Theme extends React.Component {

playSound = (event) => {
    let sound = new Howl({
        src: ['./sounds/seagulls.wav']
    })
    sound.play()
}

render() {
    return(
        <select id="dropdown">
            <option onClick={playSound}>Seagulls</option>
            <option>Ocean</option>
            <option>Jungle</option>
            <option>Forest</option>
            <option></option>
            <option></option>
        </select>
    )
}
}

export default Theme