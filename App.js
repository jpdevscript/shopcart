import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CartridgeList from './src/components/itemList/CartridgeList';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CartridgeMoreDetail from './src/components/itemDetail/CartridgeMoreDetail';
import Main from './src/components/itemDetail/Main';

import {Provider} from "react-redux";
import reducers from "./src/store/reducers";
import rootSaga from "./src/store/rootSaga";
import configureStore from "./src/store/configureStore";

const store = configureStore(reducers, rootSaga, undefined);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}
const RootStack = StackNavigator(
  {
    CartridgeList: {screen: CartridgeList },
    CartridgeMoreDetail: {
      screen: TabNavigator (
        {
          CartridgeMoreDetail: {
            screen: CartridgeMoreDetail
          }
        },
        {
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          },
          animationEnabled: false,
          swipeEnabled: false
        }
      )
    }
  },
  {
    initialRouteName: 'CartridgeList'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
