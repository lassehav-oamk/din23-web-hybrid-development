import { Pressable, Text, View } from "react-native";
import Timer from "./TimerExample";
import React, { useEffect, useState } from "react";
import Dimensions from "./layoutExample/1Dimensions";
import FlexDirectionAndJustify from "./layoutExample/2FlexDirectionAndJustify";
import ImageExample from "./ImageExample/ImageExample";
import IconExample from "./IconExample/IconExample";
import TextInputExample from "./TextInputExample/TextInputExample";

import { Link, router } from 'expo-router';
import PressableExample from "./PressableExample/PressableExample";
import TodoApp from "./TodoAppExample/TodoApp";
import NavParamExample from "./NavParamExample/NavParamExample";
import StackNavExample from "./StackNavExample/_layout";



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
      {/* <TodoApp /> */}

      {/* <Text>Links to other views</Text>
      <Link href="/Greeter">Greeter</Link>
      <Link href="/HelloWorld">HelloWorld</Link>

      <View style={{ marginTop: 20 }}>
        <Pressable onPress={() => {
          router.navigate('/TodoAppExample/TodoApp');
        }}>
          <Text>Navigate to TodoApp from code</Text>
        </Pressable>
      </View> */}

      {/* <NavParamExample /> */}

      <Link href="/StackNavExample">
        <Text>Navigate to StackNavExample</Text>
      </Link>

    </View>
  );
}
