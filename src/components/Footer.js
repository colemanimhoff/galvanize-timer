import React from 'react'
import styled from 'styled-components'

const darkblue = 'rgb(0, 59, 76)'
const whitetext = 'rgb(198, 192, 183)'

const Footerwrap = styled.footer`
background-color: ${darkblue};
padding: 2em;
margin-top: 20em;
font-size: 0.5em;
`

const UList = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: flex-end;
color: ${whitetext};`

const Footer = () => {
    return (
        <Footerwrap>
            <nav>
                <UList>
                   <li> &copy; 2018 Allison Livingston, Alyssa Ebert, and Coleman Imhoff</li>
                   <li>Built using React.js, Howler.js, and other sweet thangs</li>
                </UList>
            </nav>
        </Footerwrap>
    )
}

export default Footer