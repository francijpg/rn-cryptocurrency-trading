import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MarketPrice = ({tradingResult}) => {
  if (Object.keys(tradingResult).length === 0) {
    return null;
  }

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = tradingResult;

  return (
    <View style={styles.content}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{PRICE} </Text>
      </Text>
      <Text style={styles.text}>
        Highest price of the day: <Text style={styles.span}> {HIGHDAY} </Text>
      </Text>
      <Text style={styles.text}>
        Lowest price of the day: <Text style={styles.span}> {LOWDAY} </Text>
      </Text>
      <Text style={styles.text}>
        Variation in the last 24 hours:{' '}
        <Text style={styles.span}> {CHANGEPCT24HOUR} % </Text>
      </Text>
      <Text style={styles.text}>
        Last update: <Text style={styles.span}> {LASTUPDATE} </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default MarketPrice;
