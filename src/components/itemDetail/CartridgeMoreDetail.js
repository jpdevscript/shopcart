import React, { Component } from 'react';
import { connect} from "react-redux";
import { Text, View, Image, TouchableOpacity, Linking, ActivityIndicator, ScrollView } from 'react-native';
import Card from '../generic/Card';
import CardSection from '../generic/CardSection';
import Button from '../generic/Button';
import { headerStyle } from "../styles/headerStyle";
import { getItemDetail } from "./actions";

import { Ionicons } from '@expo/vector-icons';

class CartridgeMoreDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Product Detail',
    ...headerStyle,
    tabBarLabel: "JS",
    // const { routeName } = this.props.navigation.state;
    // console.log("routeName....", routeName)
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      // console.log("routeName....", routeName);
      let iconName;
      if (routeName === 'CartridgeMoreDetail') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return (<TouchableOpacity onPress = {()=>this.temproryRender()}><Ionicons name={iconName} size={25} color={tintColor} /></TouchableOpacity>);
    }
  });

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const itemId = params.itemId;
    this.props.getItem(itemId);
  }


  render() {

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
    if (this.props.itemPending) {
      return (
        <ActivityIndicator size="large" color="red" />
      )
    }
    else {
      return (
        <ScrollView>
          <Card>
            <CardSection>
              <View style={thumbnailContainerStyle}>
                <Image
                  style={thumbnailStyle}
                  source={{ uri: this.props.itemDetail.image }}
                />
              </View>
            </CardSection>
            <CardSection>
              <View >
                <Text>{this.props.itemDetail.title}</Text>
              </View>
            </CardSection>
            <CardSection>
              <View >
                <Text>{this.props.itemDetail.modelDescription}</Text>
              </View>
            </CardSection>
            <CardSection>
              <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{this.props.itemDetail.price}</Text>
              </View>
            </CardSection>
          </Card>
        </ScrollView>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeMoreDetail);

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
