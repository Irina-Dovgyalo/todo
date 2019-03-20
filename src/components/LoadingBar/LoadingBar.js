import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
    width: 96%;
    height: 1rem;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 auto 2rem;
    box-sizing: content-box;
`;

const Loading = styled.div`
    width: ${({ all, done }) => done/all * 100}%;
    height: 1rem;
    background-color: #17a2b8;
`;

const LoadingBar = (props) => {    
    return (
        <Loader >
            <Loading {...props}/>
        </Loader>
    )
}

export default LoadingBar;

