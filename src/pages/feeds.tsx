import { Ionicons } from '@expo/vector-icons';
import { Box, Heading, Icon, Input, InputGroup, ScrollView, Image, HStack } from 'native-base';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { fetchDictionaryData } from '../services/api.services';

export const FeedsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = (text: any) => {
    setSearchText(text);
    // Add your search logic here
  };

  const searchItems = async () => {
    fetchDictionaryData(searchText).then(response => response.json())
    .then(response => {
      setData(response['list']);
      setSearchText('');
    })
    .catch(err => console.error(err));
  }
  const DefinitionCard = ({val}: any)=>{
    console.log(val);

    return (
    <Box width="80%" backgroundColor="#2B2730" borderRadius="20" flex={1} padding="4" opacity="0.5" gap="2">
      <Box flex={3}>
      <Heading style={{color: '#BB86FC'}}>{val?.word}</Heading>
      </Box>
      <Box flex={2}>
      <Text numberOfLines={2} style={{color: '#FFFFFF'}}>{val?.definition}</Text>
      </Box>
      <Box flex={4}>
      <Text numberOfLines={2} style={{color: '#FFFFFF'}}>Example: {val?.example}</Text>
      </Box>
      <Box flex={2} flexDirection="row" justifyContent="space-between">
       <Text style={{color: '#BB86FC'}} >~ {val?.author}</Text>
       <Icon as={Ionicons} name="bookmark-outline" color="#BB86FC" size={'30px'} />
      </Box>
    </Box>
    )
  };
  
    return (
      <>
        <Box safeAreaTop backgroundColor="#302D25" flex={1}>
          <Box flex={0.5} style={{ height: 72,
      paddingLeft: 24,
      justifyContent: 'center'}}>
          <Image
            source={require("../../assets/IRIS-logo.png")}
            alt="iris-logo"
            style={{ width: 75,
              height: 24,
              marginRight: 10}}
          ></Image>
          </Box>
          <Box flex={1} justifyContent="center" paddingLeft="10">
            <HStack space="8px" alignItems="center">
              <Input
                  placeholder="Search"
                  value={searchText}
                  onChangeText={handleSearch}
                  width="80%"
                  height="10"
                  color="#fff"
                  borderRadius="10"
                  focusOutlineColor="#BB86FC"
                  backgroundColor="#302D25"
                  borderColor="#BB86FC"
                />
                <Icon
                  as={Ionicons}
                  name="search-sharp"
                  color="#BB86FC"
                  size={"30px"}
                  padding-left="10"
                  onPress={() => searchItems()}
                />
            </HStack>
          </Box>
          <Box flex={7} backgroundColor="#302D25">
            <ScrollView>
              <Box  flex={1} justifyContent="center" alignItems="center" gap="5">
              { data.length ? 
                data.map( (value) => {
                 return <DefinitionCard key={value['defid']} val={value}>Hello</DefinitionCard>
                }) : <Text style={{color: 'white'}}>No search results</Text>
              }
              </Box>
            </ScrollView>
          </Box>
        </Box>
      </>
    );
}