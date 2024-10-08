import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import {nh, nw} from '../../../normalize.helper.ts';

import Counter from '../Counter/Counter.tsx';

import Heart from '../../assets/Icons/Heart.svg';
import {Product} from '../../models/Product.ts';

const ProductCard = ({product}: {product: Product}) => {

  const descriptionThreeWords = (str: string | null) => {
    if(str === null) return;
    const words: string[] = str.split(',');
    let result: string[] = [];
    let i = 0;
    for(i; i <= 3; i++) {
      result.push(words[i]);
    }
    if(words.length > 3){
      return result + '...';
    }
    return result.join(',');
  };



  return (
      <View style={styles.wrapper}>
        <Text style={styles.weight}>{product.weight} г</Text>
        <View style={styles.heartContainer}>
          <Heart width="14" height="12" color="white"/>
        </View>

        <View style={styles.imageDescriptionWrapper}>
          <Image style={styles.image} source={{uri: product?.mainImage}}/>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{descriptionThreeWords(product.descriptionShort)}</Text>
          </View>
        </View>
          <View style={styles.priceAndButtonContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.discountPrice}></Text>
              <Text style={styles.regularPrice}>9556</Text>
            </View>
              <Counter/>
          </View>

      </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1C1C1C',
    width: nw(365),
    height: nh(150),
    borderRadius: nw(10),
    position: 'relative',
    marginBottom: nh(15),
    display: 'flex',
  },
  image: {
    width: nw(111),
    height: nh(68),
    marginTop: nh(20),
    marginLeft: nw(15),
  },
  imageDescriptionWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  textWrapper: {
    marginTop: nh(20),
    marginLeft: nw(15),
  },
  weight: {
    position: 'absolute',
    backgroundColor: '#141414CC',
    opacity: 80,
    padding: nw(5),
    borderRadius: 10,
    zIndex: 1,
    marginLeft: nw(5),
    marginTop: nh(5),
    height: nh(25),
    fontSize: 12,
    color: 'white',
  },
  heartContainer: {
    width: nw(30),
    height: nh(30),
    position: 'absolute',
    backgroundColor: '#141414CC',
    opacity: 80,
    borderRadius: 20,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: nh(5),
    left: nw(105),
  },
  title: {
    color: 'white',
    fontFamily: 'MontserratRegular',
    fontWeight: '400',
    lineHeight: 17,
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    fontFamily: 'MontserratRegular',
    fontWeight: '300',
    overflow: 'hidden',
    color: '#838383',
    width: nw(190),
    height: nh(30),
  },
  button: {
    width: nw(35),
    height: nh(35),
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceAndButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: nh(17),
    marginLeft: nw(15),
    marginRight: nw(10),
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: 'white',
  },
  regularPrice: {
    fontSize: 12,
    color: '#727272',
    fontWeight: '600',
    lineHeight: 15,
    marginLeft: nw(5),
    textDecorationLine: 'line-through',
  },
});

export default ProductCard;
