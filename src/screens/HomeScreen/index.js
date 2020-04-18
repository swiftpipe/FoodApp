import React from 'react';
import {SafeAreaView} from 'react-native';
import {Block} from '../../components';
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItems from './PopularItems';
import NearByDeals from './NearByDeals';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Block block color="#F8F6F6" padding={10}>
        <SearchBar />
        <TopCategories />
        <Block height={1} color="#EFEEEE" />
        <PopularItems />
        <Block height={1} color="#EFEEEE" />
        <NearByDeals />
      </Block>
    </SafeAreaView>
  );
};

export default HomeScreen;
