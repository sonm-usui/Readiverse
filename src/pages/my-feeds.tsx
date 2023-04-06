import { Ionicons } from "@expo/vector-icons";
import { Box, Heading, Icon, Image } from "native-base";
import { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#302D25",
    borderRadius: 5,
    padding: 10,
    height: 150,
    flex: 1,
    color: '#CDD3DE',
    textAlignVertical: "top", // to start typing from top
  },
});

export const MyFeedsScreen = () => {
  const [text, setText] = useState("");
  const [value1, setValue] = useState("Text");
 

  const handleChipPress = (value: any) => {
    setValue(value);
    setText('');
  };

  const handleTextChange = (value: any) => {
    setText(value);
  };

  return (
    <>
      <Box flex={1} pt={Platform.OS === "ios" ? "48px" : "18px"} safeArea>
        <Box
          style={{
            paddingLeft: 24,
            backgroundColor: "#201E19",
            justifyContent: "center",
          }}
          flex={0.1}
        >
          <Image
            source={require("../../assets/IRIS-logo.png")}
            alt="iris-logo"
            style={{
              width: 75,
              height: 24,
              marginRight: 10,
            }}
          ></Image>
        </Box>
        <Box flex={0.5} backgroundColor="#302D25">
          <Box flex={1} margin="30px" backgroundColor="#2B2730">
            <Box flex={0.15} backgroundColor="#2A2820" justifyContent="center">
              <View
                style={{
                  flexDirection: "row",
                  gap: 25,
                  justifyContent: "space-around",
                }}
              >
                {["Text", "Voice", "Quick Conversation"].map((value) => (
                  <Text
                    key={value}
                    style={{ color: value === value1 ? "#BB86FC" : "#CDD3DE" }}
                    onPress={() => handleChipPress(value)}
                  >
                    {value}
                  </Text>
                ))}
              </View>
            </Box>
            <Box flex={0.85}>
              { value1 === 'Text' && <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={handleTextChange}
                placeholder="Please enter your text here..."
                multiline={true}
              />}

              {
                value1 === 'Voice' && <Box flex={1}>
                  <Text style={{color: '#CDD3DE', padding: 5}}>{text}</Text>
                  <Box  flex={0.8}  justifyContent="center" alignItems="center">
                    <Box backgroundColor="#BB86FC" padding="4" borderRadius="50">
                    <Icon as={Ionicons} name="mic" size={'50px'} justifyContent="center" alignItems="center" color='#2B2730'
                     />
                      </Box>
                    </Box>
                  </Box>
              }
            </Box>
          </Box>
        </Box>
        <Box flex={0.4} backgroundColor="#cccccc">
          <Text>dhsahdds sbdhjsbd bsdhjdbjs</Text>
        </Box>
      </Box>
    </>
  );
};
