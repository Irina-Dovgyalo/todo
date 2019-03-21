import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: d-flex;
  align-items: flex-end;
  padding: 0 0.75rem;
`;

const HeaderH1 = styled.div`
  flex-grow: 1;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 1rem;
`;


const AppHeader = () => {
    return (
      <Header>
        <HeaderH1>My Todo List</HeaderH1>
      </Header>
    ) 
  }

export default AppHeader;