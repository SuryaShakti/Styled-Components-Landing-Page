import styled from 'styled-components';
import {Container} from "../../globalStyles";

export const Box = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
    
    ${Container}
`;

export const Line = styled.div`
    width: 100%;
    height: 10px;
    background: #2acfcf;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0px, -50%);
    z-index: -1;
    
    @media screen and (max-width: 767px){
        display: none;
    }
`;