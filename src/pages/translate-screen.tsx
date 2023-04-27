import { Ionicons } from "@expo/vector-icons";
import { Box, Button, Heading, Icon, Image } from "native-base";
import { useEffect, useState } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio, Video } from 'expo-av';
import { WebView } from 'react-native-webview';
import React from 'react';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 10,
  // },
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 330,
    height: 220,
  },
});

export const TranslateScreen = () => {
  const [text, setText] = useState("");
  const [value1, setValue] = useState("Text");
  const [recording, setRecording] = useState();
  const [loadVideo, setLoadVideo] = useState();
  const [videoIndex, setVideoIndex] = useState(0);
  const text1 = 'hello';
  const handleChipPress = (value: any) => {
    setValue(value);
    setText('');
  };

  const handleTextChange = (value: any) => {
    setText(value);
  };

  const convertToSign = () => {
    for (let i = 0; i < text.length; i++) {
       
    }
  };

  const htmlContent = '<video src="https://www.ablinq.co/wp-content/uploads/2021/09/Website-Background-Social-Compressed-NO-LOGO.mp4" width="950" height="650" muted autoplay></video>'; // replace with your HTML code

  const [isPlaying, setIsPlaying] = useState(false);

  const video = React.useRef(null);

  const characters = text.split('');
  const [imageIndex, setImageIndex] = useState(0);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await (video.current as any)?.pauseAsync();
    } else {
      await (video.current as any)?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };
  const assets = [
    require('../../assets/sign-videos/a.png'),
    require('../../assets/sign-videos/b.png'),
    require('../../assets/sign-videos/c.png'),
    require('../../assets/sign-videos/d.png'),
    require('../../assets/sign-videos/e.png'),
    require('../../assets/sign-videos/f.png'),
    require('../../assets/sign-videos/g.png'),
    require('../../assets/sign-videos/h.png'),
    require('../../assets/sign-videos/i.png'),
    require('../../assets/sign-videos/j.png'),
    require('../../assets/sign-videos/k.png'),
    require('../../assets/sign-videos/l.png'),
    require('../../assets/sign-videos/m.png'),
    require('../../assets/sign-videos/n.png'),
    require('../../assets/sign-videos/o.png'),
    require('../../assets/sign-videos/p.png'),
    require('../../assets/sign-videos/q.png'),
    require('../../assets/sign-videos/r.png'),
    require('../../assets/sign-videos/s.png'),
    require('../../assets/sign-videos/t.png'),
    require('../../assets/sign-videos/u.png'),
    require('../../assets/sign-videos/v.png'),
    require('../../assets/sign-videos/w.png'),
    require('../../assets/sign-videos/x.png'),
    require('../../assets/sign-videos/y.png'),
    require('../../assets/sign-videos/z.png'),
  ]
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex + 1) % characters.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [characters.length, imageIndex]);

  return (
    <>
      <Box flex={1} safeArea backgroundColor='#302D25'>
        <Box
          style={{
            paddingLeft: 24,
            backgroundColor: '#302D25',
            justifyContent: 'center',
          }}
          flex={0.1}
        >
          <Image
            source={require('../../assets/IRIS-logo.png')}
            alt='iris-logo'
            style={{
              width: 75,
              height: 24,
              marginRight: 10,
            }}
          ></Image>
        </Box>
        <Box flex={0.5} backgroundColor='#302D25'>
          <Box flex={1} margin='30px' backgroundColor='#2B2730'>
            <Box flex={0.15} backgroundColor='#2A2820' justifyContent='center'>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 25,
                  justifyContent: 'space-around',
                }}
              >
                {['Text', 'Voice', 'Quick Conversation'].map((value) => (
                  <Text
                    key={value}
                    style={{ color: value === value1 ? '#BB86FC' : '#CDD3DE' }}
                    onPress={() => handleChipPress(value)}
                  >
                    {value}
                  </Text>
                ))}
              </View>
            </Box>
            <Box flex={0.85}>
              {value1 === 'Text' && (
                <TextInput
                  style={styles.textInput}
                  value={text}
                  onChangeText={handleTextChange}
                  placeholder='Please enter your text here...'
                  multiline={true}
                />
              )}

              {value1 === 'Voice' && (
                <Box flex={1}>
                  {/* <View style={styles.container}>
                    <Button
                      title={recording ? "Stop Recording" : "Start Recording"}
                      onPress={recording ? stopRecording : startRecording}
                    />
                  </View> */}
                  <Text style={{ color: '#CDD3DE', padding: 5 }}>{text}</Text>
                  <Box flex={0.8} justifyContent='center' alignItems='center'>
                    <Box
                      backgroundColor='#BB86FC'
                      padding='4'
                      borderRadius='50'
                    >
                      <Icon
                        as={Ionicons}
                        name='mic'
                        size={'50px'}
                        justifyContent='center'
                        alignItems='center'
                        color='#2B2730'
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        {/* {value1 === 'Text' && (
          <Button onPress={convertToSign}>Convert</Button>
        )} */}
        <Box flex={0.4}>
          <Box flex='1' margin='30px' marginTop='0px' flexDirection="column">
          {/* {characters.map((char, index) => ( */}
        <Animated.Image
          key={characters.length - 1}
          source={assets[characters[characters.length - 1]?.toLowerCase().charCodeAt(0) - 97]}
          style={{
            width: "auto",
            height: 160,
          }}
          resizeMode="contain"
        />
          </Box>
        </Box>
      </Box>
    </>
  );
};
