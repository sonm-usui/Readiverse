import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, theme } from 'native-base';
import { Button, Platform, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/components/navigate-button';
import { Provider } from 'react-redux';
import store, { useAppDispatch } from './src/state/store/store';
import { fetchData } from './src/services/api.services';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications'
import { registerForPushNotificationsAsync } from './src/components/notification/notification';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/services/redux-persist';
import RNRestart from 'react-native-restart';

export default function App() {
  
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token as string));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification as any);
    }) as any;

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    }) as any;

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current as any);
      Notifications.removeNotificationSubscription(responseListener.current as any);
    };
  }, []);
  
  const onRefresh = useCallback( async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="always"
          alwaysBounceVertical={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <NativeBaseProvider theme={theme}>
            <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="navigator" component={AppNavigator} />
              
            </Stack.Navigator>
          </NativeBaseProvider>
        </ScrollView>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
