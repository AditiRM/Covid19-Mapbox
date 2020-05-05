import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { AppContainer, MainContainer } as S from './styled';

ReactDOM.render(
  <React.StrictMode>
    <App />

  const App = () => (
  <S.AppContainer>
    <Fragment>
    <Header />
    <S.MainContainer>
      <Aside />
      <MapContainer />
    </S.MainContainer>
  </Fragment>
  </S.AppContainer>
  );


  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();