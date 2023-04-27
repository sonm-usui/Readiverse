import React, {useEffect, useRef, useState} from "react";
import {Box, Button, Heading, Image, Text, View, VStack} from "native-base";
import {Animated, Dimensions} from "react-native";

// TODO: Pass the data as assets

const Animation = ({
  navigation,
  assets,
  height,
  width,
  loop = false,
  speed = 500,
}: any) => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => {
        if (prevIndex === assets.length - 1 && !loop) return assets.length - 1;
        return (prevIndex + 1) % assets.length;
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box safeArea>
      <Animated.Image
        source={assets[imageIndex]}
        style={{
          width: width || "auto",
          height: height || 100,
        }}
        resizeMode="contain"
      />
    </Box>
  );
};

export default Animation;
