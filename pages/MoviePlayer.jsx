import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import movieTrailer from 'movie-trailer';
import Row from '../components/Row';
import fetchdata from '../utils/fetchdata';

const windowWidth = Dimensions.get('window').width;

const MoviePlayer = ({navigation, route}) => {
  const {id} = route.params;
  const [movieData, setMovieData] = useState({});
  const [playerUrl, setPlayerUrl] = useState('');
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=956bc59cec62b55741365cda6ad66d4a`,
    )
      .then(response => response.json())
      .then(data => {
        setMovieData(data);
        navigation.setOptions({
          title: data?.original_title || data?.original_name,
        });
      })
      .catch(error => console.error('Error fetching additional data:', error));
  }, [id]);

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      if (movieData) {
        const movieName = movieData?.original_title || movieData?.original_name;
        const releaseYear = (movieData.release_date || '').split('-')[0];
        try {
          const url = await movieTrailer(movieName || '', {
            year: releaseYear,
          });
          if (url) {
            const videoId = url.split('v=')[1];
            setPlayerUrl(videoId);
          }
        } catch (error) {
          console.error('Error fetching or constructing trailer URL:', error);
          setPlayerUrl('');
        }
      }
    };

    fetchTrailerUrl();
  }, [movieData]);

  const handlePlayClick = () => {
    setShowPlayer(true);
  };

  const handleBackClick = () => {
    setShowPlayer(false);
  };

  return (
    <View style={styles.container}>
      {showPlayer ? (
        <View style={styles.playerContainer}>
          {playerUrl ? (
            <>
              <YoutubePlayer
                height={300}
                videoId={playerUrl}
                play={true}
                onChangeState={event => {
                  if (event === 'ended') {
                    setShowPlayer(false);
                  }
                }}
              />

              <Button
                onPress={handleBackClick}
                title="Back"
                color="#E50914"
                style={styles.button}
              />
            </>
          ) : (
            <Text style={styles.noTrailerText}>No trailer available</Text>
          )}
        </View>
      ) : (
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`,
          }}
          style={styles.backgroundImage}>
          <Text style={styles.title}>
            {movieData?.original_title || movieData?.original_name}
          </Text>
          <Text style={styles.overview}>Overview: {movieData?.overview}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Play" onPress={handlePlayClick} color="#E50914" />
          </View>
        </ImageBackground>
      )}
      <View style={styles.bottomSection}>
        <Text style={styles.recommendedText}>Recommended For You:</Text>
        <Row FetchUrl={fetchdata.fetchTrending} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: 'black',
  },
  playerContainer: {
    flex: 1,
  },
  noTrailerText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    height: 250,
  },
  title: {
    color: 'white',
    fontSize: 25,
    marginTop: 250,
    width: windowWidth,
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
  },
  overview: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    width: windowWidth,
  },
  recommendedText: {
    paddingTop: 20,
    fontSize: 18,
    color: 'white',
    paddingLeft: 15,
  },
  buttonContainer: {
    height: 60,
    width: windowWidth,
  },
});

export default MoviePlayer;
