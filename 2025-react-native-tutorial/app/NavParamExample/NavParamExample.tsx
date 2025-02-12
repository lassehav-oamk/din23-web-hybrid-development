import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function NavParamExample() {
  return (
    <View>
        <Text style={{ fontSize: 20}}>NavParamExample</Text>

        <Link href="/NavParamExample/examples/Foobar">
            <Text>This is a link to UrlParamTarget with route param "Foobar"</Text>
        </Link>

        <Link href="/NavParamExample/examples/Barfoo">
            <Text>This is a link to UrlParamTarget with route param "Barfoo"</Text>
        </Link>

        <Link href="/NavParamExample/examples/UrlParamTarget?example=HelloWorld">
            <Text>This is a link to UrlParamTarget with route param "HelloWorld"</Text>
        </Link>
    </View>
  )
}