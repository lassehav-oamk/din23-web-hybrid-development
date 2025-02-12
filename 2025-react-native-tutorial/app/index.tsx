import { Pressable, Text, View } from "react-native";
import Timer from "./TimerExample";
import React, { useEffect, useState } from "react";
import Dimensions from "./layoutExample/1Dimensions";
import FlexDirectionAndJustify from "./layoutExample/2FlexDirectionAndJustify";
import ImageExample from "./ImageExample/ImageExample";
import IconExample from "./IconExample/IconExample";
import TextInputExample from "./TextInputExample/TextInputExample";

import { Link } from 'expo-router';
import PressableExample from "./PressableExample/PressableExample";
import TodoApp from "./TodoAppExample/TodoApp";


export default function Index() {


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white"        
      }}
    >
      <Text>Hello World</Text>
      {/*<Timer />*/}
      {/* <FlexDirectionAndJustify /> */ }
      {/*<IconExample />*/}
      {/*<ImageExample />*/}
      {/* <TextInputExample />
      <TextInputExample />

      <PressableExample /> */}
      <TodoApp />

      {/* <Link href="/Greeter">Greeter</Link>
      <Link href="/HelloWorld">HelloWorld</Link> */}


    </View>
  );
}
