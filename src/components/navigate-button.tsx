// Import React and Native Base
import React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer, useIsFocused, useNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Box, Icon, VStack, Center, HStack, Text, View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/home';
import { TranslateScreen } from '../pages/translate-screen';
import styled from 'styled-components';
import { styles } from './navigate-button.style';
import { SearchScreen } from '../pages/search-screen';
import { MyFavoriteScreen } from '../pages/my-favorite';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Define the options for the bottom tab navigator
const tabOptions = {
  tabBarStyle: {
    backgroundColor: "#191919",
    borderTopWidth: 0,
    height: 80,
  },
  active: {
    borderRadius: '60%',
    borderColor: 'white',
    borderWidth: 5,
  },
  tabBarActiveTintColor: "#BB86FC",
  tabBarInactiveTintColor: "white",
  tabBarShowLabel: false
};

// Define the app component
const AppNavigator = ({route}: any) => {
  const isFocused = useIsFocused();
  const routeName = getFocusedRouteNameFromRoute(route) || 'Home';
  return (
    <NativeBaseProvider>
        <Tab.Navigator screenOptions={tabOptions} >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Box style= {routeName === 'Home' ? styles.btn: {}}>
                <Icon as={Ionicons} name="home-outline" color={color} size={'30px'} />
                </Box>
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Add"
            component={MyFavoriteScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Box style= {routeName === 'Add' ? styles.btn: {}}>
                <Icon as={Ionicons} name="bookmark" color={color} size={'35px'} />
                </Box>
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Profile"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Box style= {routeName === 'Profile' ? styles.btn: {}}>
                <Icon as={Ionicons} name="search" color={color} size={'30px'} />
                </Box>
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Language"
            component={TranslateScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Box style= {routeName === 'Language' ? styles.btn: {}}>
                <Icon as={Ionicons} name="language-outline" color={color} size={'30px'} />
                </Box>
              ),
              headerShown: false
            }}
          />
        </Tab.Navigator>
    </NativeBaseProvider>
  );
};

const UIContainer = styled(Box)`
  
`;

export default AppNavigator;