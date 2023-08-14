import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import fetchdata from '../utils/fetchdata';

function Movies() {
  const movieCategories = [
    {key: 'action', title: 'Action', fetchUrl: fetchdata.fetchActionMovies},
    {key: 'comedy', title: 'Comedy', fetchUrl: fetchdata.fetchComedyMovies},
    {key: 'horror', title: 'Horror', fetchUrl: fetchdata.fetchHorrorMovies},
    {
      key: 'romantic',
      title: 'Romantic',
      fetchUrl: fetchdata.fetchRomanceMovies,
    },
  ];

  const renderItem = ({item}) => (
    <Row Title={item.title} FetchUrl={item.fetchUrl} />
  );

  return (
    <View
      style={{
        backgroundColor: 'black',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 50,
      }}>
      <Navbar />
      <FlatList
        data={movieCategories}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

export default Movies;
