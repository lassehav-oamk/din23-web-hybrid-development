import { Text, View } from "react-native";
import Timer from "./TimerExample";
import React, { useEffect, useState } from "react";

export default function Index() {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black"        
      }}
    >
      <Timer runTimeSec={8} color="white" />
      <Timer runTimeSec={10} color="green" />
    </View>
  );
}
