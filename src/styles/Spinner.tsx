import styled, { keyframes } from "styled-components";


const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #ffc107;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotate} 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
`;



export default Spinner;