import React from 'react';
import {View, Text} from 'react-native';
import {Block, TextView, Input, Button} from '../../components';
import Feather from 'react-native-vector-icons/Feather';
const HeaderTop = ({title, moreTitle, moreIcon}) => {
  return (
    <Block direction="row" justifyContent="space-between">
      <TextView bold h6>
        {title}
      </TextView>
      <Button>
        <Block direction="row" middle>
          <Feather size={18} color="#ADABAC" name={moreIcon} />
          <TextView color="#ADABAC">
            {'  '}
            {moreTitle}
          </TextView>
        </Block>
      </Button>
    </Block>
  );
};

export default HeaderTop;
