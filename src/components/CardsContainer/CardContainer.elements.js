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
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    
    @media screen and (max-width: 1340px){
        width: 80%
    }    
    
    @media screen and (max-width: 767px){
        height: 60%;
        width: 10px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;