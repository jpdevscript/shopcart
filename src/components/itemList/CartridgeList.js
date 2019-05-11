import React, { Component } from 'react';
import { connect} from "react-redux";
import { ScrollView, TouchableOpacity, ActivityIndicator, View, StyleSheet } from 'react-native';
import CartridgeDetail from './CartridgeDetail';
import CartridgeMoreDetail from '../itemDetail/CartridgeMoreDetail';
import { loadCartridges } from "./actions";
import { headerStyle } from "../styles/headerStyle";

class CartridgeList extends Component {

  static navigationOptions = {
    title: 'Canon Ink Cartridges',
    ...headerStyle
  };

  componentWillMount() {
    this.props.onLoad();
  }

  renderCartridges() {
    return this.props.cartridges.map(cartridge =>
      <TouchableOpacity key={cartridge._id}
        onPress = {
          () => this.props.navigation.navigate('CartridgeMoreDetail', {
            itemId:cartridge._id,

          })
        }
      >
        <CartridgeDetail
          cartridge={cartridge}
        />
      </TouchableOpacity>
    );
  }

  render() {
    if (this.props.pending) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )
    }
    else {
      return (
        <ScrollView>
          {this.renderCartridges()}
        </ScrollView>
      );
    }
  }
}

function mapStateToProps(state) {
    return {
      cartridges : state.list.cartridges,
      pending: state.list.pending
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoad: () => dispatch(loadCartridges()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
