import React from 'react';
import Navigator from './navigation';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';

const store = storeConfig();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );  
  }
}

export default App;
