import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import {useQuery} from '@tanstack/react-query';
import {cityQuery} from '~/components/Header/city.query.ts';
import store from '~/stores/store.ts';

const RefundRules = () => {
  const {data: cityRes} = useQuery(cityQuery);
  const city = cityRes?.find(c => c.slug === store.city);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: '#141414',
      }}>
      <WebView
        source={{uri: 'https://odesa.emojisushi.com.ua/refund-policy-ext'}}
      />
    </View>
  );
};

export default RefundRules;
