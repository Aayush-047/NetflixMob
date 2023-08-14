import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  row: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  rowPosters: {
    flexDirection: 'row',
  },
  rowPosterContainer: {
    margin: 5,
  },
  rowPoster: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
  rowPosterContainer: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#000',
    elevation: 5,
    transform: [{scale: 1}],
    overflow: 'hidden',
  },
  rowPosterContainerZoomed: {
    transform: [{scale: 1.1}],
  },
  youtubePlayer: {
    alignSelf: 'stretch',
    height: 390,
  },
});

const Row = ({Title, FetchUrl}) => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(FetchUrl);
        setMovies(response.data.results.slice(0, 7));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [FetchUrl]);

  const handleMoviePress = movieId => {
    navigation.navigate('MoviePlayer', {id: movieId});
  };
  const renderMovieItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => handleMoviePress(item.id)}>
      <View style={[styles.rowPosterContainer]}>
        {item.poster_path ? (
          <Image
            source={{uri: `${base_url}${item.poster_path}`}}
            style={styles.rowPoster}
          />
        ) : (
          <Text>No Poster Available</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Title}</Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Row;
