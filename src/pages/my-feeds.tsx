import { Ionicons } from "@expo/vector-icons";
import { Box, Heading, Icon, Image } from "native-base";
import { useEffect, useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from 'expo-av';


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
  const [recording, setRecording] = useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await (Audio as any).requestPermissionsAsync();
      await (Audio as any).setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const { recording } = await (Audio as any).Recording.createAsync( (Audio as any).RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await (recording as any)?.stopAndUnloadAsync();
    await (Audio as any).setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = (recording as any)?.getURI();
    console.log('Recording stopped and stored at', uri);
  }


  const handleChipPress = (value: any) => {
    setValue(value);
    setText('');
  };

  const handleTextChange = (value: any) => {
    setText(value);
  };

  return (
    <>
      <Box flex={1} safeArea backgroundColor="#302D25">
        <Box
          style={{
            paddingLeft: 24,
            backgroundColor: "#302D25",
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
              {value1 === "Text" && (
                <TextInput
                  style={styles.textInput}
                  value={text}
                  onChangeText={handleTextChange}
                  placeholder="Please enter your text here..."
                  multiline={true}
                />
              )}

              {value1 === "Voice" && (
                <Box flex={1}>
                  {/* <View style={styles.container}>
                    <Button
                      title={recording ? "Stop Recording" : "Start Recording"}
                      onPress={recording ? stopRecording : startRecording}
                    />
                  </View> */}
                  <Text style={{ color: "#CDD3DE", padding: 5 }}>{text}</Text>
                  <Box flex={0.8} justifyContent="center" alignItems="center">
                    <Box
                      backgroundColor="#BB86FC"
                      padding="4"
                      borderRadius="50"
                    >
                      <Icon
                        as={Ionicons}
                        name="mic"
                        size={"50px"}
                        justifyContent="center"
                        alignItems="center"
                        color="#2B2730"
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box flex={0.4}>
          <Box
            flex="1"
            margin="30px"
            marginTop="0px"
            backgroundColor="#E3DEE8"
          ></Box>
        </Box>
      </Box>
    </>
  );
};
