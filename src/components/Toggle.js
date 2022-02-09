import React from 'react';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa'
const Toggle = () => {
    return (
        <>
        <Styledtoggle/>
            
        </>
    );
};




export default Toggle;

const Styledtoggle = styled(FaBars)`

position:fixed;
top:5%;
right:4%;
color: #222;
background: #eee;
padding: 0.75rem;
display:flex;
place-items: center;
font-size:2rem;
cursor:pointer;


`;