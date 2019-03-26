import React from 'react';

import styled from 'styled-components';


const MyStyle = styled.div`
transition: all 0.5s linear;
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1 rem;
width: 11rem;
background: transparent;
color: white;
border: 2px solid white;
@keyframes fade-in{
0%{opacity: 0;}
100%{opacity: 1;}
}
.fade-in{
animation: fade-in 1s forwards linear;
}
`;

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1 em;
`

class Hello extends React.Component {
    render () {
        return (
            <div key={MyStyle}>
                <div className="Hello">
                    <h1>Hello</h1>
                    <p>I'm on: </p>
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>
                </div>
                <Button>This is my button</Button>
            </div>






        );
    }
}

export default Hello;