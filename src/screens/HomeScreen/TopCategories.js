import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Block, TextView, Input, Button} from '../../components';
import HeaderTop from './HeaderTop';
import categories from '../../mooks/categories.json';

const W = Dimensions.get('window').width / 4;

const style = StyleSheet.create({
  img: {
    width: W,
    height: (W * 9) / 16,
    borderRadius: 8,
  },
});

const TopCategories = () => {
  const renderItem = ({item}) => {
    return (
      <Button padding={5}>
        <Image style={style.img} source={{uri: item.image}} />
        <TextView padding={8} center>
          {item.name}
        </TextView>
      </Button>
    );
  };

  return (
    <Block padding={10}>
      <HeaderTop moreIcon="filter" title="Top Categories" moreTitle="Filter" />
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Block>
  );
};

export default TopCategories;
