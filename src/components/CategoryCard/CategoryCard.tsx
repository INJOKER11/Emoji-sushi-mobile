import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {nw, nh} from '../../../normalize.helper.ts';
import {ICategory} from '@layerok/emojisushi-js-sdk';




export const CategoryCard = ({category}: { category: ICategory }) => {




  return (
    <TouchableOpacity  style={cardStyles.container}>
      <Image style={cardStyles.image} source={{uri: category?.image?.path}}/>
      <Text style={cardStyles.text}>{category?.name}</Text>
    </TouchableOpacity>
  );
};


const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    width: nw(175),
    height: nh(70),
    borderRadius: nw(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: nw(10),
  },
  image: {
    width: nw(40),
    height: nw(40),
  },
  text: {
    fontFamily: 'MontserratRegular',
    color: 'white',
    paddingLeft: nw(15),
    fontSize: nh(13),
    fontWeight: '400',
    width: nw(100),
  },
});
