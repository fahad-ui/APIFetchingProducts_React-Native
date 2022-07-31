import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,StyleSheet } from 'react-native';
import Product from './Product';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const productdetails = itemData =>{
    return <Product title={itemData.item.title}
     image={itemData.item.thumbnail}
     price={itemData.item.price}
     discountPercentage={itemData.item.discountPercentage}
     />
  }


  
  return (

    <View style={{marginTop:40}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          numColumns={2}
          renderItem={productdetails}/>
            
          )}
    </View>
  );
};


