import React from 'react';
import { Provider } from "react-redux";

import RootNavigator from './src/navigation/RootNavigator';

import store from "./src/store";

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
