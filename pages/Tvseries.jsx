import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import fetchdata from '../utils/fetchdata';

function Tvseries() {
  const tvCategories = [
    {key: 'popular', title: 'Popular', fetchUrl: fetchdata.fetchPopularTv},
    {key: 'topRated', title: 'TopRated', fetchUrl: fetchdata.fetchTopRatedTv},
    {
      key: 'documentaries',
      title: 'Documentaries',
      fetchUrl: fetchdata.fetchDocumentaries,
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
        data={tvCategories}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

export default Tvseries;
