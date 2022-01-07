/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import configureStore from "./src/config/store";
import AppRoot from "./src/navigator";

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const { store, persistor } = configureStore();

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoot />
        </PersistGate>
      </Provider>
    );
  }
}
