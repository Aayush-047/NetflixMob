import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import fetchdata from '../utils/fetchdata';
import BannerStyles from './BannerStyles';
import {useNavigation} from '@react-navigation/native';

const Banner = () => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const [movie, setMovie] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get(fetchdata.fetchTrending);
        setMovie(
          req.data.results[
            Math.floor(Math.random() * req.data.results.length - 1)
          ],
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const truncatedDescription =
    movie?.overview?.length > 150
      ? movie.overview.slice(0, 150) + '...'
      : movie?.overview;

  const handleMoviePress = movieId => {
    navigation.navigate('MoviePlayer', {id: movieId});
  };
  return (
    <View style={styles.banner}>
      <Image
        source={{uri: `${base_url}${movie?.poster_path}`}}
        style={styles.bannerImage}
      />

      <View style={styles.bannerContent}>
        <Text style={styles.title}>
          {movie?.name || movie?.original_name || movie?.title}
        </Text>
        <Text style={styles.description}>{truncatedDescription}</Text>
        <View style={styles.buttonContainer}>
          <Text
            style={styles.button}
            // onPress={() => navigation.navigate('Movies')}
            onPress={() => handleMoviePress(movie.id)}>
            Play ▶
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(BannerStyles);

export default Banner;
