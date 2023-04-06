import { ImageBackground, StyleSheet, View } from 'react-native';
import { Box, Heading, Text, HStack } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image, VStack } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';

const styles = StyleSheet.create({
    container: {
      height: 72,
      paddingLeft: 24,
      backgroundColor: '#201E19',
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
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/IRIS-logo.png")}
            alt="iris-logo"
            style={styles.logo}
          ></Image>
        </View>
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
            colors={["#201E19", "transparent", "#302D25"]}
            style={styles.background}
            >
              <View style={{flexDirection: 'column', top: 50}}>
               <View>
                <Heading style={{textAlign: 'center', color: '#CDD3DE', fontSize: 32, letterSpacing: 2}}>Your Voice in</Heading>
                <Heading style={{textAlign: 'center', color: '#BB86FC', fontSize: 32}}>Motion</Heading>
               </View>
               <Text style={{textAlign: 'center', color: '#CDD3DE', fontSize: 14}}>A One Stop Solution to Solve all Your Communication Problems</Text>
              </View>
              </LinearGradient>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ height: 285 }}></View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#302D25",
              height: 100,
            }}
          >
            <Image source={require("../../assets/left.png")} alt="right"/>
            <Image source={require("../../assets/right.png")} alt="left" />
            {/* Other content on the right side */}
          </View>
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
      </SafeAreaView>
    );
}

export default Home;
