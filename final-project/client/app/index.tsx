import { Image, StyleSheet, Platform, View, SafeAreaView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import AdPreview from '@/components/AdPreview';
import IAdvert from '@/types/iAdvert';

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
          <View style={styles.adContainer}>
            {ads.map((ad) => (
              <AdPreview 
                key={ad.id}
                id={ad.id}
                title={ad.title}
                description={ad.description}
                price={ad.price}
                contactPhone={ad.contactPhone}
                contactEmail={ad.contactEmail}
                photos={ad.photos}
              />
            ))}
          </View>
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
