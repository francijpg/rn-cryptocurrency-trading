import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import axios from 'axios';
import MarketPrice from './components/MarketPrice';

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [cryptocurrency, setCryptocurrency] = useState([]);
  const [consultAPI, setConsultAPI] = useState(false);
  const [tradingResult, setTradingResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tradeCryptocurrency = async () => {
      if (consultAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
        const {data} = await axios.get(url);

        setLoading(true);

        setTimeout(() => {
          setTradingResult(data.DISPLAY[cryptocurrency][currency]);
          setConsultAPI(false);
          setLoading(false);
        }, 3000);
      }
    };
    tradeCryptocurrency();
  }, [consultAPI, cryptocurrency, currency]);

  const tradingComponent = loading ? (
    <ActivityIndicator size="large" color="#5E49E2" />
  ) : (
    <MarketPrice tradingResult={tradingResult} />
  );

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.bgImage}
          source={require('./assets/img/cryptocurrencies.png')}
        />
        <View style={styles.content}>
          <Form
            currency={currency}
            cryptocurrency={cryptocurrency}
            setCurrency={setCurrency}
            setCryptocurrency={setCryptocurrency}
            setConsultAPI={setConsultAPI}
          />
        </View>
        <View style={styles.contentTradingResult}>{tradingComponent}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  content: {
    marginHorizontal: '2.5%',
  },
  contentTradingResult: {
    marginTop: 40,
  },
});

export default App;
