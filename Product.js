import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

// item size
const ITEM_HEIGHT = 150;
const ITEM_MARGIN = 8;
const NumColums = 2;



const Product = props => {
 return (
    <View style={styles.container}>
        <Image style={styles.photo} source={{ uri:props.image}} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.category}>Price : {props.price}</Text>
        <Text style={styles.disPercent}>Discount: {props.discountPercentage}%</Text>
    
    </View>
 )};


 const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: (SCREEN_WIDTH - (NumColums + 1) * ITEM_MARGIN) / NumColums,
        height: ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 2,
        borderRadius: 15
      },
      photo: {
        width: (SCREEN_WIDTH - (NumColums + 1) * ITEM_MARGIN) / NumColums,
        height: ITEM_HEIGHT,
        //borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        
      },
      title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
      },
      category: {
        marginTop: 5,
        marginBottom: 5,
        fontSize:15
      },
      disPercent:{
        fontSize:14
      }
    });
 export default Product;
