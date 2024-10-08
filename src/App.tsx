import React from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import Router from 'router/Router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;
