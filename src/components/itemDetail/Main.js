import React, { Component } from 'react';
import { connect} from "react-redux";
import { Text, View, Image, Linking, ActivityIndicator, ScrollView } from 'react-native';
import Card from '../generic/Card';
import CardSection from '../generic/CardSection';
import Button from '../generic/Button';
import { headerStyle } from "../styles/headerStyle";
import { getItemDetail } from "./actions";


class Main extends Component {
  static navigationOptions = {
    title: 'Product Detail',
    ...headerStyle
  };

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const itemId = params.itemId;
    this.props.getItem(itemId);
  }


  render() {

    return(
      <View>Jay Swaminarayan</View>
    )
  }
}

function mapStateToProps(state) {
    console.log("itemDetailPending....", state.item.itemDetailPending);
    return {
      itemDetail : state.item.itemDetail,
      itemPending: state.item.itemDetailPending
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getItem: (itemId) => dispatch(getItemDetail(itemId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerTextStyle: {

  },
  thumbnailStyle: {
    height: 280,
    width: 280
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};
