import React from 'react';

/**
 *
 *  Same Popular Items
 *
 */

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Block, Button, TextView} from '../../components';
import HeaderTop from './HeaderTop';
import foodapp from '../../mooks/foodapp.json';
const W = Dimensions.get('window').width / 2;
const style = StyleSheet.create({
  img: {
    width: W,
    height: W / 2,
    borderRadius: 8,
  },
  div: {
    position: 'relative',
  },
  saleoff: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
});

const NearByDeals = () => {
  const renderItem = ({item}) => {
    return (
      <Button margin={5} borderRadius={8} shadow padding={10} color={'#fff'}>
        <Block style={style.div}>
          <Image style={style.img} source={{uri: item.image}} />
          <Block paddingVertical={8}>
            <TextView size={16}>{item.name}</TextView>
            <TextView color="#AAAAAA">By {item.location}</TextView>

            <TextView size={16}>{item.price}</TextView>
          </Block>

          <Block style={style.saleoff}>
            <TextView padding={3} color="#fff" bgColor="#FF0000">
              10% OFF
            </TextView>
          </Block>
        </Block>
      </Button>
    );
  };
  return (
    <Block padding={10}>
      <HeaderTop title="Popular Items" moreTitle="View all" />
      <FlatList horizontal data={foodapp} renderItem={renderItem} />
    </Block>
  );
};

export default NearByDeals;
