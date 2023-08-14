import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import fetchdata from '../utils/fetchdata';

function Home() {
  const rows = [
    {key: 'trending', title: 'Trending Now', fetchUrl: fetchdata.fetchTrending},
    {key: 'topRated', title: 'Top Rated', fetchUrl: fetchdata.fetchTopRated},
    {
      key: 'netflixOriginals',
      title: 'Netflix Originals',
      fetchUrl: fetchdata.fetchNetflixOriginals,
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
        data={rows}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ListHeaderComponent={<Banner />}
      />
    </View>
  );
}

export default Home;
