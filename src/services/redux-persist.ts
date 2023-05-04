import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { savedReducer, selectFavorite } from '../state/search-saved/search-saved.slice';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['saved'],
};

const persistedReducer = persistReducer(persistConfig, savedReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store, null, () => {
  // console.log('DATA is persisted successfully', store);
});

setInterval(() => {
  persistor.persist();
}, 3000); //Data is persisted every 30 seconds