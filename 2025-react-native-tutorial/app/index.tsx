import { Text, View } from "react-native";
import Timer from "./TimerExample";
import React, { useEffect, useState } from "react";
import Dimensions from "./layoutExample/1Dimensions";
import FlexDirectionAndJustify from "./layoutExample/2FlexDirectionAndJustify";


export default function Index() {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white"        
      }}
    >
      <Text>Hello World</Text>

    </View>
  );
}
