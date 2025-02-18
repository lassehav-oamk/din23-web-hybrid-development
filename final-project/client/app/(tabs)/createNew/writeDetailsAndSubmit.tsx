import { View, Text, Pressable } from 'react-native'
import React from 'react'
import IAdvert from '@/types/iAdvert'

export default function writeDetailsAndSubmit() {

  function doSubmit() {
    const advert : IAdvert = {      
      title: 'Title',
      description: 'Description',
      price: 0,
      contactPhone: 'Phone',
      contactEmail: 'Email',   
      photos: []   
    }

    fetch(process.env.EXPO_PUBLIC_API_URL + '/adverts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ad: advert})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

  }

  return (
    <View>
      <Text>Here we can write the advert details and submit</Text>
      <Pressable onPress={() => doSubmit()}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
}