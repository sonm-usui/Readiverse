import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Box, Heading, HStack, Icon, Input } from 'native-base';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { useFetch } from '../custom-hooks/api-hooks';
import { fetchData } from '../services/api.services';
import { fetchAsyncThunk, getFavorite, selectFavorite } from '../state/search-saved/search-saved.slice';
import { useAppDispatch, useAppSelector } from '../state/store/store';


const DefinitionCard = ({ val }: any) => {
  return (
    <Box
      width='80%'
      backgroundColor='#2B2730'
      borderRadius='20'
      flex={1}
      padding='4'
      opacity='0.5'
      gap='2'
    >
      <Box flex={3}>
        <Heading style={{ color: '#BB86FC' }}>{val?.word}</Heading>
      </Box>
      <Box flex={2}>
        <Text numberOfLines={2} style={{ color: '#FFFFFF' }}>
          {val?.definition}
        </Text>
      </Box>
      <Box flex={4}>
        <Text numberOfLines={2} style={{ color: '#FFFFFF' }}>
          Example: {val?.example}
        </Text>
      </Box>
      <Box flex={2} flexDirection='row' justifyContent='space-between'>
        <Text style={{ color: '#BB86FC' }}>~ {val?.author}</Text>
        <Icon as={Ionicons} name='bookmark' color='#BB86FC' size={'30px'} />
      </Box>
    </Box>
  );
};

export const MyFavoriteScreen = () => {
  const myFavData = useAppSelector(selectFavorite);
  const [myFav, setMyFav] = useState([]);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const getDataForFav = async() => {
    if(myFavData){
      setMyFav(myFavData);
    } else {
      dispatch(fetchAsyncThunk(1));
    }
}

useFocusEffect( 
   useCallback( () => {
    getDataForFav();
}, [myFav])
);

const onRefresh =  () => {
  setRefreshing(true);
  dispatch(fetchAsyncThunk(1));
  setRefreshing(false);
};

    return (
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Box safeAreaTop backgroundColor='#302D25' flex={1}>
          <Box
            flex={0.5}
            style={{ height: 72, paddingLeft: 24, justifyContent: 'center' }}
          ></Box>
          <Box flex={7} backgroundColor='#302D25'>
            <ScrollView>
              <Box flex={1} justifyContent='center' alignItems='center' gap='5'>
                {myFavData && myFavData.length ? (
                  myFavData.map((value: any) => {
                    return (
                      <DefinitionCard
                        key={value['defid']}
                        val={value}
                      ></DefinitionCard>
                    );
                  })
                ) : (
                  <Text style={{ color: 'white' }}>No favorites</Text>
                )}
              </Box>
            </ScrollView>
          </Box>
        </Box>
      </ScrollView>
    );
}