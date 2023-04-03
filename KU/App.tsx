import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Main from './screens/Main';

const App = () : JSX.Element =>{
  return(
    <Provider store={Store}>
      <Main/>
    </Provider>
  );
};

export default App;