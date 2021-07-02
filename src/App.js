import styled from 'styled-components';
import React from 'react';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled></MainContentStyled>

    </div>
  );
}

const MainContentStyled = styled.main`
    
`;
export default App;
