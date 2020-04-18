/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Block, TextView, Button} from './src/components';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CustomTab({state, descriptors, navigation}) {
  return (
    <Block
      color="#FD0014"
      direction="row"
      style={{
        paddingBottom: 40,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
          if (route.name == 'Home') {
            return 'explore';
          }

          if (route.name == 'Profile') {
            return 'verified-user';
          }

          if (route.name == 'Search') {
            return 'search';
          }

          return 'shopping-cart';
        };

        return (
          <Button block={isFocused} onPress={onPress} onLongPress={onLongPress}>
            <Block padding={14} centered middle>
              <Block
                padding={8}
                direction="row"
                middle
                paddingHorizontal={12}
                borderRadius={20}
                color={isFocused ? 'rgba(255,159,243,0.3)' : '#FD0014'}>
                <MaterialIcons
                  name={getIcon()}
                  size={25}
                  color={isFocused ? '#FFF' : '#222'}
                />
                {isFocused && (
                  <TextView h6 color={isFocused ? '#FFF' : '#222'}>
                    {'  '}
                    {label}
                  </TextView>
                )}
              </Block>
            </Block>
          </Button>
        );
      })}
    </Block>
  );
}

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{}}
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeScreen'} headerMode="none">
        <Stack.Screen name="MainTab" options={{}} component={MainTab} />
        <Stack.Screen name="Splash" options={{}} component={Splash} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
