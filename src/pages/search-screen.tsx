import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { Box, Heading, Icon, Input, InputGroup, ScrollView, Image, HStack, Button } from 'native-base';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { fetchData, fetchDictionaryData, updateData } from '../services/api.services';
import { addFavorites, getFavorite, SEARCH_SAVED, selectFavorite } from '../state/search-saved/search-saved.slice';
import { useAppDispatch, useAppSelector } from '../state/store/store';
import DetailModal from './detail-modal';


const DefinitionCard = ({ val, bookmarked, setMarked }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState();

  const addToFavorite = (val: any) => {
    bookmarked(val);
  };

  const showDetails = (val: any) => {
    setContent(val);
    setShowModal(true);
  }
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
        <Heading style={{ color: '#BB86FC' }}>
          {val?.word}
          {setMarked}
        </Heading>
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
        {setMarked ? (
          <Icon as={Ionicons} name='bookmark' color='#BB86FC' size={'30px'} />
        ) : (
          <Icon
            as={Ionicons}
            name='bookmark-outline'
            color='#BB86FC'
            size={'30px'}
            onPress={() => addToFavorite(val)}
          />
        )}
      </Box>
        <Button backgroundColor='#2B2730' onPress={() => showDetails(val)}>View Details</Button>
      <DetailModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={content}
          title={val?.word}
        ></DetailModal>
    </Box>
  );
};

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState();
  const myFavData = useAppSelector(selectFavorite);
  const dispatch = useAppDispatch();

  const handleSearch = (text: any) => {
    setSearchText(text);
  };

  const searchItems = async () => {
    fetchDictionaryData(searchText)
      .then((response) => response.json())
      .then((response) => {
        setData(response['list']);
        setSearchText('');
      })
      .catch((err) => console.error(err));
  };

  const getDataForFav = async () => {
    if (!myFavData) {
      const data = (await fetchData()) || [];
      dispatch(getFavorite(data));
    }
  };

  useFocusEffect(
    useCallback(() => {
      getDataForFav();
    }, [])
  );

  const addToFav = async (val: any) => {
    dispatch(addFavorites(val));
  };

  const isBookmarked = (val: any) => {
    return (myFavData || []).some((value: any) => value.defid === val.defid);
  };
  return (
    <>
      <Box safeAreaTop backgroundColor='#302D25' flex={1}>
        <Box
          flex={0.5}
          style={{ height: 72, paddingLeft: 24, justifyContent: 'center' }}
        >
          <Image
            source={require('../../assets/IRIS-logo.png')}
            alt='iris-logo'
            style={{ width: 75, height: 24, marginRight: 10 }}
          ></Image>
        </Box>
        <Box flex={1} justifyContent='center' paddingLeft='10'>
          <HStack space='8px' alignItems='center'>
            <Input
              placeholder='Search'
              value={searchText}
              onChangeText={handleSearch}
              width='80%'
              height='10'
              color='#fff'
              borderRadius='10'
              focusOutlineColor='#BB86FC'
              backgroundColor='#302D25'
              borderColor='#BB86FC'
            />
            <Icon
              as={Ionicons}
              name='search-sharp'
              color='#BB86FC'
              size={'30px'}
              padding-left='10'
              onPress={() => searchItems()}
            />
          </HStack>
        </Box>
        <Box flex={7} backgroundColor='#302D25'>
          <ScrollView>
            <Box flex={1} justifyContent='center' alignItems='center' gap='5'>
              {data && data.length ? (
                data.map((value) => {
                  return (
                    <DefinitionCard
                      key={value['defid']}
                      val={value}
                      bookmarked={addToFav}
                      setMarked={isBookmarked(value)}
                    ></DefinitionCard>
                  );
                })
              ) : (
                <Text style={{ color: 'white' }}>No search results</Text>
              )}
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </>
  );
};