import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../generic/Card';
import CardSection from '../generic/CardSection';
import Button from '../generic/Button';

const CartridgeDetail = ({ cartridge }) => {
  const { title, modelDescription, image, url } = cartridge;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{modelDescription}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {

  },
  thumbnailStyle: {
    height: 90,
    width: 90
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default CartridgeDetail;
