import { Image, StyleSheet, Platform, View, SafeAreaView, Text, FlatList, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import AdPreview from '@/components/AdPreview';
import IAdvert from '@/types/iAdvert';
import { Link } from 'expo-router';
import useStateStore from '@/stateStore/store';

export default function HomeScreen() {

  const [ loading, setLoading ] = useState(true);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const adverts : IAdvert[] = useStateStore((state) => state.loadedAdverts);
  const addAdverts = useStateStore((state) => state.addAdverts);


  useEffect(() => {
    fetch(apiUrl + '/adverts')
      .then((response) => response.json())
      .then((data) => {

        addAdverts(data.ads.map((ad: IAdvert) => {
          return {
            ...ad,
            photos: ad.photos.map((photoUrl: string) => {
              return apiUrl + photoUrl;
            })
          }
        }))

        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView>
      {
        loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={adverts}
            numColumns={2}
            renderItem={({ item }) => (
              <Link href={ '/detailView/' + item.id} asChild>
                <Pressable>
                  <AdPreview 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    contactPhone={item.contactPhone}
                    contactEmail={item.contactEmail}
                    photos={item.photos}
                  />
                </Pressable>
              </Link>
            )}
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
