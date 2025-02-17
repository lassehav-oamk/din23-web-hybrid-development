import { Image, StyleSheet, Platform, View, SafeAreaView, Text, FlatList, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import AdPreview from '@/components/AdPreview';
import IAdvert from '@/types/iAdvert';
import { Link } from 'expo-router';

export default function HomeScreen() {

  const [ ads, setAds ] = useState<IAdvert[]>([]);
  const [ loading, setLoading ] = useState(true);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    fetch(apiUrl + '/adverts')
      .then((response) => response.json())
      .then((data) => {
        setAds(data.ads.map((ad: IAdvert) => {
          return {
            ...ad,
            photos: ad.photos.map((photoUrl: string) => {
              return apiUrl + photoUrl;
            })
          }
        }));
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView>
      {
        loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList contentContainerStyle={styles.adContainer}
            data={ads}
            keyExtractor={(ad) => ad.id.toString()}
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
