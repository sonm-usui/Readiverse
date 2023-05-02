import { ImageBackground, Linking, StyleSheet, View } from 'react-native';
import { Box, Heading, Text, HStack } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image, VStack } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import { Motion } from "@legendapp/motion"
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
      height: 72,
      paddingLeft: 24,
      backgroundColor: '#302D25',
      justifyContent: 'center'
    },
    logo: {
      width: 75,
      height: 24,
      marginRight: 10
    },
    containers: {
      backgroundColor: 'orange',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });
  

const Home = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const isFocused = useIsFocused();
   useEffect(() => {
    Linking.addEventListener('url', (event) => {
      const { path, queryParams } = (Linking as any).parse(event.url);
            if (path === 'Profile') {
        const { id } = queryParams;
        navigation.navigate('Profile', { id });
      }
    });
   }, [])
   
    return (
      isFocused ? <>
      <Box backgroundColor="#302D25" safeAreaTop>
        <Box style={styles.container}>
          <Image
            source={require("../../assets/IRIS-logo.png")}
            alt="iris-logo"
            style={styles.logo}
          ></Image>
        </Box>
        <View>
          <ImageBackground
            style={{ flex: 0.5, height: 285 }}
            source={require("../../assets/bg.png")}
            resizeMode="cover"
          >
          </ImageBackground>
        </View>
        <View style={styles.containers}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#302D25", "transparent", "#302D25"]}
            style={styles.background}
            >
              <View
               style={{flexDirection: 'column', top: 50}}
               >
               <Motion.View 
                 initial={{ rotate: "0deg" }}
                 animate={{ rotate: "360deg" }}
                 transition={{ type: "tween", duration: 1000 }}
               >
                <Heading style={{textAlign: 'center', color: '#CDD3DE', fontSize: 32, letterSpacing: 2}}>Your Voice in</Heading>
                <Heading style={{textAlign: 'center', color: '#BB86FC', fontSize: 32}}>Motion</Heading>
               </Motion.View>
               <Motion.Text 
                initial={{rotate: "0deg", fontSize:0 }}
                animate={{ rotate: "360deg", fontSize: 14 }}
                transition={{ type: "tween", duration: 2000 }}
               style={{textAlign: 'center', color: '#CDD3DE', fontSize: 14}}>A One Stop Solution to Solve all Your Communication Problems</Motion.Text>
              </View>
              </LinearGradient>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ height: 285 }}></View>
          <Motion.View
            style={{
              flexDirection: "row",
              backgroundColor: "#302D25",
              height: 100,
            }}
            initial={{ x: 100 }}

            animate={{
              x: 0
          }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 400
          }}
          >
            <Image source={require("../../assets/left.png")} alt="right"/>
            <Image source={require("../../assets/right.png")} alt="left" />
            {/* Other content on the right side */}
          </Motion.View>
          <View style={{ alignItems: "center", justifyContent: 'center', backgroundColor: "#302D25"}}>
            <Heading style={{marginBottom: 20, marginTop: 7, color: '#CDD3DE'}}>Sign Language Translator</Heading>
          </View>
          <View style={{flexDirection: 'column', gap: 12, backgroundColor: "#302D25"}}>
            <Text style={{textAlign: 'center', color: '#CDD3DE', fontSize: 12}}>
              Your Words Matter, And our Translation tool is designed to do just
              that. IRIS makes Verbal and Non Verbal Communication seem just
              easy and Seamless.
            </Text>
            <Text style={{textAlign: 'center', color: '#BB86FC', fontSize: 12}}>IRIS Connecting Everyone, Anywhere, Anytime</Text>
            <Text style={{textAlign: 'center', marginBottom: 40, color: '#CDD3DE', fontSize: 12}}>
              IRIS is a One Stop place to Communicate with anyone, anywhere and
              anytime. With Our Swift Sign Language Translator you can
              communicate with anyone over any dialect easily..
            </Text>
          </View>
        </View>
        </Box>
        </> : <></>
    );
}

export default Home;
