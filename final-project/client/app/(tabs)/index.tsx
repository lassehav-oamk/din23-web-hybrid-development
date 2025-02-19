import { Image, StyleSheet, Platform, View, SafeAreaView, Text, FlatList, Dimensions, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import AdPreview from '@/components/AdPreview';
import IAdvert from '@/types/iAdvert';
import { Link } from 'expo-router';
import useStateStore from '@/stateStore/store';

export default function HomeScreen() {

  const loadedAdverts : IAdvert[] = useStateStore((state) => state.loadedAdverts);
  const setLoadedAdverts = useStateStore((state) => state.setLoadedAdverts)

  const [ loading, setLoading ] = useState(true);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    fetch(apiUrl + '/adverts')
      .then((response) => response.json())
      .then((data) => {
        setLoadedAdverts(data.ads.map((ad: IAdvert) => {
          return { // convert the relative photo URLS to absolute photo urls
            ...ad,
            photos: ad.photos.map((photoUrl: string) => {
              return apiUrl + photoUrl; // append the current API URL to the photo path
            })
          }
        }));
        setLoading(false);
      });
  }, []);

  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView>
      {
        loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={loadedAdverts}
            numColumns={2}
            renderItem={({ item }) => (      
              <Link asChild href={ '/advertDetail/' + item.id }>
                <Pressable>        
                  <View style={{ width: screenWidth / 2 }}>
                    <AdPreview 
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      contactPhone={item.contactPhone}
                      contactEmail={item.contactEmail}
                      photos={item.photos}
                    />
                  </View>
                </Pressable>     
              </Link>
            )}
            keyExtractor={item => item.id.toString()}
          />
        ) 
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    display: 'flex',
    padding: 10,
  }
});
