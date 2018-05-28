import React from 'react'

class Theme extends React.Component {
    render() {
        return(
            <select id="dropdown">
                <option>Rain</option>
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